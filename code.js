let XisEven = 1;
let shape = "X";
let id = "1";
let clicked = [0,0,0,0,0,0,0,0,0,0,0];
let won = false;
let counter = 0;
function clicksquare(num) {
    if (clicked[num]==0){
        
        document.getElementById("a"+num).classList.add('noHover');
        
        document.getElementById("turnText").innerHTML = shape + " Turn";
        if (XisEven%2==0){
            shape = "X";
            clicked[num]=2;
            document.getElementById("a"+num).style.color = "red";
            document.getElementById("turnText").style.color = "red";
            
        } else {
            shape = "O"
            clicked[num]=1;
            document.getElementById("a"+num).style.color = "blue";
            document.getElementById("turnText").style.color = "blue";
        }
        document.getElementById("a"+num).innerHTML = shape;
        //document.getElementById("a"+num).style.box.hover.color = "white";
       
        XisEven++;
        for(let i = 1; i <=2; i++)
        {
            let check = i;

            if (
                (clicked[1]==check && clicked[2]==check && clicked[3]==check) ||
                (clicked[4]==check && clicked[5]==check && clicked[6]==check) ||
                (clicked[7]==check && clicked[8]==check && clicked[9]==check) ||
    
                (clicked[1]==check && clicked[4]==check && clicked[7]==check) ||
                (clicked[2]==check && clicked[5]==check && clicked[8]==check) ||
                (clicked[3]==check && clicked[6]==check && clicked[9]==check) ||
    
                (clicked[1]==check && clicked[5]==check && clicked[9]==check) ||
                (clicked[3]==check && clicked[5]==check && clicked[7]==check)
                ){
                    win(i);
                }

        }
        counter=0;
        for(let i = 1; i <=9; i++){
            if(clicked[i]!=0){
                counter++;
            }
            if(counter==9 && won==false){
                document.getElementById("turnText").innerHTML = "Tie Game";
                document.getElementById("turnText").style.color = "green";
                document.getElementById("buttonright").style.display = "inline-block";
                document.getElementById("buttonleft").style.display = "inline-block";
            }
            
        }
        
        
        
       
    }
    
  }
  function win(player){
    document.getElementById("buttonright").style.display = "inline-block";
    document.getElementById("buttonleft").style.display = "inline-block";
    won=true;
    for(let i = 1; i <=9; i++){
        if(clicked[i]==0){
            clicked[i]=3;
            document.getElementById("a"+i).classList.add('noHover');
        }        
    }

    if (player==1){
        document.getElementById("turnText").innerHTML = "O Wins!";
        document.getElementById("turnText").style.color = "blue";
    } else {
        document.getElementById("turnText").innerHTML = "X Wins!";
        document.getElementById("turnText").style.color = "red";
    }
    
    
  }

