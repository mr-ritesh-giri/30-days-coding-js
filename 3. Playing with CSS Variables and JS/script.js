const inputs = document.querySelectorAll(".range-keys input");

function rangeKeys() {
  const spacingValue =
    document.querySelector(`input[name="spacing"]`).value + "px";
  const blurValue = document.querySelector(`input[name="blur"]`).value + "px";
  const baseColorValue = document.querySelector(
    `input[name="base-color"]`
  ).value;

  document.documentElement.style.setProperty(`--spacing`, spacingValue);
  document.documentElement.style.setProperty(`--blur`, blurValue);
  document.documentElement.style.setProperty(`--base`, baseColorValue);

  const imageContainer = document.querySelector(".image-container");
  imageContainer.style.padding = spacingValue;
  imageContainer.style.background = baseColorValue;

  document.querySelectorAll("img").forEach((elem) => {
    elem.style.filter = `blur(${blurValue})`;
  });
}

inputs.forEach((input) => input.addEventListener("input", rangeKeys));

rangeKeys();
