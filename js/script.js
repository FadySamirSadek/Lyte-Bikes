function changeColor(color) {
  for (let i = 11; i > 0; i--) {
    document.getElementById(
      `gallery-${i}`
    ).src = `./assets/gallery/${color}/${i}.png`;
  }
}
