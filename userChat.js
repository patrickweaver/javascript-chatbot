// userChat is the function that waits for the user to send a message.
function userChat() {

  // Find where the user is inputing text.
  compose_area = document.getElementById('composer');

  // Set the user as the sender of the next message.
  nextMessage.sender = "user";

  // Get the user's input in the compose_area and clear the compose_area.
  nextMessage.message = compose_area.value;
  compose_area.value = "";
  
  
  // We need to convert the user's message to upper case to check if it matches with any prompts using the .toUpperCase() function.
  
  uppercase = nextMessage.message.toUpperCase();

  // We can test if the user's message matches any of the prompts using if statements.
  
  
  if (uppercase == "HAPPY BIRTHDAY") { 
    sendSpecialChat = [true, "Thank you! How did you know it's my birthday?!"];
  }
  
  // sendSpecialChat is an array that will override the next thing the bot says with the second value if the first value is true. If the first value is false the bot will say the next thing in the script.

  /* ( ----- )                          ( ----- ) 
  ||||            PUT YOUR CODE HERE!          ||||
  ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ */
  console.log("✍ Code for custom prompts goes here");
  
  
  
  
  

  /*▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲  */


  // Send user's message.
  send(nextMessage.sender, nextMessage.message);

  // Count 1 more chat that the user has sent.
  userCount += 1;

  // Ask the bot for another chat.
  lookForChat()

}