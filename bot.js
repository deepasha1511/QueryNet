const userMessage = [
  
    ["I want the account details of JECRC for fee payment."],
    ["Hi", "Hello", "Hey"],
    [ "Can I pay my fee online"],
    ["I want information regarding the events and clubs"],
    ["What is the exam pattern of In Sem"],
    ["What are the passing marks criteria of In Sem"],
    ["How many In Sems are conducted in one semester"],
    ["What is the exam pattern of End Sem"],
    ["Who can be eligible for 3rd In Sem"],
    ["Why is my ERP not working"],
  
    [
      "Where can I see my attendance "
    ],
    ["what is the name of college website"],
    ["Where can I see my semester result "],
    ["what is the minimum percentage criteria  for a scholarship "],
   
  ];
  const botReply = [
    ["Here are the account details of JECRC University: Account name-JECRC University. Account number-6143000100045293  IFSC code- PUNB0614300 Bank- Punjab National Bank, Sitapura, Jaipur"],
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["Yes, you can pay your semester fee through NEFT, online banking, or via UPI."],
    ["You can go to the communities’ page on the same for all the information related to the events and communities."],
    ["In Sem paper consists of three sections: 1. Section A which contains two 2-mark questions. 2. Section B which contains two 7-mark questions.3. Section C which contains two 11-mark questions."],
    [
      "You need a minimum of 13 marks to pass you’re In Sem exam."
    ],
    ["A total of 3 In Sems are conducted in which two of the In Sem are compulsory and 3rd In Sem is also known as markup examination. "],
  
    [
      "End Sem paper consists of three sections: 1. Section A which contains five 2-mark questions. 2. Section B which contains five 7-mark questions. 3. Section C which contains five 11-mark questions. "
    ],
    ["If you missed your 1st or 2nd In Sem due to some serious medical emergency you can appear for the 3rd In Sem exams by submitting your medical to your respective mentor."],
    ["There can be some issues related internet …try logging out and logging in again on the website."],
    ["You can see your attendance on the college website."],
    ["https://jecrc.mastersofterp.in/iitmsv4eGq0RuNHb0G5WbhLmTKLmTO7YBcJ4RHuXxCNPvuIw="],
    ["You can see your results and marks on the official college website. "],
    ["You need to maintain a minimum CGPA of 8 and a minimum percentage criteria of 75%."],
  ];
  
  const alternative = [
    "Sorry. I didn't get that",
    "Sorry, I cannot help you with that",
    "Try searching for somthing else",
  ];
  
  const synth = window.speechSynthesis;
  
  function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  }
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      ["Here are the account details of JECRC University: Account name-JECRC University. Account number-6143000100045293  IFSC code- PUNB0614300 Bank- Punjab National Bank, Sitapura, Jaipur"],
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["Yes, you can pay your semester fee through NEFT, online banking, or via UPI."],
    ["You can go to the communities’ page on the same for all the information related to the events and communities."],
    ["In Sem paper consists of three sections: 1. Section A which contains two 2-mark questions. 2. Section B which contains two 7-mark questions.3. Section C which contains two 11-mark questions."],
    [
      "You need a minimum of 13 marks to pass you’re In Sem exam."
    ],
    ["A total of 3 In Sems are conducted in which two of the In Sem are compulsory and 3rd In Sem is also known as markup examination. "],
  
    [
      "End Sem paper consists of three sections: 1. Section A which contains five 2-mark questions. 2. Section B which contains five 7-mark questions. 3. Section C which contains five 11-mark questions. "
    ],
    ["If you missed your 1st or 2nd In Sem due to some serious medical emergency you can appear for the 3rd In Sem exams by submitting your medical to your respective mentor."],
    ["There can be some issues related internet …try logging out and logging in again on the website."],
    ["You can see your attendance on the college website."],
    ["https://jecrc.mastersofterp.in/iitmsv4eGq0RuNHb0G5WbhLmTKLmTO7YBcJ4RHuXxCNPvuIw="],
    ["You can see your results and marks on the official college website. "],
    ["You need to maintain a minimum CGPA of 8 and a minimum percentage criteria of 75%."],
    ];
    let expectedMessage = [
      ["I want the account details of JECRC for fee payment."],
    ["Hi", "Hello", "Hey"],
    [ "Can I pay my fee online"],
    ["I want information regarding the events and clubs"],
    ["What is the exam pattern of In Sem"],
    ["What are the passing marks criteria of In Sem"],
    ["How many In Sems are conducted in one semester"],
    ["What is the exam pattern of End Sem"],
    ["Who can be eligible for 3rd In Sem"],
    ["Why is my ERP not working"],
  
    [
      "Where can I see my attendance "
    ],
    ["what is the name of college website"],
    ["Where can I see my semester result "],
    ["what is the minimum percentage criteria  for a scholarship "],
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }