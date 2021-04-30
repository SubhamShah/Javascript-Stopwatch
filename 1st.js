window.onload = function () {
  var hour = 00;
  var minute = 00;
  var second = 00;
  var ten = 00;
  var appendTen = document.getElementById("ten");
  var appendSecond = document.getElementById("second");
  var appendMinute = document.getElementById("minute");
  var appendHour = document.getElementById("hour");
  var buttonStart = document.getElementById("start");
  var buttonStop = document.getElementById("stop");
  var buttonReset = document.getElementById("reset");
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    ten = "00";
    second = "00";
    minute='00';
    hour='00';
    appendTen.innerHTML = ten;
    appendSecond.innerHTML = second;
    appendMinute.innerHTML=minute;
    appendHour.innerHTML=hour;
  };

  function startTimer() {
    ten++;

    if (ten < 9) {
      appendTen.innerHTML = "0" + ten;
    }

    if (ten > 9) {
      appendTen.innerHTML = ten;
    }

    if (ten > 99) {
      console.log("second");
      second++;
      appendSecond.innerHTML = "0" + second;
      ten = 0;
      appendTen.innerHTML = "0" + 0;
    }

    if (second < 9) {
      appendSecond.innerHTML = "0"+second;
    }
    if(second>9){
      appendSecond.innerHTML = second;
    }
    if(second>59){
      minute++;
      appendMinute.innerHTML = "0" + minute;
      second = 0;
      appendSecond.innerHTML = "0" + 0;
    }
    if (minute < 9) {
      appendMinute.innerHTML = "0"+minute;
    }
    if(minute>9){
      appendMinute.innerHTML = minute;
    }
    if(minute>59){
      hour++;
      appendHour.innerHTML = "0" + hour;
      minute = 0;
      appendMinute.innerHTML = "0" + 0;
    }
  }
};