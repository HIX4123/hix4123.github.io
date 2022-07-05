let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/상대성 이론.png") {
        myImage.setAttribute("src", "images/막대와 헛간 역설.png");
    } else {
        myImage.setAttribute("src", "images/상대성 이론.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = "상대성 이론 " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "상대성 이론 " + storedName;
}

myButton.onclick = function () {
    setUserName();
};
