// Function to handle the first click and rotate the mystery box
function openBox() {
    const box = document.getElementById("mysteryBox");
    box.style.transform = "rotateX(360deg) rotateY(360deg)"; // Make the box rotate

    // Show the message after the first click
    setTimeout(() => {
        document.getElementById("message").style.display = "block";
        document.getElementById("finalClick").style.display = "inline-block";
    }, 1000); // Delay the message to appear after the box rotation completes
}

// Function to show the "Click for Gift Box" button after the message
function showGift() {
    document.getElementById("message").innerHTML = "<p>Padle bsdk click pe gift chahiye</p>";
    document.getElementById("finalClick").style.display = "none";
    document.getElementById("mysteryBox").style.display = "none"; // Hide the mystery box
}
