const breakfasts=["🥚 茶葉蛋×2＋無糖豆漿","🍙 鮪魚飯糰＋無糖茶","🍠 地瓜＋茶葉蛋","🥣 希臘優格＋茶葉蛋","🍗 舒肥雞胸＋香蕉"];
const dinners=["🐔 鹹水雞（雞胸＋3樣菜）","🍢 滷味（肉2樣＋菜3樣）","🥗 蛋白盒子（雞胸）","🥩 蛋白盒子（牛肉）","🏪 超商（雞胸＋沙拉＋茶葉蛋）"];
function rand(a){return a[Math.floor(Math.random()*a.length)]}
today.textContent=new Date().toLocaleDateString('zh-TW');
function drawMeal(){meal.innerHTML=`<b>早餐</b><br>${rand(breakfasts)}<hr><b>晚餐</b><br>${rand(dinners)}`;}
function saveWeight(){
const w=parseFloat(weightInput.value);if(!w)return;
localStorage.setItem('weight',w);
currentWeight.textContent=w.toFixed(1)+' kg';
const pct=Math.max(0,Math.min(100,((55.7-w)/(55.7-49))*100));
progress.style.width=pct+'%';
}
const old=localStorage.getItem('weight');
if(old){currentWeight.textContent=parseFloat(old).toFixed(1)+' kg';progress.style.width=Math.max(0,Math.min(100,((55.7-old)/(55.7-49))*100))+'%';}
for(let i=0;i<8;i++){const d=document.createElement('div');d.className='drop';d.textContent='💧';d.onclick=()=>d.classList.toggle('on');waterGrid.appendChild(d);}
if('serviceWorker' in navigator){navigator.serviceWorker.register('service-worker.js');}
