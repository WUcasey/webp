import React ,{useState}from "react";
import MyBar from "./MyBar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "../back/firebase";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import purple from '@material-ui/core/colors/purple';
import CircularProgress from '@mui/material/CircularProgress';
const styles={
    h:{
        marginTop:"25px",
        textAlign:"center"
    },
    topic:{
        width:"450px"
    },
    but:{
        marginLeft:"15px",
        marginTop:"10px"
    },
    load:{
        marginLeft:"15px",
        height:"25px",
        width:"25px",
        color:"white"
    }
}
export default function Change(){
    
    firebase.auth().onAuthStateChanged(user => { 
        if (user) { 
            const user = firebase.auth().currentUser;
            console.log(user)
        }
        else{
            console.log("no user")
        }
    })
    const user = firebase.auth().currentUser || {};
    const [nameload,setnameload]=useState(false);
    const [passwordload,setpasswordload]=useState(false);


    const [displayName,setdisplayName]=useState("");
    const [newpassword,setnewpassword]=useState("");
    const [oldpassword,setoldpassword]=useState("");
    function changename(){
        setnameload(true)
        user.updateProfile({
            displayName,
        })
        .then(()=>{
            setnameload(false)
            setdisplayName('')
        })
    }
    function changepassword(){
        setpasswordload(true)
        const credential = firebase.auth.EmailAuthProvider.credential(user.email,oldpassword)
        user.reauthenticateWithCredential(credential)
        .then(()=>{
            user.updatePassword(newpassword)
            .then(()=>{
                setpasswordload(false)
                setnewpassword("")
                setoldpassword("")
            })
        })
    }
    return(
        <div>
            <MyBar></MyBar>
            <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
            <Grid item xs>
            </Grid>
            <Grid item xs={6}>
                <Typography
                style={styles.h}
                noWrap
                variant="h5"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}>
                    會員資料
                </Typography>
                <Typography
                style={styles.h}
                noWrap
                variant="h6"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}>
                    會員名稱:{user.displayName}
                </Typography>
                <TextField   
                    value={displayName} 
                    style={styles.topic} 
                    id="outlined-basic" 
                    label="Content" 
                    variant="outlined" 
                    onChange={(e)=>setdisplayName(e.target.value)}/>

                <Button  
                 style={styles.but}  
                 onClick={changename}
                 variant="contained" 
                 sx={{bgcolor:purple[900]}}>submit{nameload && <CircularProgress style={styles.load}  
                 color="secondary" />}</Button>
                 
                <Typography
                    style={styles.h}
                    noWrap
                    variant="h5"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    >
                        會員密碼
                    </Typography>
                    <Typography
                    style={styles.h}
                    noWrap
                    variant="h6"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    >
                        目前密碼
                    </Typography>
                    <TextField  
                    onChange={(e)=>setoldpassword(e.target.value)}
                    value={oldpassword}
                    style={styles.topic} 
                    id="outlined-basic" 
                    label="Content" 
                    variant="outlined" />

                <Typography
                    style={styles.h}
                    noWrap
                    variant="h6"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    >
                        更新密碼
                    </Typography>
                    <TextField  
                    onChange={(e)=>setnewpassword(e.target.value)}
                    value={newpassword}
                    style={styles.topic} 
                    id="outlined-basic" 
                    label="Content" 
                    variant="outlined" />
                    <Button onClick={changepassword} style={styles.but}  variant="contained" sx={{bgcolor:purple[900]}}>submit{passwordload && <CircularProgress style={styles.load}  color="secondary" />}</Button>
                </Grid>
            <Grid item xs>
            </Grid>
        </Grid>
        </Box>

        </div>
    )
}