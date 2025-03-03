// Function to show alert
function showAlert() {
    document.getElementById("customAlert").style.display = "block";
}

// Function to close alert
function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
}

// Function to apply animations
function cool() {
    document.getElementById("body").classList.toggle("cool"); // Background animation
    document.getElementById("b").classList.toggle("cool-button"); // Button animation
}
