document.addEventListener('DOMContentLoaded', function () {
    try {
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

                if (!display) {
                    alert("no display");
                }

                display.innerHTML = "";
                display.appendChild(fragment);
            } catch (e) {
                console.log(e);
                alert(e);
            }
        }, false);

        document.getElementById('assignEpic').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                console.log("assign epic key: " + key);
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing Epic Assign')"});
                });
                xhr.open('GET', 'http://localhost:3000/assign-epic?key=' + encodeURI(key), true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        document.getElementById('linkPa').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                console.log("link pa: " + key);
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing Link PA')"});
                });
                xhr.open('GET', 'http://localhost:3000/link-pa?key=' + encodeURI(key), true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        document.getElementById('linkCr').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                console.log("link pa: " + key);
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing Link CR ')"});
                });
                xhr.open('GET', 'http://localhost:3000/link-cr?key=' + encodeURI(key), true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        document.getElementById('linkEpicReview').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                console.log("link-epic-review: " + key);
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing Link CR ')"});
                });
                xhr.open('GET', 'http://localhost:3000/link-epic-review?key=' + encodeURI(key), true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        document.getElementById('linkAu').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                console.log("link pa: " + key);
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing Link CR ')"});
                });
                xhr.open('GET', 'http://localhost:3000/link-au?key=' + encodeURI(key), true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        document.getElementById('linkFSTC').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                console.log("link fstc: " + key);
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing Link FSTC ')"});
                });
                xhr.open('GET', 'http://localhost:3000/link-fstc?key=' + encodeURI(key), true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        document.getElementById('linkFQA').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                console.log("link pa: " + key);
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing Link FQA ')"});
                });
                xhr.open('GET', 'http://localhost:3000/link-fqa?key=' + encodeURI(key), true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        document.getElementById('copyFQA').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                console.log("copy fqa: " + key);
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing Copy FQA ')"});
                });
                xhr.open('GET', 'http://localhost:3000/copy-fqa?to=' + encodeURI(key) + "&from=" + document.getElementById("copyFQAFrom").value, true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        document.getElementById('paApprove').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                console.log("link pa: " + key);
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing PA Aprove ')"});
                });
                xhr.open('GET', 'http://localhost:3000/pa-approve?key=' + encodeURI(key), true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        document.getElementById('paReject').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                console.log("link pa: " + key);
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing PA Reject ')"});
                });
                xhr.open('GET', 'http://localhost:3000/pa-reject?key=' + encodeURI(key), true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        document.getElementById('rejectEpic').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                console.log("reject epic key: " + key);
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing Reject Epic ')"});
                });
                xhr.open('GET', 'http://localhost:3000/reject-epic?key=' + encodeURI(key) + "&reason=" + encodeURIComponent(document.getElementById("epicMoveReason").value), true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        document.getElementById('approveEntireEpic').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                console.log("reject epic key: " + key);
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing Reject Epic ')"});
                });
                xhr.open('GET', 'http://localhost:3000/approve-epic-fses?key=' + encodeURI(key) + "&reason=" + encodeURIComponent(document.getElementById("epicMoveReason").value), true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);


        document.getElementById('resetCache').addEventListener('click', function () {
            var xhr = new XMLHttpRequest;
            xhr.addEventListener("error", function () {
                chrome.tabs.executeScript(id, {code: "alert('Error processing Reject Epic ')"});
            });
            xhr.open('GET', 'http://localhost:3000/reset-cache', true);
            //xhr.onload = function (e) {alert(xhr.responseText)};
            xhr.send();
        }, false);

        document.getElementById('rejectEpicReview').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                console.log("reject epic review for key: " + key);
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing Reject Epic ')"});
                });
                xhr.open('GET', 'http://localhost:3000/epic-reject-qe-review?key=' + encodeURI(key), true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        document.getElementById('approveEpicReview').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                console.log("approve epic review for key: " + key);
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing Reject Epic ')"});
                });
                xhr.open('GET', 'http://localhost:3000/epic-approve-qe-review?key=' + encodeURI(key), true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        if (document.getElementById('assign'))
            document.getElementById('assign').addEventListener('click', function () {
                chrome.tabs.getSelected(null, function (tab) {
                    var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                    /*var textValue = document.getElementById('assignText').value;
                    if (textValue){
                        key=textValue;
                    }*/
                    console.log("assign key: " + key);
                    var xhr = new XMLHttpRequest;
                    xhr.addEventListener("error", function () {
                        chrome.tabs.executeScript(id, {code: "alert('Error processing Assign')"});
                    });
                    xhr.open('GET', 'http://localhost:3000/assign?key=' + encodeURI(key), true);
                    //xhr.onload = function (e) {alert(xhr.responseText)};
                    xhr.send();
                });
            }, false);

        if (document.getElementById('addComment'))
            document.getElementById('addComment').addEventListener('click', function () {
                chrome.tabs.getSelected(null, function (tab) {
                    var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                    /*var textValue = document.getElementById('assignText').value;
                    if (textValue){
                        key=textValue;
                    }*/
                    console.log("comment key: " + key);
                    var xhr = new XMLHttpRequest;
                    xhr.addEventListener("error", function () {
                        chrome.tabs.executeScript(id, {code: "alert('Error processing Assign')"});
                    });
                    let nessage = document.getElementById('addCommentMessage').value;
                    xhr.open('GET', 'http://localhost:3000/comment?key=' + encodeURI(key) + "&message="+encodeURIComponent(nessage), true);
                    //xhr.onload = function (e) {alert(xhr.responseText)};
                    xhr.send();
                });
            }, false);

        if (document.getElementById('assignDsaldiaz'))
            document.getElementById('assignDsaldiaz').addEventListener('click', function () {
                chrome.tabs.getSelected(null, function (tab) {
                    var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                    /*var textValue = document.getElementById('assignText').value;
                    if (textValue){
                        key=textValue;
                    }*/
                    console.log("assignDsaldiaz key: " + key);
                    var xhr = new XMLHttpRequest;
                    xhr.addEventListener("error", function () {
                        chrome.tabs.executeScript(id, {code: "alert('Error processing Assign')"});
                    });
                    xhr.open('GET', 'http://localhost:3000/assign?key=' + encodeURI(key)+ "&toUser=dsaldiaz", true);
                    //xhr.onload = function (e) {alert(xhr.responseText)};
                    xhr.send();
                });
            }, false);

        /* document.getElementById('assignFQA').addEventListener('click', function () {
             chrome.tabs.getSelected(null, function (tab) {
                 var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") !=-1 ? tab.url.lastIndexOf("?") : tab.url.length)
                 var textValue = document.getElementById('assignText').value;
                 if (textValue){
                     key=textValue;
                 }
                 console.log("assign key: " + key);
                 var xhr = new XMLHttpRequest;
                 xhr.addEventListener("error", function(){
                     chrome.tabs.executeScript(id, {code: "alert('Error processing Assign FQA ')"});
                 });
                 xhr.open('GET', 'http://localhost:3000/assign-fqa?key=' + encodeURI(key), true);
                 //xhr.onload = function (e) {alert(xhr.responseText)};
                 xhr.send();
             });
         }, false);*/

        if (document.getElementById('clickFS'))
            document.getElementById('clickFS').addEventListener('click', function () {
                chrome.tabs.getSelected(null, function (tab) {
                    var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                    var xhr = new XMLHttpRequest;
                    xhr.addEventListener("error", function () {
                        chrome.tabs.executeScript(id, {code: "alert('Error processing FS Approve')"});
                    });
                    xhr.open('GET', 'http://localhost:3000/fs?key=' + key, true);
                    //xhr.onload = function (e) {alert(xhr.responseText)};
                    xhr.send();
                });
            }, false);

        if (document.getElementById('fsApproveOOP'))
            document.getElementById('fsApproveOOP').addEventListener('click', function () {
                chrome.tabs.getSelected(null, function (tab) {
                    var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                    var xhr = new XMLHttpRequest;
                    xhr.addEventListener("error", function () {
                        chrome.tabs.executeScript(id, {code: "alert('Error processing FS Approve OOP ')"});
                    });
                    xhr.open('GET', 'http://localhost:3000/fs-approve-oop?key=' + key, true);
                    //xhr.onload = function (e) {alert(xhr.responseText)};
                    xhr.send();
                });
            }, false);

        if (document.getElementById('clickFSReject'))
            document.getElementById('clickFSReject').addEventListener('click', function () {
                chrome.tabs.getSelected(null, function (tab) {
                    var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                    var xhr = new XMLHttpRequest;
                    xhr.addEventListener("error", function () {
                        chrome.tabs.executeScript(id, {code: "alert('Error processing FS Reject ')"});
                    });
                    xhr.open('GET', 'http://localhost:3000/fs-reject?key=' + key, true);
                    //xhr.onload = function (e) {alert(xhr.responseText)};
                    xhr.send();
                });
            }, false);

        if (document.getElementById('clickFSTC'))
            document.getElementById('clickFSTC').addEventListener('click', function () {
                chrome.tabs.getSelected(null, function (tab) {
                    var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                    var xhr = new XMLHttpRequest;
                    xhr.addEventListener("error", function () {
                        chrome.tabs.executeScript(id, {code: "alert('Error processing FSTC Approve ')"});
                    });
                    xhr.open('GET', 'http://localhost:3000/fstc?key=' + key, true);
                    //xhr.onload = function (e) {alert(xhr.responseText)};
                    xhr.send();
                });
            }, false);

        if (document.getElementById('clickFSTC-reject'))
            document.getElementById('clickFSTC-reject').addEventListener('click', function () {
                chrome.tabs.getSelected(null, function (tab) {
                    var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                    var xhr = new XMLHttpRequest;
                    xhr.addEventListener("error", function () {
                        chrome.tabs.executeScript(id, {code: "alert('Error processing FSTC Reject')"});
                    });
                    xhr.open('GET', 'http://localhost:3000/fstc-reject?key=' + key, true);
                    //xhr.onload = function (e) {alert(xhr.responseText)};
                    xhr.send();
                });
            }, false);

        document.getElementById('clickCR').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing CR Approve ')"});
                });
                xhr.open('GET', 'http://localhost:3000/cr?key=' + key, true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        if (document.getElementById('crComments'))
            document.getElementById('crComments').addEventListener('click', function () {
                chrome.tabs.getSelected(null, function (tab) {
                    var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                    var xhr = new XMLHttpRequest;
                    xhr.addEventListener("error", function () {
                        chrome.tabs.executeScript(id, {code: "alert('Error processing CR Comments ')"});
                    });
                    xhr.open('GET', 'http://localhost:3000/cr-comments?key=' + key, true);
                    //xhr.onload = function (e) {alert(xhr.responseText)};
                    xhr.send();
                });
            }, false);

        if (document.getElementById('clickCRSkip')) {
            document.getElementById('clickCRSkip').addEventListener('click', function () {
                chrome.tabs.getSelected(null, function (tab) {
                    var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                    var xhr = new XMLHttpRequest;
                    xhr.addEventListener("error", function () {
                        chrome.tabs.executeScript(id, {code: "alert('Error processing CR Skip ')"});
                    });
                    xhr.open('GET', 'http://localhost:3000/crSkip?key=' + key, true);
                    //xhr.onload = function (e) {alert(xhr.responseText)};
                    xhr.send();
                });
            }, false);
        }
        document.getElementById('clickCRReject').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing CR Reject ')"});
                });
                xhr.open('GET', 'http://localhost:3000/cr-reject?key=' + key, true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        document.getElementById('clickAU').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing AU Approve ')"});
                });
                xhr.open('GET', 'http://localhost:3000/au?key=' + key, true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        document.getElementById('clickAUReject').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing AU Reject ')"});
                });
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
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)


            });
        }, false);

        document.getElementById('pollEnd').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                var xhr = new XMLHttpRequest;
                xhr.open('GET', 'http://localhost:3000/au?key=' + key, true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);


        document.getElementById('clickVER').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing VER ')"});
                });
                xhr.open('GET', 'http://localhost:3000/ver?key=' + key, true);
                //xhr.onload = function (e) {alert(xhr.responseText)};
                xhr.send();
            });
        }, false);

        var fsMapHandler = function (full) {
            return function () {
                chrome.tabs.getSelected(null, function (tab) {
                    var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                    var xhr = new XMLHttpRequest;
                    xhr.addEventListener("error", function () {
                        chrome.tabs.executeScript(id, {code: "alert('Error processing fs map ')"});
                    });
                    xhr.open('GET', 'http://localhost:3000/fs-mapping?key=' + key + (full ? "&full=true" : ""), true);
                    var id = tab.id;
                    xhr.addEventListener("load", function (e) {
                        console.log("response text: ")
                        console.log(xhr.responseText);
                        try {
                            var result = xhr.responseText
                                .replace(/`/gm, "'")
                                .replace(/\[([^\|]+)\|.+\]/gm, "$1")
                            ;
                            //.replace(/(\r\n|\n|\r)/gm, "<br/>");
                            var code = [
                                'publish("nzt1",`<pre>' + result + '</pre>`);',
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

        document.getElementById('clickMapOnly').addEventListener('click', function () {
            chrome.tabs.getSelected(null, function (tab) {
                var key = tab.url.substring(tab.url.lastIndexOf('/') + 1, tab.url.lastIndexOf("?") != -1 ? tab.url.lastIndexOf("?") : tab.url.length)
                var xhr = new XMLHttpRequest;
                xhr.addEventListener("error", function () {
                    chrome.tabs.executeScript(id, {code: "alert('Error processing fs map ')"});
                });
                xhr.open('GET', 'http://localhost:3000/fs-mapping?key=' + key + (false ? "&full=true" : ""), true);
                var id = tab.id;
                xhr.addEventListener("load", function (e) {
                    console.log("response text: ")
                    console.log(xhr.responseText);
                    try {
                        var result = xhr.responseText.replace(/`/gm, "'");//.replace(/(\r\n|\n|\r)/gm, "<br/>");
                        var code = [
                            'publish("nzt1",`<pre>' + result + '</pre>`);',
                            'displayOnly();',
                        ].join("\n");
                    } catch (ex) {
                        alert(ex);
                    }

                    /* Injt the code into the current tab */
                    chrome.tabs.executeScript(id, {code: code});

                }, false);

                xhr.send(null);

            });
        }, false);

        document.getElementById('fsMapFull').addEventListener('click', fsMapHandler(true), false);
    } catch (e) {
        alert("ERROR: " + e);
        console.log(e);
    }

}, false);