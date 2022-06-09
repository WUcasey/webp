import React, { Component } from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
const styles={
    box:{
        position:"absolute",
        left:"20%",
        top:"15%"
    },
    Hstyle:{
        padding:"0px",
        margin:"0px"
    },
    content:{
        position:"absolute",
        left:"35%",
        top:"23%"
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
class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            name: null,
            login:null,
            location:null,
            id:null,
            blog:null,
            followers:null

        }
    }
    
    componentDidMount(){
        fetch("https://api.github.com/users/cjwu",{method:"GET"})
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            this.setState({name:data.name})
            this.setState({login:data.login})
            this.setState({location:data.location})
            this.setState({id:data.id})
            this.setState({blog:data.blog})
            this.setState({followers:data.followers})
        })
        .catch(e=>{
            console.log("error")
        })
    }
    render(){
        return(
            <div>
                <Box sx={{width:"500px"}} style={styles.box}>
                    <Avatar
                        src= 'https://images.unsplash.com/photo-1549388604-817d15aa0110'
                        alt="Remy Sharp"
                        sx={{ width: 150, height: 150 }}
                    />
                    <div style={styles.content}>
                        <h1 style={styles.Hstyle}>{this.state.name}</h1>
                        <h2 style={styles.Hstyle}>{this.state.login}</h2>
                       
                    </div>
                    <div style={styles.infor}>
                        <h3 style={styles.Hstyle}><AssignmentIndIcon style={styles.icon}/>id: {this.state.id}</h3>
                        <h3 style={styles.Hstyle}><EmojiPeopleIcon style={styles.icon}/>followers: {this.state.followers}</h3>
                        <h3 style={styles.Hstyle}><LocationOnIcon style={styles.icon}/>location: {this.state.location}</h3>
                        <h3 style={styles.Hstyle}><LinkIcon style={styles.icon}/>link: {this.state.blog}</h3>
                    </div>
                </Box>
            </div>
        )
    }
   
}
export default Profile