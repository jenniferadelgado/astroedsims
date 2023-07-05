/* make the initial conditions for the masses */
const simSpace = document.querySelector(".sim-space");

let massX = 13, massY = 10;
const initSim = () => {
  let htmlMarkup = `<div class ="masses" sytle="grid-area: ${massY} / ${massX}"></div>`;
  simSpace.innerHTML = htmlMarkup;
}
initSim()
