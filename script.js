const titleCaseInput = document.querySelector("#title-case");
const titleCaseOutput = document.querySelector("#title-case-result");

function titleCase(event) {
  event.preventDefault();

  const titleCase = titleCaseInput.value;

  const titleCaseArray = titleCase.split(" ");

  let titleCaseResult = "";

  for (i = 0; i < titleCaseArray.length; i++) {
    let titleCaseWord = titleCaseArray[i];

    titleCaseResult +=
      titleCaseWord[0].toUpperCase() +
      titleCaseWord.slice(1).toLowerCase() +
      " ";
  }

  titleCaseOutput.innerHTML = titleCaseResult.trim();
}
