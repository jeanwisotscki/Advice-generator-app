const btn = document.querySelector("#btn");
const span = document.querySelector(".span");
const wrapper = document.querySelector(".wrapper");

function changeDOM(json) {
  span.innerText = `ADVICE #${json.slip.id}`;
  wrapper.innerText = `"${json.slip.advice}"`;
}

async function getAdvice() {
  try {
    const response = await fetch("	https://api.adviceslip.com/advice");
    if (!response.ok) throw new Error();
    const json = await response.json();
    changeDOM(json);
  } catch (erro) {
    console.log(erro);
  } finally {
    console.log("fim");
  }
}

btn.addEventListener("click", getAdvice);
