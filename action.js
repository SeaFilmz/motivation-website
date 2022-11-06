const issueButton = document.querySelector("#issueButton");
const longButton = document.querySelector("#longButton");
const schoolButton = document.querySelector("#schoolButton");
const hateButton = document.querySelector("#hateButton");

function wordCount(wordArr, suffix) {
  return wordArr.reduce((count, word) => {
    if (word.replaceAll(/[\.\?\!]/g, "").endsWith(suffix)) {
      count = count + 1;
    }
    return count;
  }, 0);
}

function clickEvent(
  button,
  displayText,
  rhyme,
  suffix,
  rhymeWordCount,
  rhymeArr
) {
  button.addEventListener("click", () => {
    document.querySelector(
      displayText
    ).innerHTML = `<p>${rhyme}</p><p>Number of words ending with ${suffix}: ${rhymeWordCount}</p><p>Total number of words: ${rhymeArr.length}</p>`;
  });
}

const issueRhyme = `If you have an issue you might need a tissue.`;
const issueRhymeArr = issueRhyme.split(" ");
const issueWordCount = wordCount(issueRhymeArr, "issue");

clickEvent(
  issueButton,
  "#issueText",
  issueRhyme,
  "issue",
  issueWordCount,
  issueRhymeArr
);

const ongRhyme = `If you think long you might think wrong.`;
const ongRhymeArr = ongRhyme.split(" ");
const ongWordCount = wordCount(ongRhymeArr, "ong");

clickEvent(longButton, "#longText", ongRhyme, "ong", ongWordCount, ongRhymeArr);

const oolRhyme = `School is cool.`;
const oolRhymeArr = oolRhyme.split(" ");
const oolWordCount = wordCount(oolRhymeArr, "ool");

clickEvent(
  schoolButton,
  "#schoolText",
  oolRhyme,
  "ool",
  oolWordCount,
  oolRhymeArr
);

const ateRhyme = `Don't Hate Appreciate`;
const ateRhymeArr = ateRhyme.split(" ");
const ateWordCount = wordCount(ateRhymeArr, "ate");

clickEvent(hateButton, "#hateText", ateRhyme, "ate", ateWordCount, ateRhymeArr);
