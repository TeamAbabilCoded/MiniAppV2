const claimBtn = document.getElementById("claimBtn");
const progress = document.getElementById("progress");

let seconds = 0;
let maxSeconds = 30;

let interval = setInterval(() => {
  seconds++;
  let percent = (seconds / maxSeconds) * 100;
  progress.style.width = percent + "%";

  if (seconds >= maxSeconds) {
    clearInterval(interval);
    claimBtn.disabled = false;
  }
}, 1000);

claimBtn.addEventListener("click", () => {
  if (window.Telegram && Telegram.WebApp) {
    const id = Telegram.WebApp.initDataUnsafe?.user?.id || 0;
    const log = {
      user_id: id,
      timestamp: new Date().toISOString()
    };
    console.log("Log:", log);
    Telegram.WebApp.sendData("klaim_poin");
    Telegram.WebApp.close();
  }
});