var container = document.getElementById("container");

for (var i = 0; 1 < 16; i++){ 
    var div = document.createElement("div");
    div.setAttribute("class","new");
    div.innerHTML = "div" + i;
    container.appendChild(div);

}

// figure out why it wont create divs; line 7 is throwing an error