const convertBtn = document.getElementsByClassName("convert-btn")[0];
const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const metricInputEl = document.getElementById("metric-input");
let dark = false;

convertBtn.addEventListener("click", () => {
  const convertNum = document.getElementById("metric-input").value;

  const convertUnits = {
    meterToFeet: convertNum * 3.281,
    feetToMeter: convertNum / 3.281,
    literToGallon: convertNum / 3.787878,
    gallonToLitre: convertNum * 3.7878,
    kilogramToPound: convertNum * 2.204,
    poundToKilogram: convertNum / 2.204,
  };

  const conversionContainers = {
    length: document.getElementsByClassName("length-conversion")[0],
    volume: document.getElementsByClassName("volume-conversion")[0],
    mass: document.getElementsByClassName("mass-conversion")[0],
  };

  const resetConversionTags = () => {
    const conversionTags = document.getElementsByClassName("conversion-info");
    const conversionTagsDark = document.getElementsByClassName(
      "conversion-info-dark"
    );

    for (let i of conversionTags) {
      i.innerHTML = "";
    }

    for (let i of conversionTagsDark) {
      i.innerHTML = "";
    }
  };

  const addConversionTags = (conversionClass) => {
    conversionContainers.length.innerHTML += `<p class="conversion-info ${conversionClass}">${convertNum} meters = ${convertUnits.meterToFeet.toFixed(
      3
    )} feet | ${convertNum} feet = ${convertUnits.feetToMeter.toFixed(
      3
    )} meters</p>`;
    conversionContainers.volume.innerHTML += `<p class="conversion-info ${conversionClass}">${convertNum} litres = ${convertUnits.literToGallon.toFixed(
      3
    )} gallons | ${convertNum} gallons = ${convertUnits.gallonToLitre.toFixed(
      3
    )} litres</p>`;
    conversionContainers.mass.innerHTML += `<p class="conversion-info ${conversionClass}">${convertNum} kilos = ${convertUnits.kilogramToPound.toFixed(
      3
    )} pounds | ${convertNum} pounds = ${convertUnits.poundToKilogram.toFixed(
      3
    )} kilos</p>`;
  };

  resetConversionTags();

  let conversionClass = dark ? "conversion-info-dark" : "conversion-info";
  addConversionTags(conversionClass);

  document.getElementById("metric-input").value = "";
});

toggleBtn.addEventListener("click", () => {
  const body = document.body;
  const convDivs = document.getElementsByClassName("conversion");
  const convHeadings = document.getElementsByClassName("conversion-heading");
  const convInfo = document.getElementsByClassName("conversion-info");

  body.classList.toggle("body-dark");

  for (let i of convDivs) {
    i.classList.toggle("conversion-dark");
  }

  for (let i of convHeadings) {
    i.classList.toggle("conversion-heading-dark");
  }

  for (let i of convInfo) {
    i.classList.toggle("conversion-info-dark");
  }

  toggleBtn.innerHTML = dark ? "Dark Mode 🌙" : "Light Mode ☀️";
  dark = !dark;
});

metricInputEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    convertBtn.click();
  }
});
