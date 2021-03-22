// Create a reference to the image element
let myImage = document.querySelector('img');

// Run this function everytime the image is clicked
myImage.onclick = function (){ 
    // Retrive the value of the src attribute
    let src = myImage.getAttribute('src'); 

    // Check to see if the src is equal to the path of the original image
    if (src === 'Images/pexels-vecislavas-popa-1571459.jpg') {
         // Change the image to the second image
         myImage.setAttribute('src', 'Images/cross-671379.jpg'); 
    } 

    // If the current image is second image
    else { 
        // Set the image to the initial image
        myImage.setAttribute('src', 'Images/pexels-vecislavas-popa-1571459.jpg'); 
    } 
}



// Create a reference to the button element
let myButton = document.querySelector('button');

// Create a reference to the heading element
let myHeading = document.querySelector('h1');

function setUserName() {
    // Get name from the user and store it in myName
    let myName = prompt('Please enter your name.');

    // If myName has no value
    if (!myName){
        // Rerun the function
        setUserName();
    }

    // If myName has a value
    else {
        // Use the local storage API to store the data in the browser for later reuse
        // We use localStorage's setItem() function to create and store a data item called 'name',
        // setting its value to the myName variable which contains the user's entry for the name. 
        localStorage.setItem('name', myName);

        // Set the content of the heading 
        myHeading.textContent = 'Hello ' + myName;
    } 
}

// If you haven't previously entered a name, get the name from
// the user and set it in the browser local storage and Header element
if (!localStorage.getItem('name')) {
    setUserName();
} 

// If you have previously entered a name, get the name from the 
// browser storage and set it in the Header element
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Hello " + storedName;
}

myButton.onclick = function () {
    setUserName();
}
