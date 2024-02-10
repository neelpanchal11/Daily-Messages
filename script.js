document.addEventListener("DOMContentLoaded", function() {
    // Define an array of messages
    const messages = [
        "Today is a great day!",
        "Believe in yourself.",
        "Keep pushing forward.",
        // Add more messages as needed
    ];

    // Get the current date
    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    
    // Select a message based on the date
    const messageIndex = dayOfMonth % messages.length;
    const selectedMessage = messages[messageIndex];
    
    // Display the selected message
    const messageContainer = document.getElementById("message-container");
    messageContainer.textContent = selectedMessage;
});
