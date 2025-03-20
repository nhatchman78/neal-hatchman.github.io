const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/hatchman-family.jpeg") {
    myImage.setAttribute("src", "images/hatchman-family2.jpeg");
  } else {
    myImage.setAttribute("src", "images/hatchman-family.jpeg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome ${myName} to the Hatchman Family Page`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome ${storedName} to the Hatchman Family Page`;
  }

  myButton.addEventListener("click", () => {
    setUserName();
  });