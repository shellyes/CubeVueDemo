
var iframe;
function getScreenId(callback, custom_parameter) {
    if (navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob)) {
        // microsoft edge => navigator.getDisplayMedia(screen_constraints).then(onSuccess, onFailure);
        callback({
            video: true
        });
        return;
    }

    // for Firefox:
    // sourceId == 'firefox'
    // screen_constraints = {...}
    if (!!navigator.mozGetUserMedia) {
        callback(null, 'firefox', {
            video: {
                mozMediaSource: 'window',
                mediaSource: 'window'
            }
        });
        return;
    }

    window.addEventListener('message', onIFrameCallback);

    function onIFrameCallback(event) {
        if (!event.data) return;

        if (event.data.chromeMediaSourceId) {
            if (event.data.chromeMediaSourceId === 'PermissionDeniedError') {
                callback('permission-denied');
            } else {
                callback(null, event.data.chromeMediaSourceId, getScreenConstraints(null, event.data.chromeMediaSourceId, event.data.canRequestAudioTrack));
            }

            // this event listener is no more needed
            window.removeEventListener('message', onIFrameCallback);
        }

        if (event.data.chromeExtensionStatus) {
            callback(event.data.chromeExtensionStatus, null, getScreenConstraints(event.data.chromeExtensionStatus));

            // this event listener is no more needed
            window.removeEventListener('message', onIFrameCallback);
        }
    }

    if (!custom_parameter) {
        setTimeout(postGetSourceIdMessage, 100);
    }
    else {
        setTimeout(function () {
            postGetSourceIdMessage(custom_parameter);
        }, 100);
    }
}
function postGetSourceIdMessage(custom_parameter) {
    if (!iframe) {
        loadIFrame(function () {
            postGetSourceIdMessage(custom_parameter);
        });
        return;
    }

    if (!iframe.isLoaded) {
        setTimeout(function () {
            postGetSourceIdMessage(custom_parameter);
        }, 100);
        return;
    }

    if (!custom_parameter) {
        iframe.contentWindow.postMessage({
            captureSourceId: true
        }, '*');
    }
    else if (!!custom_parameter.forEach) {
        iframe.contentWindow.postMessage({
            captureCustomSourceId: custom_parameter
        }, '*');
    }
    else {
        iframe.contentWindow.postMessage({
            captureSourceIdWithAudio: true
        }, '*');
    }
}
function loadIFrame(loadCallback) {
    if (iframe) {
        loadCallback();
        return;
    }

    iframe = document.createElement('iframe');
    iframe.onload = function () {
        iframe.isLoaded = true;

        loadCallback();
    };
    iframe.src = 'https://www.webrtc-experiment.com/getSourceId/'; // https://wwww.yourdomain.com/getScreenId.html
    iframe.style.display = 'none';
    (document.body || document.documentElement).appendChild(iframe);
}
function getChromeExtensionStatus(callback) {
    // for Firefox:
    if (!!navigator.mozGetUserMedia) {
        callback('installed-enabled');
        return;
    }

    window.addEventListener('message', onIFrameCallback);

    function onIFrameCallback(event) {
        if (!event.data) return;

        if (event.data.chromeExtensionStatus) {
            callback(event.data.chromeExtensionStatus);

            // this event listener is no more needed
            window.removeEventListener('message', onIFrameCallback);
        }
    }

    setTimeout(postGetChromeExtensionStatusMessage, 100);
}
function postGetChromeExtensionStatusMessage() {
    if (!iframe) {
        loadIFrame(postGetChromeExtensionStatusMessage);
        return;
    }

    if (!iframe.isLoaded) {
        setTimeout(postGetChromeExtensionStatusMessage, 100);
        return;
    }

    iframe.contentWindow.postMessage({
        getChromeExtensionStatus: true
    }, '*');
}
function getScreenConstraints(callback) {
    loadIFrame(function () {
        // getScreenId(function(error, sourceId, screen_constraints) {
        //     if(!screen_constraints) {
        //         screen_constraints = {
        //             video: true
        //         };
        //     }
        //
        //     callback && callback(error, screen_constraints.video);
        // });
    });
}
export default  {
    getScreenId, 
    postGetSourceIdMessage,
    loadIFrame,
    getChromeExtensionStatus,
    postGetChromeExtensionStatusMessage,
    getScreenConstraints
}