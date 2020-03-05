console.log("LOADING IQB");

$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'Authorization': "Basic dmlyaW1pYTpob3dJRjIxMG12OA=="
        }
    });

    console.log("IQB - LOADED");
    let log = function (data) {
        $('.requestsLog').append(`<div>${data}</div>`)
    }
    document.getElementById('qeApprove').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);

            log("QE approve " + key)
            $.post("http://pa-qe-jirawf-api-prod.private.central-eks.aureacentral.com/comments?action=approve&issueKey=" + key, function (data) {
                log(data);
            }).fail(function(error) {
                log( "error" );
              log( JSON.stringify( error) )
            })
        });
    }, false);

    document.getElementById('qeComment').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);

            log("QE Comment " + key)
            $.post("http://pa-qe-jirawf-api-prod.private.central-eks.aureacentral.com/comments?action=rejectComments&issueKey=" + key, function (data) {
                log(data);
            }).fail(function(error) {
                log( "error" );
              log( JSON.stringify( error) )
            })
        });
    }, false);

    document.getElementById('qeReject').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);

            log("QE Reject " + key)
            $.post("http://pa-qe-jirawf-api-prod.private.central-eks.aureacentral.com/comments?action=reject&issueKey=" + key, function (data) {
                log(data);
            }).fail(function(error) {
                log( "error" );
              log( JSON.stringify( error) )
            })
        });
    }, false);
});