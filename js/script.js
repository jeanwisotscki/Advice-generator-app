const btn = document.querySelector("#btn");
const p = document.querySelector(".paragraph");

async function getAdvice() {
  try {
    const response = await fetch("	https://api.adviceslip.com/advice");
    if (!response.ok) throw new Error();
    const json = await response.json();
    p.innerText = json.slip.advice;
    console.log(json.slip.advice);
  } catch (erro) {
    console.log(erro);
  } finally {
    console.log("fim");
  }
}

btn.addEventListener("click", getAdvice);
