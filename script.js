document.addEventListener("DOMContentLoaded", () => {
  const texts = [
    "Web Developer",
    "Tech Enthusiast",
    "ECE Student",
    "AI/ML Enthusiast",
    "DSA Explorer"
  ];
  let index = 0;
  let charIndex = 0;
  const typingLine = document.querySelector(".typing-line");
  const cursor = document.querySelector(".cursor");

  function type() {
    if (charIndex < texts[index].length) {
      typingLine.textContent += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingLine.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      index = (index + 1) % texts.length;
      setTimeout(type, 300);
    }
  }

  type();
});
