//// -----------------------------------------------------------Todo app code

// let btn = document.querySelector('button');
// let input=document.querySelector('input');
// let ul =document.querySelector('ul');

// btn.addEventListener('click',function(){
//     if( input.value!=""){
//         let item=document.createElement('li');
//         item.innerText=input.value;
//         ul.appendChild(item);
//         let btn=document.createElement('button');
//         btn.innerText="Delete";
//         btn.classList.add('delete');
//         item.append(btn);
//     }else {
//         alert("Input value");
//     }
//     input.value="";
// });

// ul.addEventListener('click',function(event){
//     //console.log(event.target.nodeName);
//     if(event.target.nodeName=='BUTTON'){
//         event.target.parentElement.remove();
//     }
// });



// // -----------------------------------------------------------------------------Simon game code

// let h2=document.querySelector('h2');
// let level=0;
// let start=false;
// let colors=['yellow','orange','blue','pink'];

// document.addEventListener('keypress',function(){
//     if(start==false){
//         start=true;
//         levelUp();
//     }
// });

// function levelUp(){
//     level++;
//     h2.innerText=`LEVEL ${level}`;

//     let randIndx=Math.floor(Math.random()*4);
//     let randomColor=colors[randIndx];
//     let randbtn=document.querySelector(`.${randomColor}`)
//     Flash(randbtn);
// }

// function Flash(randbtn){
//     randbtn.classList.add('flash');
//     setTimeout((event)=>{
//         randbtn.classList.remove('flash');
//     },250);
// }



// //  -------------------------------------------------------- above code is also right

let start=false;
let gameSeq=[];
let userSeq=[];
let level=0;
let h2=document.querySelector('h2');
let colors=['yellow','orange','blue','pink'];

document.addEventListener('keypress',function(){
    if(start==false){
        start=true;
        levelUp();
    }
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`LEVEL ${level}`;

    let randIndx=Math.floor(Math.random()*4);
    let randColor=colors[randIndx];
    let randbtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    Flash(randbtn);
}

function Flash(randbtn){
    randbtn.classList.add('flash');
    setTimeout(()=>{
        randbtn.classList.remove('flash');
    },300);
}

let btns=document.querySelectorAll('.box');
for(btn of btns){
    btn.addEventListener('click',btnPress);
}

function btnPress(){
    let btn=this;
    Flash(btn);
    let color=this.getAttribute('id')
    userSeq.push(color);
    checkAns(userSeq.length-1);
}

function checkAns(indx){
    if(userSeq[indx]===gameSeq[indx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else {
        h2.innerHTML=`GameOver! Your Score <b>${level} <br> Press any Key to start again`;
        GameOver();
        reset();
    }
}

function reset(){
    level=0;
    gameSeq=[];
    userSeq=[];
    start=false;
}

function GameOver(){
    document.querySelector('body').style.backgroundColor='red';
    setTimeout(()=>{
        document.querySelector('body').style.backgroundColor='white';
    },200);
}