const issueButton = document.querySelector("#issueButton");
const longButton = document.querySelector("#longButton");
const schoolButton = document.querySelector("#schoolButton");
const hateButton = document.querySelector("#hateButton");

const issueRhyme = `If you have an issue you might need a tissue.`;

const issueRhymeArr = issueRhyme.split(" ");

let issueWordCount = 0;

for (let i = 0; i < issueRhymeArr.length; i++) {
  if (
    issueRhymeArr[i].endsWith("issue") ||
    issueRhymeArr[i].endsWith("issue.")
  ) {
    issueWordCount = issueWordCount + 1;
  }
}

issueButton.addEventListener("click", function issueHelp() {
  document.querySelector(
    "#issueText"
  ).innerHTML = `<p>${issueRhyme}</p><p>Number of words ending with issue: ${issueWordCount}</p><p>Total number of words: ${issueRhymeArr.length}</p>`;
});

const ongRhyme = `If you think long you might think wrong.`;

const ongRhymeArr = ongRhyme.split(" ");

let ongWordCount = 0;

for (let i = 0; i < ongRhymeArr.length; i++) {
  if (ongRhymeArr[i].endsWith("ong") || ongRhymeArr[i].endsWith("ong.")) {
    ongWordCount = ongWordCount + 1;
  }
}

longButton.addEventListener("click", function longHelp() {
  document.querySelector(
    "#longText"
  ).innerHTML = `<p>${ongRhyme}</p><p>Number of words ending with ong: ${ongWordCount}</p><p>Total number of words: ${ongRhymeArr.length}</p>`;
});

const oolRhyme = `School is cool.`;

const oolRhymeArr = oolRhyme.split(" ");

let oolWordCount = 0;

for (let i = 0; i < oolRhymeArr.length; i++) {
  if (oolRhymeArr[i].endsWith("ool") || oolRhymeArr[i].endsWith("ool.")) {
    oolWordCount = oolWordCount + 1;
  }
}

schoolButton.addEventListener("click", function schoolHelp() {
  document.querySelector(
    "#schoolText"
  ).innerHTML = `<p>${oolRhyme}</p><p>Number of words ending with ool: ${oolWordCount}</p><p>Total number of words: ${oolRhymeArr.length}</p>`;
});

const ateRhyme = `Don't Hate Appreciate`;

const ateRhymeArr = ateRhyme.split(" ");

let ateWordCount = 0;

for (let i = 0; i < ateRhymeArr.length; i++) {
  if (ateRhymeArr[i].endsWith("ate") || ateRhymeArr[i].endsWith("ate.")) {
    ateWordCount = ateWordCount + 1;
  }
}

hateButton.addEventListener("click", function hateHelp() {
  document.querySelector(
    "#hateText"
  ).innerHTML = `<p>${ateRhyme}</p><p>Number of words ending with ate: ${ateWordCount}</p><p>Total number of words: ${ateRhymeArr.length}</p>`;
});
