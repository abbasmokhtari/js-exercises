/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    2. the first div element node
    --> should log the ".site-header" node
    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node
    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3
*/
let allPs = document.querySelectorAll("p");
console.log(allPs);

console.log(document.querySelector(".site-header"));

console.log(document.querySelector("#jumbotron-text"));

let firstSelector = document.querySelectorAll(".primary-content p")

console.log(firstSelector);
/*
Task 2
======
When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let myButton = document.querySelector("#alertBtn");
    myButton.addEventListener("click", alertSomething);

    function alertSomething() {
        alert("Thanks for visiting Bikes for Refugees!");
    }

/*
Task 3
=======
Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/


let myElement = document.querySelector("#bgrChangeBtn");

myElement.addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector(".jumbotron").style.backgroundColor = "blue";
})
    

/*
Task 4
======
When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let myAddText = document.querySelector("#addTextBtn");
let jumbo = document.querySelector(".jumbotron");

myAddText.addEventListener("click", function(){
    let myPragraph = document.createElement("p");
    myPragraph.innerText = "Read more below.";
    jumbo.appendChild(myPragraph);


})

/*
Task 5
======
When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/