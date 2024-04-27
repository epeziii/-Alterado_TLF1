const stopLight = document.getElementById("stopLight");
const slowLight = document.getElementById("slowLight");
const goLight = document.getElementById("goLight");

let lightState = "stop";

setInterval(() => {
  if (lightState === "stop") {
    stopLight.style.backgroundColor = "red";
    slowLight.style.backgroundColor = "black";
    goLight.style.backgroundColor = "black";
    lightState = "slow";
  } else if (lightState === "slow") {
    stopLight.style.backgroundColor = "black";
    slowLight.style.backgroundColor = "yellow";
    goLight.style.backgroundColor = "black";
    lightState = "go";
  } else if (lightState === "go") {
    stopLight.style.backgroundColor = "black";
    slowLight.style.backgroundColor = "black";
    goLight.style.backgroundColor = "green";
    lightState = "slow2";
  } else if (lightState === "slow2") {
    stopLight.style.backgroundColor = "black";
    slowLight.style.backgroundColor = "yellow";
    goLight.style.backgroundColor = "black";
    lightState = "stop";
  }
}, 2000);