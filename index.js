const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
   <span>${h}</span>
   <span>${m}</span>
   <span>${s}</span>
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);// 定時器(定時執行函數, 毫秒(1000毫秒=1秒))
