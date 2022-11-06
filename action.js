function wordCount(wordArr, suffix) {
  return wordArr.reduce((count, word) => {
    if (word.replaceAll(/[\.\?\!]/g, "").endsWith(suffix)) {
      count = count + 1;
    }
    return count;
  }, 0);
}

function clickEvent(button, selector, rhyme, suffix) {
  const rhymeArr = rhyme.split(" ");
  const count = wordCount(rhymeArr, suffix);
  const displayText = `<p>${rhyme}</p>
    <p>Number of words ending with ${suffix}: ${count}</p>
    <p>Total number of words: ${rhymeArr.length}</p>`;

  button.addEventListener("click", () => {
    document.querySelector(selector).innerHTML = displayText;
  });
}

const issueButton = document.querySelector("#issueButton");
const issueRhyme = `If you have an issue you might need a tissue.`;
clickEvent(issueButton, "#issueText", issueRhyme, "issue");

const longButton = document.querySelector("#longButton");
const ongRhyme = `If you think long you might think wrong.`;
clickEvent(longButton, "#longText", ongRhyme, "ong");

const schoolButton = document.querySelector("#schoolButton");
const oolRhyme = `School is cool.`;
clickEvent(schoolButton, "#schoolText", oolRhyme, "ool");

const hateButton = document.querySelector("#hateButton");
const ateRhyme = `Don't Hate Appreciate`;
clickEvent(hateButton, "#hateText", ateRhyme, "ate");
