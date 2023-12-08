/****************** YOUR NAME: Jyun Yi Lin

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

const changeModel = document.getElementById("model-button");
const changeDuration = document.getElementById("duration-button");
const modelText = document.getElementById("model-text");
const durationText = document.getElementById("duration-text");
const recalculate = document.getElementById("calculated-cost");

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE


/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

//const currentModel = {
//    "Model XYZ": 100,
//    "Model CPRG": 213
//  };


let currentModel = "Model XYZ";

changeModel.addEventListener("click", () => {

  if (currentModel === "Model XYZ") {
    currentModel = "Model CPRG";
    
  } else {
    currentModel = "Model XYZ";

  }

  modelText.textContent = currentModel;

});

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

changeDuration.addEventListener("click", () => {
    const enteredDuration = prompt("Enter the duration in days:");
    const parsedDuration = parseInt(enteredDuration);
    if (!isNaN(parsedDuration)) {
      durationText.textContent = parsedDuration;
      const cost = parsedDuration * (currentModel === "Model XYZ" ? 100 : 213);
      recalculate.textContent = cost.toFixed(2);
    } else {
      alert("Invalid duration entered. Please enter a valid number.");
    }
  });

