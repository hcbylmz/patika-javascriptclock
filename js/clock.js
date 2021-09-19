let username = prompt("What is your username?");

document.querySelector("#myName").innerHTML = username;

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = today.getDay();
  let day;

  switch (d) {
    case 0:
      day = "Pazar";
      break;
    case 1:
      day = "Pazartesi";
      break;
    case 2:
        day = "Salı";
        break;
        case 3:
      day = "Çarşamba";
      break;
    case 4:
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
      break;
  }

  m = checkTime(m);
  s = checkTime(s);
  document.querySelector("#myClock").innerHTML =
    h + ":" + m + ":" + s + "  " + day;
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
setInterval(startTime, 1000);
