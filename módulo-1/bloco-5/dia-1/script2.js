document.getElementsByTagName("p")[0].innerText = 'Daqui dois anos gostaria de estar num emprego legal e morando fora dos pais.';

document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";

document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";

document.getElementsByTagName("h1")[0].innerText = 'Exercício 5.1 - JavaScript';

let paragraph = document.getElementsByTagName("p");

for (i in paragraph) {
  paragraph[i].style.textTransform = "uppercase";
}
function exibir() {
  for (i2 in paragraph) {
    console.log(paragraph[i2]);
  }
}