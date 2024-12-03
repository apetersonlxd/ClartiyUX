window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script3 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script4 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script5 = function()
{
  let player = GetPlayer();

let userName = player.GetVar("UserName");

let entryLength = userName.length;

if (userName.length == 0)
{ 
player.SetVar("ErrorNone", true);
player.SetVar("ErrorMax", false);
} else if (entryLength > 30) {
player.SetVar("UserName", "");
player.SetVar("ErrorMax", true);
player.SetVar("ErrorNone", false);
}
}

window.Script6 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script7 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script8 = function()
{
  let player = GetPlayer();

let userName = player.GetVar("UserName");

let entryLength = userName.length;

if (userName.length == 0)
{ 
player.SetVar("ErrorNone", true);
player.SetVar("ErrorMax", false);
} else if (entryLength > 30) {
player.SetVar("UserName", "");
player.SetVar("ErrorMax", true);
player.SetVar("ErrorNone", false);
}
}

window.Script9 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script10 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script11 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script12 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script13 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script14 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script15 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script16 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script17 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script18 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script19 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script20 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script21 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script22 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script23 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script24 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script25 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script26 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script27 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script28 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script29 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script30 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script31 = function()
{
  /* CHANGE THESE VARIABLES */
const container = document.getElementById("bottom-bar"); // Container for the buttons
const bgColour = "#D9D9D9"; // BACKGROUND COLOUR.
const barColour = "#046236"; // PROGRESS COLOUR.
const compColour = "#19BB32"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).
/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist


    // Create a container for the Progress Bar
    let progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progressBarContainer";
    progressBarContainer.style.display = "flex";
    progressBarContainer.style.alignItems = "center";
    progressBarContainer.style.justifyContent = "flex-end";
    progressBarContainer.style.flexDirection = "row-reverse";
    progressBarContainer.style.height = "15px";
    progressBarContainer.style.transform = "translate(20px,3px)";
    
    // Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.borderRadius = borderRad;

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.borderRadius = borderRad;
    pBar.style.position = "absolute";

    // Set the max width for the progress bar (e.g., 300px)
    progressBarContainer.style.maxWidth = "20%";

    // Insert the background and progress elements into the container
    progressBarContainer.appendChild(bgBar);
    progressBarContainer.appendChild(pBar);

    // Insert the progressBarContainer into the "bottom-bar" element
    container.appendChild(progressBarContainer);

    // Check and set the display property for the "bottom-bar" element
    const BottomBarDisplayStyle = window.getComputedStyle(container).getPropertyValue("display");
    if (BottomBarDisplayStyle === "none") {
        container.style.display = "block";
    }
} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

};
