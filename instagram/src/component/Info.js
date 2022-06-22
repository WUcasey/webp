import React, { Component } from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';


const styles={
    box:{
        position:"absolute",
        left:"46%",
        top:"40%"
    },
    Hstyle:{
        padding:"0px",
        margin:"0px",
        textAlign:"center"
    },
    content:{
        position:"absolute",
        width:"20px",
        left:"7%",
        top:"30%",
        color:"white"
        
    },
    infor:{
        position:"absolute",
        left:"5%"
    },
    icon:{
        marginTop:"10px",
        marginRight:"5px",
        marginBottom:"-3px",
        fontSize:"30px"
    }
}
class Info extends Component{
    constructor(props){
        super(props);
        this.state={
            

        }
    }
    
   
    render(){
        return(
            <div>
                <Box sx={{width:"500px"}} style={styles.box}>
                    <Avatar
                        src= 'https://images.unsplash.com/photo-1549388604-817d15aa0110'
                        alt="Remy Sharp"
                        sx={{ width: 150, height: 150 }}
                    >
                    </Avatar>
                    <div style={styles.content}>
                        <h1 style={styles.Hstyle}>{this.props.name}</h1>                       
                    </div>
                </Box>
            </div>
        )
    }
   
}
export default Info