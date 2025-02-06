Intermediate Computing Science.
Review Assignment.

Your goal in this review assignment is to complete a dice simulator app. You will complete the HTML, CSS and JS tasks below.

Make extensive use of https://www.w3schools.com/ for refreshing yourself on material covered in the previous course.

Part 1) HTML
  Build the content of your site. In other words, add the appropriate paragraph, select, button, div, img elements that your site will need. Use the dice-sim-SS.png image to guide you. Some helpful tips:
  
  The dice are white and transparent, so they won't appear until you change the background color in the next section.
  
  Pressing !, then tab, will auto populate your basic HTML structure. This will be missing links to your CSS and JS files, which you will have to add manually. 
  
  To add a link tag to your CSS file, in the <head> section, type link and then tab. This is add a link tag and you must set the href to match the name of your CSS file, which is likely style.css
  
  To add your JS, add the tag:  <script defer src=""> </script>
  Then, add the name of your JS file for the source. It is likely script.js
  
Part 2) CSS
  Using the screenshot as your guide, create CSS rules (https://www.w3schools.com/css/css_syntax.asp) to style your page.
  
  Style Notes (anything missing, use your best judgement from the SS):
  - Page background is purple
  - Content background is #6260d2
  - Button background is purple
  
  - Content width is 500px.
  - Content is centre-fixed width (ie. margin: auto on block elements with a defined width).
  - Content font is Verdana, Geneva, Tahoma, sans-serif
  
  - Dice are 150px wide
  - Dice have the declaration: transform: rotate(0);
  - This declaration will allow javascript to rotate the images in the next section.
  
  - The dice and history display areas have 
    - a purple border
    - 400px width
  
  - Buttons have a hover effect (see the GIF on classroom)
    - The text and background flip colours.
    - The transition-duration declaration is on the button selector to smooth out the hover effect.
  
  - The history display area displays dice combos withing separate <span> elements. This will be done by JS in the next section, but you will want to add a CSS rule for <span> elements now.
  
  span {
    border: 1px solid black;
    padding: 3px;
    margin: 3px;
    display: inline-block;  // span elements won't go offscreen
  }

Part 3) JavaScript
a) Title your app with a comment (e.g. // DICE SIMULATOR)
b) Create your HTML element variables. You will need one variable for each HTML element you will need JavaScript to interact with. You should have a minimum of 6.
  e.g. var menu = document.getElementById('dice-menu');

c) Create click event listeners for the ROLL and RESET buttons.

d) Create your roll function:
  - Use an if-else if or switch statement to check which dropdown option is selected.
  - The .value command, when used on the select element, will return the value of the option currently displayed in the select box. Use this as part of your if/switch conditional
  - Roll once: 
    - create 2 random numbers. 
    - Use these to set the correct dice images. 
    - Add a span element that includes these 2 numbers in the dice history section, through JS.

  - Roll 5 times:
    - Repeat the roll once, 5 times, using a loop.

  - Roll X times:
    - Prompt the user for the number of dice rolls. Then use a loop to repeat the roll once commands that many times.

  - Repeat until snake eyes:
    - Loop through the 'roll once' commands until the two numbers are both 1's

e) Animate your dice. 
  - Create 2 global variables to represent the angle of each dice. Set these to zero.
  - Create a function for each dice. Both will be very similar to eachother. In each function:
    - Create a random number from 1 to 6.
    - Set the image of the dice to match the random number.
    - Increase the angle global variable by some amount. This will be how much the dice rotates every frame.
    - Set the transform property of the image to the value of the angle. E.g. `rotate(${angle}deg)`.

  - Create a setInterval for each dice. Save the interval to a timer variable. 
    - https://www.w3schools.com/jsref/met_win_setinterval.asp
    - E.g. myInterval = setInterval(function, milliseconds);

  - Add a clearInterval command to clear the timer variable in the roll function. Otherwise they will continue to rotate and change values when you try to roll the dice.
    - https://www.w3schools.com/jsref/met_win_clearinterval.asp
    


f) Create your reset function. This should reset the dice to their animation phase, remove the dice history, and reset any global variables.

g) Add 3 of your own creative additions to this simulator. Some ideas:
  - User selects between 1 and 4 dice.
  - Change up the animation of the dice
  - User selection how many sides on the dice
  - Change from number dice to letter dice
  - Create a mini-game that uses dice roll outcomes


