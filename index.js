let inputbtn = document.getElementById("input-btn");
inputbtn.addEventListener("click", function () {
    console.log("Button Clicked!")
})
let inputEl = document.getElementById("input-el").innerHTML;
let myLeads = [];
inputbtn.addEventListener("click", function () {
    myLinks.push("http://….")
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
}

// Grab the unordered list and store it in a const variable called ulEl. Display it on the console as well. 
const ulEl = document.getElementById("ul-el").textContent;
console.log("ulEL");

for (let i = 0; i < myLeads.length; i++) {
    ulEl.textContent += "<li>" + myLeads[i] + "</li>"
}
