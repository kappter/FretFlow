// Placeholder JS to handle button clicks
const log = document.getElementById("log");

function logEvent(msg) {
  const p = document.createElement("div");
  p.textContent = msg;
  log.appendChild(p);
  log.scrollTop = log.scrollHeight; // auto-scroll
}

document.getElementById("play").onclick = () => logEvent("Play clicked");
document.getElementById("pause").onclick = () => logEvent("Pause clicked");
document.getElementById("stop").onclick = () => logEvent("Stop clicked");

document.getElementById("file-upload").onchange = (e) => {
  const file = e.target.files[0];
  if (file) logEvent(`Loaded file: ${file.name}`);
};

document.getElementById("sample-select").onchange = (e) => {
  if (e.target.value) logEvent(`Selected sample: ${e.target.value}`);
};
