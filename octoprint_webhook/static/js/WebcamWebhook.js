/*
 * View model for OctoPrint-WebcamWebhook
 *
 * Author: PaddyCo
 * License: AGPLv3
 */
$(function() {
    function WebcamWebhookViewModel(parameters) {
        var self = this;

        var apiUrl = OctoPrint.getSimpleApiUrl("octoprint_webcamwebhook");
        var hashes = ["#control", "#webcam"];

        var onWebcamAccess = function() {
            fetch(apiUrl)
                .catch(function(e) { console.error(e); });
        }

        if (hashes.indexOf(window.location.hash) >= 0) {
            onWebcamAccess();
        }

        $(window).on('hashchange', function(e) {
            if (hashes.indexOf(window.location.hash) >= 0) {
                onWebcamAccess();
            }
        });
    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: WebcamWebhookViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ "settingsViewModel" /* "loginStateViewModel", "settingsViewModel" */ ],
        elements: [ ]
    });
});
