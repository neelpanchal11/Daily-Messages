document.addEventListener("DOMContentLoaded", function() {
    // Define an array of messages
    const messages = [
        "1. Today is a great day!",
        "2. Believe in yourself.",
        "3. Keep pushing forward.",
        // Add more messages as needed
    ];

    // Get the current date
    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();
    const formattedDate = `${month} ${dayOfMonth}, ${year}`;
    
    // Select a message based on the date
    const messageIndex = dayOfMonth % messages.length;
    const selectedMessage = messages[messageIndex];
    
    // Display the selected message and date
    const messageContainer = document.getElementById("message-container");
    messageContainer.innerHTML = `
        <p>${selectedMessage}</p>
        <p>Today's date is ${formattedDate}</p>
    `;
});
