const breakfasts=[
"🥚 茶葉蛋×2+無糖豆漿",
"🍠 地瓜+茶葉蛋",
"🍙 鮪魚飯糰+無糖茶",
"🥣 希臘優格+茶葉蛋",
"🍗 舒肥雞胸+香蕉"];
const dinners=[
"🐔 鹹水雞(雞胸+3樣菜)",
"🍢 滷味(肉2樣+菜3樣)",
"🥗 蛋白盒子(雞胸)",
"🥩 蛋白盒子(牛肉)",
"🏪 超商(雞胸+沙拉+茶葉蛋)"];
function r(a){return a[Math.floor(Math.random()*a.length)]}
function draw(){
meal.innerHTML="<b>早餐</b><br>"+r(breakfasts)+"<br><br><b>晚餐</b><br>"+r(dinners);
}
function saveWeight(){
localStorage.setItem("weight",weight.value);
show();
}
function show(){
const w=localStorage.getItem("weight");
last.textContent=w?("目前紀錄："+w+" kg"):"尚未紀錄";
}
for(let i=0;i<8;i++){
let b=document.createElement("button");
b.textContent="💧";
b.onclick=()=>b.classList.toggle("on");
water.appendChild(b);
}
show();
if('serviceWorker' in navigator){navigator.serviceWorker.register('service-worker.js');}
