var testAlert = function () {
    "use strict"
    alert("html and JS are connected.");
};

var myArray = [];

var addToArray = function () {
    "use strict"
    var valueToAdd = document.getElementById("text-field1").value;
    myArray.push(valueToAdd);
    document.getElementById("text-field1").value = "";
};

var alertOneByOne = function () {
    "use strict"
    for (var i in myArray) {
        alert(myArray[i]);
    }
}
var outputToDiv = function () {
    "use strict"
    var valueToAdd = document.getElementById("text-field1").value;
    myArray.push(valueToAdd);

    var newHtml = "";
    for (var i in myArray) {
        "use strict"
        newHtml += myArray[i] + '<br>';
    }
    document.getElementById("div1").innerHTML = newHtml;
    document.getElementById("text-field1").value = "";
};


var showByIndexInAlert = function () {
    "use strict"
    var index = document.getElementById("number-selector1").value;
    alert(myArray[index]);
}

var showByIndexInDiv = function () {
    "use strict"
    var index = document.getElementById("number-selector1").value;
    document.getElementById("div2").innerHTML = myArray[index];
}

var outputToDiv2 = function () {
    "use strict"
    var valueToAdd = document.getElementById("text-field1").value;
    myArray.push(valueToAdd);

    var newHtml = "";
    for (var i in myArray) {
        "use strict"
        newHtml += myArray[i] + '<br>';
    }
    document.getElementById("div2").innerHTML = newHtml;
};


var outputOddsToDiv2= function () {
    "use strict"
    var valueToAdd = document.getElementById("text-field1").value;
    myArray.push(valueToAdd);

    var newHtml = "";
    for (var i in myArray) {
        if (i % 2 === 0) {
            newHtml += myArray[i] + '<br>';
        }
    }
    document.getElementById("div2").innerHTML = newHtml;
};

var outputToTextField2 = function () {
    "use strict"
    var valueToAdd = document.getElementById("text-field2").value;
    myArray.push(valueToAdd);

    var newHtml = "";
    for (var i in myArray) {

        newHtml += myArray[i] + " ";
    }
    document.getElementById("text-field2").value = newHtml;
};

var clearTextField2 = function () {
    "use strict"
    document.getElementById("text-field2").value = "";

}

// 0)Create an input field, an array and 2 buttons. One button should push the value of the field into the array. Click the second button this should alert each element in the array one by one.

// 1)Create an input field, a div, an array and a button. when the button is clicked put the value of the input field into the array. Output each element in the array on it's own line inside the div.

// 2)Create 2 input fields, an array and 2 buttons. One button should push the value of the first input field into the array.

// Enter a number in the second input field.

// When you click the second button it should alert the element from the array using the index from the second input field.

/*

4)Create 2 input fields, an array, 2 buttons and a div.
One button should push the value of the first input field into the array.

Enter a number in the second input field.

When you click the second button it should write the chosen element from the array using the index from the second input field to a div.

5)Create an input field, an array and 2 button. On click the first button should push the the value of the input field into the array.
On click the second button should loop through the array and put every element into the div.

6)Create an input field, an array and 2 button. On click the first button should push the the value of the input field into the array.
On click the second button should loop through the array and put every ODD element into the div.

7) Create an input field, an array and 1 button.
On click the button should push the value of the input filed into the array AND loop through the array and put every element into the div.

8)Create 2 inputs, an array and 2 buttons.
On click the first button should add the value of the first field into the array.
On click the second button should remove the element at the index in the second input from the array.

9) Create 2 input fields, an array and 2 buttons.
The first input will take a string the second input will take a number (or be empty)
The first button will push the value of the first input into the array And output all elements in the array to the page.
The second button will retrieve the item at the index of the second input and put it into the first input box.

*/