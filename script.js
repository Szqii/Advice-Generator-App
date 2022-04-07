const titleEl = document.querySelector("#title");
const descEl = document.querySelector("#description");

getRandomAdvice();

function getRandomAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => updateText(data.slip.id, data.slip.advice));
}

function updateText(id, advice) {
  titleEl.innerHTML = `ADVICE #${id}`;
  descEl.innerHTML = advice;
}

function shareViaTwitter() {
  let text = `Check out this awesome advice generator app 👉🏼 https://some-advice.netlify.app/`;
  let credit = `Made with ❤️ by @devsezgi`;
  const url = `https://twitter.com/intent/tweet?text=${descEl.innerHTML}%0a%0a%0a${text}%0a${credit}`;
  window.open(url, "_blank");
}
