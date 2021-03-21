let counter = 0;
const value = document.getElementById("value");

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter > 0) {
      value.style.color = "green";
    } else if (counter) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.textContent = counter;
  });
});
