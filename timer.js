var minsLeft = 29;
var secsLeft = 59;
let miNs = document.getElementById("mins");
miNs.innerText = 30;
let seCs = document.getElementById("seconds");
seCs.innerText = "00";

function countdown() {
  miNs.innerText = minsLeft;
  if (minsLeft == 0) {
    minsLeft = "00"
    secsLeft = "00"
  }
    if (secsLeft == -1) {
      secsLeft = 59;
        minsLeft--
    }

  else {
    seCs.innerText = secsLeft;
    secsLeft--;
  }
}

function startCount() {
  var timerid = setInterval(countdown, 1000);
  let btn = document.getElementById("stop");
  let btnhide = document.getElementById("start")
  let showDiv = document.getElementsByClassName("quiz-body")[0];
  let hideDiv = document.getElementsByClassName("quiz-stop")[0];
  showDiv.style.display = "flex";
  hideDiv.style.display = "none";
  btn.style.display = "block"
  btnhide.style.display = "none"
}

function stopCount() {
  minsLeft = "00"
  secsLeft = "00"
  let btnhide = document.getElementById("stop");
  let btn = document.getElementById("submit");
  btnhide.style.display = "none"
  btn.style.display = "block"
  let showDiv = document.getElementsByClassName("quiz-body")[0];
  let hideDiv = document.getElementsByClassName("quiz-stop")[0];
  let h2 = document.getElementById("h2");
  h2.innerText = "Click submit button to see your score"
  showDiv.style.display = "none";
  hideDiv.style.display = "none";
}