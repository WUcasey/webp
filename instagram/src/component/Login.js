import React ,{useState}from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import background from "../picture/login2.jpg";
import purple from '@material-ui/core/colors/purple';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import firebase from "../back/firebase";
import {useNavigate} from 'react-router-dom';
import 'firebase/compat/auth';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';

const styles={
    back:{
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
        left: '45%', 
        top: '15%',
    },
    
    password:{
        position: 'absolute', 
        left: '15%', 
        top: '35%'

    },
    email:{
        position: 'absolute', 
        left: '15%', 
        top: '50%',
        fontSize:"18px",
        width:"500px"
    },
    but:{
        position: 'absolute', 
        left: '73%', 
        top: '65%',
        fontFamily: 'monospace',
        fontSize:"18px"
    },
    sign:{
        position: 'absolute', 
        left: '15%', 
        top: '62%',
        fontFamily: 'monospace',
        fontSize:"18px"
    },
    error:{
        position:"absolute",
        top:"80%",
        left:"15%",
        width:"500px"
    },
    load:{
        position:"absolute",
        left: '65%', 
        top: '65%',
    }
}

export default function Login(){
    let history = useNavigate();
    
    const [loading,setloading]=useState(false);
    
    const [useremail,setemail]=useState("");
    function changeemail(e){
        setemail(e.target.value);
    }
    const [userpassword,setpassword]=useState("")
    function changepassword(e){
        setpassword(e.target.value);
    }
    const [error,seterror]=useState("");
    return(
        <div style={styles.back}>
            <Box style={styles.box}>
                <Avatar style={styles.haed} sx={{ bgcolor: purple[900],width: 65, height: 65 }} src="/broken-image.jpg"></Avatar>
                
                <TextField value={userpassword} onChange={changepassword} style={styles.password} id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
                <TextField value={useremail} onChange={changeemail} style={styles.email} label="E-mail" />
                <Button onClick={click} style={styles.but}  variant="contained" sx={{bgcolor:purple[900]}}>submit</Button>
                <Link to="/Myregister">
                    <Button style={styles.sign} sx={{color:purple[900]}} >sign up</Button>
                </Link>
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
        firebase.auth().signInWithEmailAndPassword(useremail,userpassword)
        .then(()=>{
           
            history('/MyHome');
            setloading(false);
        })
        .catch((error)=>{
            console.log(error.code)
            switch(error.code){
                case "auth/wrong-password":
                    seterror("密碼錯誤");
                    break;
                case "auth/user-not-found":
                    seterror("信箱不存在");
                    break;
                case "auth/invalid-email":
                    seterror("信箱格式錯誤");
                    break;
                default:
            }
            setloading(false);
        });
    }
}