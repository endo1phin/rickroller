// // script

let lines = document.getElementsByTagName("p");
let w = window.innerWidth;
let h = window.innerHeight;


for (let line of lines) {
    line.style.position = "absolute";
    line.style.left = String(Math.random()*w)+"px";
    line.style.top = String(Math.random()*h)+"px";
    line.style.color = Math.random() > 0.5 ? "rgb(255,113,206)" : "rgb(1,205,254)"
}

let c2  = document.querySelector(".c1").cloneNode(deep=true);
c2.classList.remove('c1');
c2.classList.add('c2');
document.getElementById('container').appendChild(c2);

