console.log("LOADING IQB");

$( document ).ready(function() {

    console.log("IQB - LOADED");
    let log = function (data) {
        $('.requestsLog').append(`<div>${data}</div>`)
    }

    $.ajaxSetup({
        headers: {
            'Authorization': "Basic dmlyaW1pYTpob3dJRjIxMG12OA=="
        }
    });

/*
https://docs.google.com/document/d/1VPA99yebFMqM1FLwn7GHuTXlpR7RqDVbmZM6035WzQI/edit#heading=h.i35a9q1rqui4


/check/codereview?issueKey=<ticket-key>
/check/aufeaturereview?issueKey=<ticket-key>
/check/codereview?issueKey=<ticket-key>
/check/audocreview?issueKey=<ticket-key>
/check/auepicreview?issueKey=<ticket-key>



/comments?action=reject&issueKey=<ticket-key>
/comments?action=rejectComments&issueKey=<ticket-key>
/comments?action=approve&issueKey=<ticket-key>
/comments?action=approve&issueKey=<ticket-key>
/comments?action=reject&issueKey=<ticket-key>
/comments?action=reject&issueKey=<ticket-key>
/comments?action=approve&issueKey=<ticket-key>
/comments?action=reject&issueKey=<ticket-key>
/comments?action=approve&issueKey=<ticket-key>
/comments?action=reject&issueKey=<ticket-key>
/comments?action=approve&issueKey=<ticket-key>

*/
$('.aui-toolbar2-primary').append(`<div>My Checks:
            <button id="qeCheckCR">Check CR</button>
            </div>`)
		

    $('.aui-toolbar2-primary').append(`<div>My Actions
            <button id="qeApprove">Approve</button>
            <button id="qeComment">Comment</button>
            <button id="qeReject">Reject</button>
        <div><div class="requestsLog"></div>`)

 document.getElementById('qeCheckCR').addEventListener('click', function () {
        let key = $(".issue-link").attr("data-issue-key");

       log("Approve key: " + key);

        $.post("https://pa-qe-jirawf-api-prod.private.central-eks.aureacentral.com/check/codereview?issueKey="+key, function( data ) {
            log( data );
        }).fail(function(error, data) {
            log( "error" );
            log( JSON.stringify( arguments) );
        })

    }, false);

    document.getElementById('qeApprove').addEventListener('click', function () {
        let key = $(".issue-link").attr("data-issue-key");

       log("Approve key: " + key);

        $.post("https://pa-qe-jirawf-api-prod.private.central-eks.aureacentral.com/comments?action=approve&issueKey="+key, function( data ) {
            log( data );
        }).fail(function(error, data) {
            log( "error" );
            log( JSON.stringify( arguments) );
        })

    }, false);

    document.getElementById('qeComment').addEventListener('click', function () {
        let key = $(".issue-link").attr("data-issue-key");

       log("Approve key: " + key);
        $.post("https://pa-qe-jirawf-api-prod.private.central-eks.aureacentral.com/comments?action=rejectComments&issueKey="+key, function( data ) {
            log( data );
        }).fail(function(error) {
            log( "error" );
              log( JSON.stringify( arguments) );
        })
    }, false);

    document.getElementById('qeReject').addEventListener('click', function () {
        let key = $(".issue-link").attr("data-issue-key");

       log("Approve key: " + key);
        $.post("https://pa-qe-jirawf-api-prod.private.central-eks.aureacentral.com/comments?action=reject&issueKey="+key, function( data ) {
            log( data );
        }).fail(function(error) {
            log( "error" );
              log( JSON.stringify( arguments) );
        })
    }, false);
});
