let enterName = prompt("Enter your name");
loadDIV 9;



function loadDIV () {
document.getElementById("ScriptThisDIV").innerHTML = "<H1>Hello" + enterName +"<H1></H1>"
}