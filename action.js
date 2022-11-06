const issueButton = document.querySelector("#issueButton");
const longButton = document.querySelector("#longButton");
const schoolButton = document.querySelector("#schoolButton");
const hateButton = document.querySelector("#hateButton");

function wordCount(motivationTextArr, ryhmeWord) {
  let count = 0;
  for (let i = 0; i < motivationTextArr.length; i++) {
    if (motivationTextArr[i].replaceAll(/[\.\?\!]/g, "").endsWith(ryhmeWord)) {
      count = count + 1;
    }
  }
  return count;
}

const issueRhyme = `If you have an issue you might need a tissue.`;

const issueRhymeArr = issueRhyme.split(" ");

const issueWordCount = wordCount(issueRhymeArr, "issue");

issueButton.addEventListener("click", function issueHelp() {
  document.querySelector(
    "#issueText"
  ).innerHTML = `<p>${issueRhyme}</p><p>Number of words ending with issue: ${issueWordCount}</p><p>Total number of words: ${issueRhymeArr.length}</p>`;
});

const ongRhyme = `If you think long you might think wrong.`;

const ongRhymeArr = ongRhyme.split(" ");

const ongWordCount = wordCount(ongRhymeArr, "ong");

longButton.addEventListener("click", function longHelp() {
  document.querySelector(
    "#longText"
  ).innerHTML = `<p>${ongRhyme}</p><p>Number of words ending with ong: ${ongWordCount}</p><p>Total number of words: ${ongRhymeArr.length}</p>`;
});

const oolRhyme = `School is cool.`;

const oolRhymeArr = oolRhyme.split(" ");

const oolWordCount = wordCount(oolRhymeArr, "ool");

schoolButton.addEventListener("click", function schoolHelp() {
  document.querySelector(
    "#schoolText"
  ).innerHTML = `<p>${oolRhyme}</p><p>Number of words ending with ool: ${oolWordCount}</p><p>Total number of words: ${oolRhymeArr.length}</p>`;
});

const ateRhyme = `Don't Hate Appreciate`;

const ateRhymeArr = ateRhyme.split(" ");

const ateWordCount = wordCount(ateRhymeArr, "ate");

hateButton.addEventListener("click", function hateHelp() {
  document.querySelector(
    "#hateText"
  ).innerHTML = `<p>${ateRhyme}</p><p>Number of words ending with ate: ${ateWordCount}</p><p>Total number of words: ${ateRhymeArr.length}</p>`;
});
