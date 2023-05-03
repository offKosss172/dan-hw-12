const buttons = document.querySelectorAll(".btn");
let activeButton = null;

document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    const button = [...buttons].find((btn) => btn.textContent.toUpperCase() === key);

    if (button) {
      button.classList.add("active");
      if (activeButton && activeButton !== button) {
        activeButton.classList.remove("active");
      }
      activeButton = button;
    }

    if (event.code === "Enter") {
      event.preventDefault();
    }
});