document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('diff').addEventListener('click', function () {
            try {
                var first = document.getElementById("diff1").value;

                var second = document.getElementById("diff2").value;

                var diff = Diff.diffChars(first, second),
                    display = document.querySelector("div#display"),
                    fragment = document.createDocumentFragment();

                diff.forEach(function (part) {
                    // green for additions, red for deletions
                    // grey for common parts
                    color = part.added ? 'green' :
                        part.removed ? 'red' : 'grey';
                    span = document.createElement('span');
                    span.style.color = color;
                    span.appendChild(document
                        .createTextNode(part.value));
                    fragment.appendChild(span);
                });

                if (!display){
                    alert("no display");
                }

                display.innerHTML="";
                display.appendChild(fragment);
            }catch(e){
                console.log(e);
                alert(e);
            }
    }, false);

    document.getElementById('assignEpic').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            console.log("assign epic key: " + key);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/assign-epic?key=' + encodeURI(key), true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('linkPa').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            console.log("link pa: " + key);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/link-pa?key=' + encodeURI(key), true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('linkCr').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            console.log("link pa: " + key);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/link-cr?key=' + encodeURI(key), true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('linkFQA').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            console.log("link pa: " + key);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/link-fqa?key=' + encodeURI(key), true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('copyFQA').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            console.log("copy fqa: " + key);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/copy-fqa?to=' + encodeURI(key) + "&from="+document.getElementById("copyFQAFrom").value, true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('paApprove').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            console.log("link pa: " + key);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/pa-approve?key=' + encodeURI(key), true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('paReject').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            console.log("link pa: " + key);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/pa-reject?key=' + encodeURI(key), true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('rejectEpic').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            console.log("reject epic key: " + key);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/reject-epic?key=' + encodeURI(key) + "&reason="+encodeURIComponent(document.getElementById("epicRejectReason").value), true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('assign').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            var textValue = document.getElementById('assignText').value;
            if (textValue){
                key=textValue;
            }
            console.log("assign key: " + key);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/assign?key=' + encodeURI(key), true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('assignFQA').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            var textValue = document.getElementById('assignText').value;
            if (textValue){
                key=textValue;
            }
            console.log("assign key: " + key);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/assign-fqa?key=' + encodeURI(key), true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('clickFS').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/fs?key=' + key, true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('clickFSReject').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/fs-reject?key=' + key, true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('clickFSTC').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/fstc?key=' + key, true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('clickFSTC-reject').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/fstc-reject?key=' + key, true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('clickCR').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/cr?key=' + key, true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);


    document.getElementById('clickCRSkip').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/crSkip?key=' + key, true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('clickCRReject').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/cr-reject?key=' + key, true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('clickAU').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/au?key=' + key, true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    document.getElementById('clickAUReject').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/au-reject?key=' + key, true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    function search() {
        var xhr = new XMLHttpRequest;
        xhr.open('GET', 'http://localhost:3000/search', true);
        xhr.onload = function (e) {
            alert(xhr.responseText);
        };
        xhr.send();
    }

    document.getElementById('pollStart').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);




        });
    }, false);

    document.getElementById('pollEnd').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/au?key=' + key, true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);


    document.getElementById('clickVER').addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/ver?key=' + key, true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        });
    }, false);

    var fsMapHandler = function(full) {return function () {
        chrome.tabs.getSelected(null, function (tab) {
            var key = tab.url.substr(tab.url.lastIndexOf('/') + 1);
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'http://localhost:3000/fs-mapping?key=' + key + (full ? "&full=true" : ""), true);
            var id = tab.id;
            xhr.addEventListener("load", function (e) {
                console.log("response text: ")
                console.log(xhr.responseText);
                try {
                    var result = xhr.responseText.replace(/`/gm, "'");//.replace(/(\r\n|\n|\r)/gm, "<br/>");
                    var code = [
                        'publish("nzt1",`<pre>'+result+'</pre>`);',
                        'diffy();',
                    ].join("\n");
                } catch (ex) {
                    alert(ex);
                }

                /* Injt the code into the current tab */
                chrome.tabs.executeScript(id, {code: code});

            }, false);

            xhr.send(null);

        });
    }
    };

    document.getElementById('clickMap').addEventListener('click', fsMapHandler(), false);
    document.getElementById('fsMapFull').addEventListener('click', fsMapHandler(true), false);

}, false);