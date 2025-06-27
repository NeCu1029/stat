const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");
const q6 = document.getElementById("q6");
const fin = document.getElementById("finish");
const doc = document.getElementById("doc");
const text = document.getElementById("text");
let ans = 0;
let timeout;

document.getElementById("a1").addEventListener("click", () => {
  q1.classList.add("hidden");
  q2.classList.remove("hidden");
});

document.getElementById("a2-1").addEventListener("click", () => {
  ans = ans * 10 + 1;
  doc.setAttribute("src", `img${ans}.jpg`);
  q2.classList.add("hidden");
  q3.classList.remove("hidden");
  timeout = setTimeout(() => {
    q3.classList.add("hidden");
    q4.classList.remove("hidden");
  }, 180000);
});
document.getElementById("a2-2").addEventListener("click", () => {
  ans = ans * 10 + 2;
  doc.setAttribute("src", `img${ans}.jpg`);
  q2.classList.add("hidden");
  q3.classList.remove("hidden");
  timeout = setTimeout(() => {
    q3.classList.add("hidden");
    q4.classList.remove("hidden");
  }, 180000);
});
document.getElementById("a2-3").addEventListener("click", () => {
  ans = ans * 10 + 3;
  doc.setAttribute("src", `img${ans}.jpg`);
  q2.classList.add("hidden");
  q3.classList.remove("hidden");
  timeout = setTimeout(() => {
    q3.classList.add("hidden");
    q4.classList.remove("hidden");
  }, 180000);
});
document.getElementById("a2-4").addEventListener("click", () => {
  ans = ans * 10 + 4;
  doc.setAttribute("src", `img${ans}.jpg`);
  q2.classList.add("hidden");
  q3.classList.remove("hidden");
  timeout = setTimeout(() => {
    q3.classList.add("hidden");
    q4.classList.remove("hidden");
  }, 180000);
});
document.getElementById("a2-5").addEventListener("click", () => {
  ans = ans * 10 + 5;
  doc.setAttribute("src", `img${ans}.jpg`);
  q2.classList.add("hidden");
  q3.classList.remove("hidden");
  timeout = setTimeout(() => {
    q3.classList.add("hidden");
    q4.classList.remove("hidden");
  }, 180000);
});
document.getElementById("a2-6").addEventListener("click", () => {
  ans = ans * 10 + 6;
  doc.setAttribute("src", `img${ans}.jpg`);
  q2.classList.add("hidden");
  q3.classList.remove("hidden");
  timeout = setTimeout(() => {
    q3.classList.add("hidden");
    q4.classList.remove("hidden");
  }, 180000);
});

document.getElementById("skip").addEventListener("click", () => {
  clearTimeout(timeout);
  q3.classList.add("hidden");
  q4.classList.remove("hidden");
});

document.getElementById("a4-1").addEventListener("click", () => {
  ans = ans * 10 + 1;
  q4.classList.add("hidden");
  q5.classList.remove("hidden");
});
document.getElementById("a4-2").addEventListener("click", () => {
  ans = ans * 10 + 2;
  q4.classList.add("hidden");
  q5.classList.remove("hidden");
});
document.getElementById("a4-3").addEventListener("click", () => {
  ans = ans * 10 + 3;
  q4.classList.add("hidden");
  q5.classList.remove("hidden");
});
document.getElementById("a4-4").addEventListener("click", () => {
  ans = ans * 10 + 4;
  q4.classList.add("hidden");
  q5.classList.remove("hidden");
});

document.getElementById("a5-1").addEventListener("click", () => {
  ans = ans * 10 + 1;
  q5.classList.add("hidden");
  q6.classList.remove("hidden");
});
document.getElementById("a5-2").addEventListener("click", () => {
  ans = ans * 10 + 2;
  q5.classList.add("hidden");
  q6.classList.remove("hidden");
});
document.getElementById("a5-3").addEventListener("click", () => {
  ans = ans * 10 + 3;
  q5.classList.add("hidden");
  q6.classList.remove("hidden");
});
document.getElementById("a5-4").addEventListener("click", () => {
  ans = ans * 10 + 4;
  q5.classList.add("hidden");
  q6.classList.remove("hidden");
});

document.getElementById("a6-1").addEventListener("click", () => {
  ans = ans * 10 + 1;
  text.innerText = (ans * 12345678).toString(36);
  q6.classList.add("hidden");
  fin.classList.remove("hidden");
});
document.getElementById("a6-2").addEventListener("click", () => {
  ans = ans * 10 + 2;
  text.innerText = (ans * 12345678).toString(36);
  q6.classList.add("hidden");
  fin.classList.remove("hidden");
});
document.getElementById("a6-3").addEventListener("click", () => {
  ans = ans * 10 + 3;
  text.innerText = (ans * 12345678).toString(36);
  q6.classList.add("hidden");
  fin.classList.remove("hidden");
});
document.getElementById("a6-4").addEventListener("click", () => {
  ans = ans * 10 + 4;
  text.innerText = (ans * 12345678).toString(36);
  q6.classList.add("hidden");
  fin.classList.remove("hidden");
});
document.getElementById("a6-5").addEventListener("click", () => {
  ans = ans * 10 + 5;
  text.innerText = (ans * 12345678).toString(36);
  q6.classList.add("hidden");
  fin.classList.remove("hidden");
});
document.getElementById("a6-6").addEventListener("click", () => {
  ans = ans * 10 + 6;
  text.innerText = (ans * 12345678).toString(36);
  q6.classList.add("hidden");
  fin.classList.remove("hidden");
});
