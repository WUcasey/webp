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
                    ????????????:
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
                    ????????????:
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
                        ????????????:
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
        //??????firestore??????id (???ID??????????????????) ??????storage???posts_image??????????????? ?????????????????????????????? ?????????ID
        //????????????????????????????????????????????????????????????????????????
        //??????????????????????????? firestore ??????
       const document = firebase.firestore().collection("posts").doc();
       //???ref??????????????????
       const fileRef = firebase.storage().ref("posts_image/" + document.id);
       //??? ??????ID ???????????????

       const metadata={
        //??????????????????
         contentType:file.type
       };
       //??????????????????????????????
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
                console.log("??????????????????")
              // ??????????????????
            } 
        })
        
    }
}