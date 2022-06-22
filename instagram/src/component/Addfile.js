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
        marginTop:"15px",
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
export default function MyFile(){
    let history = useNavigate();
    const [topic,settopic]=useState("");
    function changetopic(e){
        settopic(e.target.value)
    }
    const [content,setcontent]=useState("");
    function changecontent(e){
        setcontent(e.target.value)
    }
    const [file,setfile]=useState(null);
    const prefile=file?
        URL.createObjectURL(file)
        :"https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-upload-cloud-vector-icon-png-image_355902.jpg"
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
                    文章主題:
                </Typography>
                <TextField value={topic} onChange={changetopic} style={styles.topic} id="outlined-basic" label="Content" variant="outlined" />
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
                    文章內容:
                </Typography>
                <TextField value={content} onChange={changecontent} style={styles.topic} id="outlined-basic" label="Content" variant="outlined" />
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
                        上傳圖片:
                    </Typography>
                    <Button component="label" style={styles.but}  variant="contained" sx={{bgcolor:purple[900]}}>
                        upload
                        <input  hidden style={styles.input} onChange={(e)=>setfile(e.target.files[0])} type={"file"}></input>
                    </Button>
                <div style={styles.Myimg}>
                    <Box
                        component="img"
                        sx={{
                        height: 350,
                        width: 350,
                        maxHeight: { xs: 600, md: 350 },
                        maxWidth: { xs: 600, md: 350 },
                        }}
                        alt="Unknow"
                        src={prefile}
                    />
                </div>
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
       const document = firebase.firestore().collection("posts").doc();
       //用ref傳入照片位置
       const fileRef = firebase.storage().ref("posts_image/" + document.id);
       //拿 照片ID 當照片名稱

       const metadata={
        //限定照片格式
         contentType:file.type
       };
       //判斷使用者登入的狀況
        firebase.auth().onAuthStateChanged(user => { 
            if (user) { 
              //console.log(firebase.auth().currentUser.displayName)
              fileRef.put(file,metadata)
                 .then(()=>{
                      fileRef.getDownloadURL()
                      .then((imageUrl)=>{
                          document
                          .set({
                             topic,
                              content,
                              time:firebase.firestore.Timestamp.now(),
                              author:{
                                  displayName:firebase.auth().currentUser.displayName || '',
                                  photo:firebase.auth().currentUser.photoURL || '',
                                  id:firebase.auth().currentUser.uid,
                                  email:firebase.auth().currentUser.email
                              },
                              imageUrl,
                  
                         })
                         .then(()=>{
                          setload(false)
                              history('/Myprofile');
                         });
                         
                      });
                 });

            } 
            else { 
                console.log("用戶已註銷。")
              // 用戶已註銷。
            } 
        })
        
    }
}