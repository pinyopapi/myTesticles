const rangeSlider = document.querySelector("#range-slider");
const radioButtons = document.querySelectorAll(".clr-radio-btn");
const colorButtons = document.querySelectorAll(".picker-input");
const percentSliders = document.querySelectorAll(".hide2");
const rangeLabels = document.querySelectorAll("label");

let range = 0;
let percentages = [20, 50, 75];

radioButtons[0].checked = true;
rangeSlider.oninput = function () {
   range = this.value;
   paint();
};

for (let i = 0; i < percentSliders.length; i++) {
   percentSliders[i].oninput = function () {
      percentages[i] = this.valueAsNumber;
      paint();
   };
}

for (let i = 0; i < radioButtons.length; i++) {
   radioButtons[i].addEventListener("input", show);
}

for (let i = 0; i < colorButtons.length; i++) {
   colorButtons[i].addEventListener("input", paint);
}

function paint() {
   if (radioButtons[0].checked) {
      colorButtons[1].value = colorButtons[0].value;
      colorButtons[2].value = colorButtons[0].value;
   } else if (radioButtons[1].checked) {
      colorButtons[2].value = colorButtons[0].value;
   }

   document.getElementById(
      "color-picker"
   ).style.background = `linear-gradient(${range}deg,
            ${colorButtons[0].value} ${percentages[0]}%, 
            ${colorButtons[1].value} ${percentages[1]}%,
            ${colorButtons[2].value} ${percentages[2]}%`;
}

function show() {
   let index = 0;
   let displayStyle = "";
   let flexibleContent = [
      rangeSlider,
      colorButtons[1],
      percentSliders[0],
      percentSliders[1],
      colorButtons[2],
      percentSliders[2],
   ];

   while (index < flexibleContent.length) {
      if (radioButtons[0].checked || (radioButtons[1].checked && index > 3)) {
         displayStyle = "none";
      }
      if (radioButtons[1].checked && index < 3) {
         displayStyle = "grid";
      }
      if (radioButtons[2].checked) {
         displayStyle = "grid";
      }
      flexibleContent[index].style.display = displayStyle;
      index++;
   }
}
