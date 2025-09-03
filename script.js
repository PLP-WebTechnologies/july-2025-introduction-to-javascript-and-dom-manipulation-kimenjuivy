// JavaScript Fundamentals Assignment
// Student: [Your Name]
// All parts covered: variables, functions, loops, DOM manipulation

// PART 1: JavaScript Basics - Variables and Conditionals
function checkUser() {
    // Get user input
    let userName = document.getElementById('name').value;
    let userAge = parseInt(document.getElementById('age').value);
    let output = document.getElementById('result');
    
    // Basic validation with conditionals
    if (!userName || !userAge) {
        output.innerHTML = '<p style="color: red;">Hey! Fill out both fields 😊</p>';
        return;
    }
    
    // Determine life stage using if/else
    let stage, message, emoji;
    
    if (userAge < 13) {
        stage = 'kid';
        message = 'Keep being awesome!';
        emoji = '🧒';
    } else if (userAge <= 19) {
        stage = 'teenager';
        message = 'These are the best years!';
        emoji = '🎓';
    } else if (userAge <= 65) {
        stage = 'adult';
        message = 'Living the dream!';
        emoji = '💪';
    } else {
        stage = 'wise one';
        message = 'Experience is everything!';
        emoji = '🧙‍♂️';
    }
    
    // Show results
    output.innerHTML = `
        <h3>Hey ${userName}! ${emoji}</h3>
        <p>You're ${userAge} years old - that makes you a ${stage}!</p>
        <p>${message}</p>
    `;
    
    // Console log for debugging
    console.log(`User: ${userName}, Age: ${userAge}, Stage: ${stage}`);
}

// PART 2: Functions - Custom reusable functions

// Function 1: Math calculator
function calculate(a, b) {
    // Simple math operations
    return {
        sum: a + b,
        difference: a - b,
        product: a * b,
        bigger: a > b ? a : b
    };
}

// Function 2: Word transformer
function wordMagic(word) {
    // String manipulations
    return {
        upper: word.toUpperCase(),
        reverse: word.split('').reverse().join(''),
        length: word.length,
        firstLetter: word.charAt(0).toUpperCase()
    };
}

// Button functions that use our custom functions
function doMath() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let output = document.getElementById('mathResult');
    
    if (isNaN(num1) || isNaN(num2)) {
        output.innerHTML = '<p style="color: red;">Need two numbers!</p>';
        return;
    }
    
    // Use our custom function
    let results = calculate(num1, num2);
    
    output.innerHTML = `
        <p><strong>Results:</strong></p>
        <p>Sum: ${results.sum}</p>
        <p>Difference: ${results.difference}</p>
        <p>Product: ${results.product}</p>
        <p>Bigger number: ${results.bigger}</p>
    `;
    
    console.log('Math calculated:', results);
}

function transformWord() {
    let word = document.getElementById('word').value;
    let output = document.getElementById('wordResult');
    
    if (!word) {
        output.innerHTML = '<p style="color: red;">Type something first!</p>';
        return;
    }
    
    // Use our custom function
    let magic = wordMagic(word);
    
    output.innerHTML = `
        <p><strong>Word Magic Results:</strong></p>
        <p>Uppercase: ${magic.upper}</p>
        <p>Reversed: ${magic.reverse}</p>
        <p>Length: ${magic.length} characters</p>
        <p>Starts with: ${magic.firstLetter}</p>
    `;
    
    console.log('Word transformed:', magic);
}

// PART 3: Loops - For, While, and array loops

function showNumbers() {
    let output = document.getElementById('numberResult');
    let numbers = [];
    
    // For loop - generate some fun numbers
    for (let i = 1; i <= 5; i++) {
        numbers.push(i * 2); // Even numbers
    }
    
    output.innerHTML = `
        <h4>For Loop Results:</h4>
        <p>Even numbers: ${numbers.join(', ')}</p>
    `;
    
    console.log('Numbers generated with for loop:', numbers);
}

function countdown() {
    let output = document.getElementById('numberResult');
    let count = 5;
    let countdownArray = [];
    
    // While loop - countdown
    while (count > 0) {
        countdownArray.push(count);
        count--;
    }
    
    // ForEach loop - process the array
    let display = [];
    countdownArray.forEach(function(num) {
        display.push(num + '...');
    });
    
    output.innerHTML = `
        <h4>Countdown (While + ForEach loops):</h4>
        <p>${display.join(' ')} Blast off! 🚀</p>
    `;
    
    console.log('Countdown created:', countdownArray);
}

// PART 4: DOM Manipulation - Making the page interactive

let colorIndex = 0;
function changeColor() {
    let body = document.body;
    let themes = ['', 'red-theme', 'green-theme'];
    
    // Remove current theme
    body.className = '';
    
    // Cycle through themes
    colorIndex = (colorIndex + 1) % themes.length;
    if (themes[colorIndex]) {
        body.classList.add(themes[colorIndex]);
    }
    
    console.log('Theme changed to:', themes[colorIndex] || 'default');
}

let itemCount = 3;
function addItem() {
    let list = document.getElementById('itemList');
    
    // Create new list item
    let newItem = document.createElement('li');
    newItem.textContent = `Item number ${itemCount} - Just added!`;
    
    // Add it to the list
    list.appendChild(newItem);
    itemCount++;
    
    console.log('New item added, total items:', itemCount - 1);
}

function hideShow() {
    let box = document.getElementById('magicBox');
    
    // Toggle visibility with CSS class
    if (box.classList.contains('hidden')) {
        box.classList.remove('hidden');
        console.log('Magic box shown');
    } else {
        box.classList.add('hidden');
        console.log('Magic box hidden');
    }
}

// Initialize - runs when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded! Assignment ready to test.');
    console.log('All 4 parts implemented: Basics, Functions, Loops, DOM');
});