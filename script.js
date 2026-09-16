const container=document.getElementById("fireflies");

for(let i=0;i<42;i++){

const f=document.createElement("div");

f.className="firefly";

f.style.left=Math.random()*100+"vw";

f.style.top=Math.random()*100+"vh";

f.style.animationDuration=(7+Math.random()*10)+"s";

f.style.animationDelay=(-Math.random()*10)+"s";

container.appendChild(f);

}

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 30px rgba(255,235,170,.18)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none";

});

});
