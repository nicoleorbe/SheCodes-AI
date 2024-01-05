let apiKey = "61o493tb34bd0f7a45117a0fe312a138";
let context =
  "Be polite and provide a brief but complete answer. You are a mortgage document assistant helping first time homebuyers.";
let buttonElement = document.querySelector("#ask-nicole");
let hello = document.getElementById("hello");

// header typewriter start
let typewriter = new Typewriter(hello, {
  loop: false,
  delay: 75
});

typewriter.pauseFor(200).typeString("Hi, I'm Morti!").pauseFor(300).start();
// header typewriter end

// sub-header typewriter start
let typewriterTwo = new Typewriter(askMe, {
  loop: false,
  delay: 50
});

typewriterTwo
  .pauseFor(1500)
  .typeString("I'm you're friendly mortgage document AI assistant. ")
  .typeString("Go ahead, ask me anything!")
  .start();
// sub-header typewriter end

function showAnswer(response) {
  document.getElementById(
    "answer"
  ).innerHTML = `<p>Answer: ${response.data.answer}</p>`;
}

function handleClick() {
  document.getElementById("answer").innerHTML = "Please wait, I'm thinking...";
  let prompt = document.getElementById("prompt").value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt="${prompt}"&context="${context}"&key=${apiKey}`;
  axios.get(apiUrl).then(showAnswer);
}

buttonElement.addEventListener("click", handleClick);
