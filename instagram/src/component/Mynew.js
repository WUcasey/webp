import React ,{useState}from "react";
import MyBar from "./MyBar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import purple from '@material-ui/core/colors/purple';
import firebase from "../back/firebase";
import 'firebase/compat/storage'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useNavigate} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
const styles={
    topic:{
        width:"500px"
    },
    h:{
        marginTop:"25px",
        textAlign:"center"
    },
    input:{
        marginBottom:"25px",
    },
    but:{
        position:"absolute",
        top:"35%",
        left:"58%"
    },
    Myimg:{
        marginTop:"15px"
    },
    load:{
        marginLeft:"15px",
        height:"25px",
        width:"25px",
        color:"white"
    }
    
}
export default function Mynew(){
    let history = useNavigate();
    const [content,setcontent]=useState("");
    function changecontent(e){
        setcontent(e.target.value)
    }
    const [load,setload]=useState(false);
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
                    動態消息:
                </Typography>
                <TextField value={content} onChange={changecontent} style={styles.topic} id="outlined-basic" label="Content" variant="outlined" />
                <Button onClick={uploadfile}  style={styles.but}  variant="contained" sx={{bgcolor:purple[900]}}>submit{load && <CircularProgress style={styles.load}  color="secondary" />}</Button>
                
                </Grid>
            <Grid item xs>
            </Grid>
        </Grid>
        </Box>
        </div>
    )
    function uploadfile(){
        setload(true)
        //先從firestore取得id (用ID可以找到照片) 存到storage的posts_image資料夾裡面 新增一個放照片的位置 名稱用ID
        //然後把照片的網址下載到剛剛建立好放照片位置的地方
        //把下載好的網址存到 firestore 裡面
       const document = firebase.firestore().collection("News").doc();
       //判斷使用者登入的狀況
        firebase.auth().onAuthStateChanged(user => { 
            if (user) { 
              //console.log(firebase.auth().currentUser.displayName)
              document
              .set({
                  content,
                  author:{
                      displayName:firebase.auth().currentUser.displayName || '',
                      photo:firebase.auth().currentUser.photoURL || '',
                      id:firebase.auth().currentUser.uid,
                      email:firebase.auth().currentUser.email
                  }
             })
             .then(()=>{
              setload(false)
                  history('/MyHome');
             });

            } 
            else { 
                console.log("用戶已註銷。")
              // 用戶已註銷。
            } 
        })
        
    }
    
}