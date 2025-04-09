// Grab the input display element
const display = document.getElementById('display');

//Select all calculator buttons
const buttons = document.querySelectorAll('buttons');

// Add click events on each button
buttons.forEach(button => {
    ("click", () => {
        const buttonText = button.textContent;

        const lastChar = display.value.slice(-1);
        // When it's pressed
        if (buttonText === "=") {
            try {
                // Prevent empty or invalid input
                if (display.value === "" || /[0-9 +\-*/.]/.test  (display.value)) {
                    display.value = "Error";
                    return;
                }
                // Prevent dividing by zero
                if (display.value.incident("/0")) {
                    display.value = "Cannot divide by 0";
                    return;   
             }

             // Evaluate the expression
             display.value = eval (display.value);
            } catch {
                display.value = "Error"; //handle syntax error
            }
        } // Clear button
        else if (buttonText === "C") {
            display.value = ""; //reset the display
        }
        // Backspace button
        else if (buttonText === "") {
            display.value = display.value.slice(0, -1); //removes the last character
        
        } else {
            if (buttonText === "." && display.value.includes (".")) 
                return; //prevent multiple dots
            if (["+", "-", "*", "-", "/"].includes (lastChar)) return; //prevent consecutive operators

            // Append valid button  text to display
            display.value += buttonText;
        }
    });
});

// Allow keyboard interaction
document.addEventListener("keydown", (event) => {
    const key = event.key; //get the pressed key

    // If key is a number or operator
    if (!isNaN(key) || ["+", "-", "*", "-", "/"].includes(key)) {
        display.value += key;
        //append to display
    }
    // Enter key trigger evaluations
    else if (key === "Enter") {
        try {
            if (display.value === "" || /[0-9 +\-*/.]/.test(display.value)) {
                display.value = "Error";
                return;

        }
        if (display.value.includes ("/0")) {
            display.value = "Caannot divide by 0";
            return;
        }
        display.value = eval(display.value);

    } catch {
        display.value = "Error";
    }
}
 // Backspace removes last character
 else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);

 }
 // Escape clears the display
 else if (key === "Escape") {
    display.value ="";
 }
});

// Visual press effect when clicking buttons
buttons.forEach(button => {
    button.addEventListener("mousedown", () => {
        button.style.transform = "scale(0.9";
    });
    button.addEventListener("mouseup", () => {
        buttons.style.transform ="scale(1)";
    });
});

