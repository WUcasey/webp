import React from "react"
const font={
    fontWeight:"600",
    fontSize:"1cm",
    color:"black",
    letterSpacing:"2px",
    marginTop:"30px",
    marginBottom:"40px",
    textAlign:"center",
}
const container={
    height:"350px",
    width:"350px",
    border:"3px solid gray"
}
const fonttype={
    letterSpacing:"2px",
    margin:"25px 20px",
    textAlign:"center"
}
const box={
    border:"2px solid black",
    borderRadius:"30px",

}
const but={
    width:"100px",
    fontSize:'18px',
    fontWeight:"600",
    backgroundColor:'white',
    border:'3px solid black',
    borderRadius:'20px',
    letterSpacing:'2px' ,
    padding:'10px 12px ' ,
    margin:'10px 210px'
}
const Login=()=>{
    return(
        <div style={container}>
            <div style={font}>CGU Login</div>
            <h3 style={fonttype}>User Name:<input type={"text"} style={box}></input></h3>
            <h3 style={fonttype}>Password:<input type={"password"} style={box}></input></h3>
            <button style={but}>Log in</button>
        </div>
    )

}
export default Login