// // script

let lines = document.getElementsByTagName("p");
let w = window.innerWidth;
let h = window.innerHeight;


for (let line of lines) {
    line.style.position = "absolute";
    line.style.left = String(Math.random()*w)+"px";
    line.style.top = String(Math.random()*h)+"px";
}

let c2  = document.querySelector(".c1").cloneNode(deep=true);
c2.classList.remove('c1');
c2.classList.add('c2');
document.getElementById('container').appendChild(c2);

