const listProgressColors = ["green", "orange", "blue-sky", "purple"];

export const getProgressColor = () => {
  return listProgressColors[Math.floor(listProgressColors.length * Math.random())];
}