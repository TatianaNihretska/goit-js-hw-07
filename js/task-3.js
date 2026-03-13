const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", function () {
  const value = input.value.trim();

  if (value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = value;
  }
});




/*const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", event => {
  const name = event.target.value.trim();

  output.textContent = name === "" ? "Anonymous" : name;
});*/

/* const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", function () {
  const value = input.value.trim();

  if (value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = value;
  }
});*/
/*const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  output.textContent = input.value.trim() || "Anonymous";
});*/