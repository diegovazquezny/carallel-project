export default function randomColor() {
  const colors = [
    "blue",
    "red",
    "green",
    "yellow",
    "purple",
    "orange",
    "lightgray",
    "pink",
  ];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
