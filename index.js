document.querySelector(".question").textContent =
  "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.";

const answer = prompt("Vase odpoved");

document.querySelector(".answer__text").textContent = answer;

if (answer === "Bell") {
  document.querySelector(".answer").classList.add("answer--correct");
} else {
  document.querySelector(".answer").classList.add("answer--wrong");
}
