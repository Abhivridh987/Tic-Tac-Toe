// Tic Tac Toe Game
const marker=['X','O'];
let current_index=0;
let winner;

let moves=[];

let verticaledges=[0,3,6];
let horizontaledges=[0,1,2];



let box=document.querySelectorAll('.box1');

let verify=()=>{
    let players=[document.querySelector('#player1').value,document.querySelector('#player2').value];
    for(let edge of verticaledges)
    {
        if(box[edge].innerText==box[edge+1].innerText && box[edge].innerText==box[edge+2].innerText && box[edge].innerText!='')
        {
            winner=box[edge].innerText;
            document.querySelector('.resultbox').style.display="block";
            document.querySelector('.resultbox').innerHTML=`<text>Congratulations !!</text><br><span>${players[marker.indexOf(winner)]}</span><br> is the winner<br>`;
            document.querySelector('.grid').style.opacity="0.4";
            let ok=document.createElement("button");
        ok.setAttribute("class","okbutton");
        ok.innerText=`OK`;
        document.querySelector('.resultbox').append(ok);
        document.querySelector('.grid').style.opacity="0.4";
        ok.onclick=()=>{
            document.querySelector('.resultbox').style.display="none";
            document.querySelector('.grid').style.opacity="1";
            current_index=0;
           
        }
            return 1;
        
        }
    }
    for(let edge of horizontaledges)
        {
            if(box[edge].innerText==box[edge+3].innerText && box[edge].innerText==box[edge+6].innerText && box[edge].innerText!='')
            {
                winner=box[edge].innerText;
                document.querySelector('.resultbox').style.display="block";
                document.querySelector('.resultbox').innerHTML=`<text>Congratulations !!</text><br><span>${players[marker.indexOf(winner)]}</span><br> is the winner<br>`;
                document.querySelector('.grid').style.opacity="0.4";
                let ok=document.createElement("button");
        ok.setAttribute("class","okbutton");
        ok.innerText=`OK`;
        document.querySelector('.resultbox').append(ok);
        document.querySelector('.grid').style.opacity="0.4";
        ok.onclick=()=>{
            document.querySelector('.resultbox').style.display="none";
            document.querySelector('.grid').style.opacity="1";
            current_index=0;
            let box=document.querySelectorAll('.box1');
            
        }
                return 1;
            
            }
        }
    if(box[0].innerText==box[4].innerText && box[0].innerText==box[8].innerText && box[0].innerText!='')
    {
        winner=box[0].innerText;
        document.querySelector('.resultbox').style.display="block";
        document.querySelector('.resultbox').innerHTML=`<text>Congratulations !!</text><br><span>${players[marker.indexOf(winner)]}</span><br> is the winner<br>`;
        document.querySelector('.grid').style.opacity="0.4";
        let ok=document.createElement("button");
        ok.setAttribute("class","okbutton");
        ok.innerText=`OK`;
        document.querySelector('.resultbox').append(ok);
        document.querySelector('.grid').style.opacity="0.4";
        ok.onclick=()=>{
            document.querySelector('.resultbox').style.display="none";
            document.querySelector('.grid').style.opacity="1";
            current_index=0;
            
        }
        return 1;
    }
    if(box[2].innerText==box[4].innerText && box[2].innerText==box[6].innerText && box[2].innerText!='')
    {
        winner=box[2].innerText;
        document.querySelector('.resultbox').style.display="block";
        document.querySelector('.resultbox').innerHTML=`<text>Congratulations !!</text><br><span>${players[marker.indexOf(winner)]}</span><br> is the winner<br>`;
        document.querySelector('.grid').style.opacity="0.4";
        let ok=document.createElement("button");
        ok.setAttribute("class","okbutton");
        ok.innerText=`OK`;
        document.querySelector('.resultbox').append(ok);
        document.querySelector('.grid').style.opacity="0.4";
        ok.onclick=()=>{
            document.querySelector('.resultbox').style.display="none";
            document.querySelector('.grid').style.opacity="1";
            current_index=0;
            
        }
        return 1;
    }
}

let check=(i)=>{
    if(document.querySelector('#player1').value=='')
    {
        document.querySelector('.resultbox').style.display="block";
        document.querySelector('.resultbox').innerHTML=`<text>Oops !</text><br>Please Enter a Name for Player 1`;
        let ok=document.createElement("button");
        ok.setAttribute("class","okbutton");
        ok.innerText=`OK`;
        document.querySelector('.resultbox').append(ok);
        document.querySelector('.grid').style.opacity="0.4";
        ok.onclick=()=>{
            document.querySelector('.resultbox').style.display="none";
            document.querySelector('.grid').style.opacity="1";
            current_index=0;
            
        }
        
        return ;
    }
    if(document.querySelector('#player2').value=='')
        {
            document.querySelector('.resultbox').style.display="block";
            document.querySelector('.resultbox').innerHTML=`<text>Oops !</text><br>Please Enter a Name for Player 2`;
            let ok=document.createElement("button");
            ok.setAttribute("class","okbutton");
            ok.innerText=`OK`;
            document.querySelector('.resultbox').append(ok);
            document.querySelector('.grid').style.opacity="0.4";
            ok.onclick=()=>{
                document.querySelector('.resultbox').style.display="none";
                document.querySelector('.grid').style.opacity="1";
                current_index=0;

            }
            
            return ; 
        }
    
    if(box[i].innerText=='')
    {
        box[i].innerText=marker[current_index];
        moves.push(i);
        if(current_index==0)
        {
            let el=document.createElement("i");
            el.setAttribute("class","fa-solid fa-x fa-2xl");
            box[i].append(el);
            current_index=1;
        }
        else
        {
            let el=document.createElement("i");
            el.setAttribute("class","fa-regular fa-circle fa-2xl");
            box[i].append(el);
            current_index=0;
        }
        let num = verify();


        let finish=1;
        for(let j=0;j<9;j++)
        {
            if(box[j].innerText=='')
            {
                finish=0;
                break;
            }
        }
        if(finish==1 && num!=1)
        {
            document.querySelector('.resultbox').style.display="block";
            document.querySelector('.resultbox').innerHTML=`<text>Oops !!</text><br>No Player has won the game<br> `;
            document.querySelector('.grid').style.opacity="0.4";
            let ok=document.createElement("button");
        ok.setAttribute("class","okbutton");
        ok.innerText=`OK`;
        document.querySelector('.resultbox').append(ok);
        document.querySelector('.grid').style.opacity="0.4";
        ok.onclick=()=>{
            document.querySelector('.resultbox').style.display="none";
            document.querySelector('.grid').style.opacity="1";
            current_index=0;
            

        }
        }
        let undo=document.querySelector('#undo');
        undo.onclick=()=>{
            moves.push(-1);
            box[i].innerHTML='';
            if(current_index==0)
            {
                current_index=1;
            }
            else{
                current_index=0;
            }
        };
    }
    
    
}
let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    let box=document.querySelectorAll('.box1');
    box.forEach((bx) =>{
        moves.length=0;
        bx.innerHTML='';
        current_index=0;
    });
    document.querySelector('#player1').value='';
    document.querySelector('#player2').value='';
})
for(let k=0;k<9;k++)
{
    box[k].addEventListener("click",()=>{check(k);});
}
let cancel_button=document.querySelector('.cancelbutton');
cancel_button.onclick=()=>{
    document.querySelector(".replay").style.display="none";
}

let replay_switch=document.querySelector("#replay");
replay_switch.addEventListener("click",()=>{
    document.querySelector(".replay").style.display="flex";
    let box_replay=document.querySelectorAll(".box2");
    box_replay.forEach((bx)=>{
        bx.innerHTML='';
    });
    let replay_player_details=document.querySelector(".replay-player-details");
    replay_player_details.innerHTML=`<h5>Player 1 [ <i class="fa-solid fa-x"></i> ] : <b>${document.querySelector('#player1').value}</b> <br> Player 2 [ <i class="fa-regular fa-circle"></i> ] : <b>${document.querySelector('#player2').value}</b> </h5>`;
})

let current_replay_condition;
let next_index=0;
let next_replay_current_index=0;


let replay_button=document.querySelector("#replaybutton");
replay_button.onclick=()=>{
    let box_replay=document.querySelectorAll(".box2");
    box_replay.forEach((bx)=>{
        bx.innerHTML='';
    });
    let replay_current_index=0;
    current_replay_condition=1;
    for(let i=0;i<moves.length;i++)
    {
        setTimeout(()=>{
            if(current_replay_condition==0)
            {
                let box_replay=document.querySelectorAll(".box2");
                box_replay.forEach((bx)=>{
                    bx.innerHTML='';
                });
                i=0;
                return;
            }
            else if(moves[i]!=(-1))
            {
                if(current_replay_condition===0)
                {
                    i=0;
                    return;
                }
                let el=document.createElement("i");
                el.setAttribute("class",replay_current_index==0?"fa-solid fa-x":"fa-regular fa-circle");
                box_replay[moves[i]].append(el);
                replay_current_index=(replay_current_index===0?1:0);
            }
            else if(i>0)
            {
                if(current_replay_condition===0)
                {
                    i=0;
                    return;
                }
                box_replay[moves[i-1]].innerHTML='';
                replay_current_index=(replay_current_index===0?1:0);
            }

            
            
        },1000*i);
    }
};

let stop_button=document.querySelector('#stopbutton');
stop_button.onclick=()=>{
    
    current_replay_condition=0;
    next_index=0;
    next_replay_current_index=0;
};



let next_button=document.querySelector('#nextmove');
next_button.onclick=()=>{
    if(next_index<moves.length)
    {
        let box_replay=document.querySelectorAll(".box2");
        if(moves[next_index]!=(-1))
        {
            
            let el=document.createElement("i");
            el.setAttribute("class",next_replay_current_index==0?"fa-solid fa-x":"fa-regular fa-circle");
            box_replay[moves[next_index]].append(el);
            next_replay_current_index=(next_replay_current_index===0?1:0);
            next_index+=1;
        }
        else if(next_index>0)
        {
            box_replay[moves[next_index-1]].innerHTML='';
            next_index+=1;
            next_replay_current_index=(next_replay_current_index===0?1:0);

        }

    }

}

let previous_button=document.querySelector('#previousmove');
previous_button.onclick=()=>{
    if(next_index>0)
    {
        let box_replay=document.querySelectorAll(".box2");
        if(moves[next_index-1]!=(-1))
        {
            
            if(next_index>0)
            {
                next_index=next_index-1;
            }

            box_replay[moves[next_index]].innerHTML='';
            next_replay_current_index=(next_replay_current_index===0?1:0);
        }
        else if(next_index<moves.length)
        {
            next_index=next_index-1;
            let el=document.createElement("i");
            el.setAttribute("class",next_replay_current_index==0?"fa-solid fa-x":"fa-regular fa-circle");
            box_replay[moves[next_index-1]].append(el);
            next_replay_current_index=(next_replay_current_index===0?1:0);
            

        }

    }


};
