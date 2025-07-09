const words = [
  "Innovate",
  "Reduce Cost",
  "Improve reliability",
  "Drive down lead times",
  "Invent",
  "Reduce down time",
  "Custom solution",
  "Rapid prototype",
  "DfAM: Design for Additive Manufacturing"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
const cursor = "|";

function type() {
  const element = document.getElementById("typing-overlay");
  if (!element) return;

  const currentWord = words[wordIndex];
  if (!deleting) {
    charIndex++;
  } else {
    charIndex--;
  }
  const text = currentWord.substring(0, charIndex);
  element.textContent = text + cursor;

  if (!deleting && charIndex === currentWord.length) {
    deleting = true;
    setTimeout(type, 1000);
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  } else {
    const speed = deleting ? 100 : 150;
    setTimeout(type, speed);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", type);
} else {
  type();
}
