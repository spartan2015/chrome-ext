/**
 * Created by eXpert on 10/3/2019.
 */

function publish(id, result) {
    var div = document.createElement("div");
    div.id = id;
    div.style.border = "1px solid red";
    div.style.display='none';
    div.innerHTML = result;
    document.querySelector("div#description-val").parentElement.appendChild(div);
}
function diffy() {
    console.log("diffy()")
    try {
        var first = document.getElementById("nzt1").firstChild.textContent;

        var second = document.querySelector("div#description-val").textContent;
        if (document.querySelector("div#field-customfield_38413")) {
            second = document.querySelector("div#field-customfield_38413 > div.concise > div.flooded").textContent;
        }

        /* publish("nzt2", "<pre>" +
         JSON.stringify(
         Diff.diffLines(
         first,
         second)
         , null, "\t")
         + "</pre>");*/
        console.log("first");
        console.log(first)
        console.log('second')
        console.log(second)
        console.log("diffy() diff")
        var diff = Diff.diffChars(first, second),
            display = document.querySelector("div#description-val").parentElement,
            fragment = document.createDocumentFragment();

        console.log("diffy() display")
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

        display.appendChild(fragment);
    }catch(e){
        console.log(e);
        alert(e);
    }
}