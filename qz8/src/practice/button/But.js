import React from "react";
const changeName=(event)=>{
    event.target.innerText=event.target.innerText+'被點了'
}
let buttons=document.getElementById("root")
buttons.addEventListener("click",(e)=>{
    if(e.target.className==="but"){
        changeName(e);
    }

})
function mutilBut(){
    var output=[]
    for(var i=1;i<11;i++){
        output.push(<button key={i} className="but" style={but}>第{i}個按鍵</button>)
    }
    return output
}
const but={
    fontSize:'18px',
    backgroundColor:'white',
    border:'2px gray solid ',
    borderRadius:'20px',
    letterSpacing:'3px' ,
    padding:'10px 12px ' ,
    display:'block',
    margin:'10px'
}
function But(){
    
    return(
        <div id="buts">
            {mutilBut()}
        </div>
    )
}
export default But