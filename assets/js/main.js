// FOR GLITCH HACKER EFFECT

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let intervals = [];

const decoders = document.querySelectorAll(".decoder");

for (const decoder of decoders) {
  const originalText = decoder.innerText;
  let interval = null;

  decoder.addEventListener("mouseover", () => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      decoder.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 4;
    }, 30);
  });

  decoder.addEventListener("mouseout", () => {
    clearInterval(interval);
    decoder.innerText = originalText;
  });

  intervals.push(interval);
}



// NAVIGATION IN MOBILE
