const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clicktime = 0;
loveMe.addEventListener("dblclick", creatHeart);

function creatHeart(e) {
  clicktime++;
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOff = e.target.offsetLeft;
  const topOff = e.target.offsetTop;

  const xinside = x - leftOff;
  const yinside = y - topOff;

  heart.style.top = `${yinside}px`;
  heart.style.left = `${xinside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = clicktime;

  if (times.innerHTML == 5) {
    alert("انا اسف  ي حبي");
  }
  setTimeout(() => heart.remove(), 1000);

  window.localStorage.setItem("liked", clicktime);
  times.innerHTML = window.localStorage.getItem("liked");
}
