const meals={
all:["🐔 鹹水雞","🍢 滷味","🥗 蛋白盒子","🏪 超商"],
meat:["🐔 鹹水雞","🥗 蛋白盒子","🍢 滷味"],
cheap:["🏪 超商","🍢 滷味"],
store:["🏪 雞胸+沙拉+茶葉蛋","🏪 飯糰+豆漿"]};
function update(w){
cw.textContent=w.toFixed(1)+" kg";
goal.textContent="距離49kg還有 "+Math.max(0,w-49).toFixed(1)+" kg";
fill.style.width=Math.max(0,Math.min(100,((55.7-w)/(6.7))*100))+"%";
let hist=JSON.parse(localStorage.getItem("history")||"[]");
drawChart(hist);
let b="";
if(w<=54)b+="<span class='badge'>54kg🎉</span>";
if(w<=52)b+="<span class='badge'>52kg🎉</span>";
if(w<=50)b+="<span class='badge'>50kg🎉</span>";
if(w<=49)b+="<span class='badge'>49kg🏆</span>";
badges.innerHTML=b||"尚未解鎖";
}
function save(){
let val=parseFloat(w.value);if(!val)return;
localStorage.setItem("weight",val);
let h=JSON.parse(localStorage.getItem("history")||"[]");h.push(val);localStorage.setItem("history",JSON.stringify(h));
update(val);
}
function draw(){
let arr=meals[mode.value];
meal.innerHTML="<div style='padding:14px;background:#f8fbff;border-radius:14px'>"+arr[Math.floor(Math.random()*arr.length)]+"</div>";
}
function drawChart(hist){
let c=chart.getContext("2d");c.clearRect(0,0,360,120);
c.strokeStyle="#60a5fa";c.lineWidth=3;
if(hist.length<2){c.fillText("開始記錄體重後會顯示折線圖",20,60);return;}
let max=Math.max(...hist),min=Math.min(...hist);
c.beginPath();
hist.forEach((v,i)=>{let x=20+i*(320/(hist.length-1));let y=100-((v-min)/((max-min)||1))*70;i?c.lineTo(x,y):c.moveTo(x,y);});
c.stroke();
}
update(parseFloat(localStorage.getItem("weight")||55.7));
if('serviceWorker' in navigator){navigator.serviceWorker.register('service-worker.js');}

const defaultFoodDB={
 breakfast:["🏪 茶葉蛋＋無糖豆漿","🏪 鮪魚三明治","🏪 飯糰＋豆漿","🏪 地瓜＋茶葉蛋"],
 dinner:["🐔 鹹水雞","🍢 滷味","🥗 蛋白盒子","🏪 健康餐盒"]
};
function getFoodDB(){
 let db=localStorage.getItem("foodDB");
 if(!db){localStorage.setItem("foodDB",JSON.stringify(defaultFoodDB));db=JSON.stringify(defaultFoodDB);}
 return JSON.parse(db);
}
function addFood(){
 const name=foodName.value.trim();
 if(!name)return;
 const db=getFoodDB();
 db[mealType.value].push(name);
 localStorage.setItem("foodDB",JSON.stringify(db));
 foodName.value="";
 alert("已新增");
}
function drawBreakfast(){
 const arr=getFoodDB().breakfast;
 meal.innerHTML="<div style='padding:14px;background:#f8fbff;border-radius:14px'>"+arr[Math.floor(Math.random()*arr.length)]+"</div>";
}
function drawDinner(){
 const arr=getFoodDB().dinner;
 meal.innerHTML="<div style='padding:14px;background:#f8fbff;border-radius:14px'>"+arr[Math.floor(Math.random()*arr.length)]+"</div>";
}
