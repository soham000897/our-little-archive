/* Create Background Stars */

for(let i=0; i<90; i++){

    let s=document.createElement("div");

    s.className="star";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    s.style.animationDelay=Math.random()*4+"s";

    document.body.appendChild(s);
}


/* Loading Text */

let lines=[

"Searching through forgotten conversations...",

"Collecting moments worth remembering...",

"Finding laughter hidden in old chats...",

"Recovering memories created over time...",

"Detecting a friendship that still matters...",

"Someone important has been found...",

"Hello Mimo 💙"

];

let box=document.getElementById("text");

let fill=document.getElementById("fill");

let i=0;


/* Typewriter Function */

function write(line,done){

    let j=0;

    let div=document.createElement("div");

    box.appendChild(div);

    let timer=setInterval(()=>{

        div.innerHTML=line.substring(0,j) + "<span class='cursor'>|</span>";

        j++;

        if(j>line.length){

            clearInterval(timer);

            if(line.includes("Hello")){

                div.classList.add("final");

            }

            div.innerHTML=line;

            done();
        }

    },32);
}


/* Main Start Function */

function start(){

    if(i < lines.length){

        write(lines[i],()=>{

            fill.style.width=((i+1)*14)+"%";

            i++;

            setTimeout(start,650);

        });

    }

    else{

        /* After loading complete */

        setTimeout(()=>{

            /* hide first page */

            document.querySelector(".panel").style.opacity="0";


            /* show second page */

            document
            .getElementById("identityPage")
            .classList.add("show");

        },2000);

    }

}


/* Start */

start();
