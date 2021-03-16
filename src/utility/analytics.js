intervalId = setInterval(() => {
  console.log("Sending analytics data.......");
}, 1000);

document.getElementById("stop-analytics").addEventListener("click", () => {
  console.log("Analitics have stopped!");
  clearTimeout(intervalId);
});
