// magic
const letters = "ABCDEFGHKLNOPQRSXYZ"
let interval = null
document.querySelector(".magic").onmouseover = (event) => {
  let iteration = 0

  clearInterval(interval)

  interval = setInterval(() => {
    let a = event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index]
        }
        if (event.target.innerText[index] == " ") {
          return " "
        }
        return letters[Math.floor(Math.random() * letters.length)]
      })
      .join("")
    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval)
    }

    iteration += 1 / 3
  }, 80)
}