const lines = document.querySelectorAll(".line");
const numbers = document.querySelectorAll(".number");
const btns = document.querySelectorAll(".btn");

let nextCounter = 3;
let prevCounter = 0;

const prev = () => {
  if (prevCounter === 0) return;
  
    numbers[prevCounter].classList.remove("active-number");
    lines[prevCounter - 1].classList.remove("active-line");

    prevCounter--;
    nextCounter++;
  
};

const next = () => {
  if (nextCounter === 0) return;
  
    lines[prevCounter].classList.add("active-line");
    numbers[prevCounter + 1].classList.add("active-number");

    nextCounter--;
    prevCounter++;
  
};
