import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import background from "../picture/login2.jpg";
import purple from '@material-ui/core/colors/purple';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import firebase from "../back/firebase";
import {useNavigate} from 'react-router-dom';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';


const styles={
    bground:{
        position:"absolute",
        opacity:"90%",
        top:"0",
        left:"0",
        width: '100%',
        height: '100%',
        backgroundSize:"cover",
        backgroundPosition: 'center',
        backgroundImage: `url(${background})`
    },

    box:{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        borderRadius:"25px",
        transform: 'translate(-50%, -50%)',
        width: "700px",
        height: "450px",
        opacity:"80%",
        backgroundColor: 'white',

    },
    haed:{
        position: 'absolute', 
        left: '10%', 
        top: '15%',
    },
    user:{
        position: 'absolute', 
        left: '10%', 
        top: '35%'
    },
    password:{
        position: 'absolute', 
        left: '10%', 
        top: '35%',

    },
    but:{
        position: 'absolute', 
        left: '10%', 
        top: '70%',
        fontFamily: 'monospace',
        fontSize:"15px"

    },
    email:{
        position: 'absolute', 
        left: '10%', 
        top: '50%',
        fontSize:"18px",
        width:"500px"
    },
    error:{
        position:"absolute",
        top:"80%",
        left:"10%",
        width:"500px"
    },
    load:{
        position:"absolute",
        left: '25%', 
        top: '70%',
    }
}

export default function Myregister(){
    let history = useNavigate();
    const [loading,setloading]=useState(false);
    const [error,seterror]=useState("");
    const [userpassword,setpassword]=useState("")
    function changepassword(e){
        setpassword(e.target.value);
    }
    const [useremail,setemail]=useState("")
    function changeemail(e){
        setemail(e.target.value);
    }
    return(
        <div style={styles.bground}>
            <Box style={styles.box}>
                <Avatar style={styles.haed} sx={{ bgcolor: purple[900],width: 65, height: 65 }} src="/broken-image.jpg"></Avatar>
                <TextField value={userpassword} onChange={changepassword} style={styles.password} id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
                <TextField value={useremail} onChange={changeemail} style={styles.email} label="E-mail" />
                <Button  onClick={click} style={styles.but}  variant="contained" sx={{bgcolor:purple[900]}}>submit</Button>
                {loading && <CircularProgress style={styles.load} color="secondary" />}
                {error && <div style={styles.error}>
                    <Alert severity="error" >
                        <AlertTitle>Error</AlertTitle>
                        <strong>{error}</strong>
                    </Alert>
                </div>}
                
            </Box>
        </div>
    )
    function click(e){
        e.preventDefault();
        setloading(true);
        firebase.auth().createUserWithEmailAndPassword(useremail,userpassword)
        .then(()=>{
            var db = firebase.firestore();
            var ref = db.collection("userinfomation").doc()
            ref.set({
                password:userpassword,
                email:useremail
            })
            .then(()=>{console.log("sucess")})
            .catch((e)=>{
                console.log(e.code)
            })
            history('/MyHome');
            setloading(false);
        })
        .catch((error)=>{
            console.log(error.code)
            switch(error.code){
                case "auth/email-already-in-use":
                    seterror("信箱已存在");
                    break;
                case "auth/invalid-email":
                    seterror("信箱格式錯誤");
                    break;
                case " auth/weak-password":
                    seterror("密碼安全性不足");
                    break;
                   
                default:
            }
            setloading(false);

        });
        
    }
}