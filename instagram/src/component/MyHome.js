import React from "react";
import MyBar from './MyBar'
import MyCard from "./MyCard";
import Newfeed from "./Newfeed";
import { useEffect,useState } from 'react';
import AddNew from "./AddNew";
import firebase from "../back/firebase";
import 'firebase/compat/firestore'
import Box from '@mui/material/Box';
const styles={
    inbox:{
      position:"absolute",
      left:"27%",
      top:"35%",
    },
    new:{
        position:"absolute",
        left:"3%",
        top:"13%"
    }
}
export default function MyHome(){
  const [name,setname]= useState("")
  firebase.auth().onAuthStateChanged(user => { 
    if (user) { 
        const user = firebase.auth().currentUser;
        setname(user.displayName)
    }
    else{
        console.log("no user")
    }
  })
  const user = firebase.auth().currentUser;
    const [posts,setposts] = useState([]);
    useEffect(() => {
    firebase.firestore().collection("posts").get()
    .then((collectionSnapshot)=>{
      //collectionSnapshot = posts array
      const data = collectionSnapshot.docs.map(docSnapshot =>{
        return docSnapshot.data();
        //拿到每筆資料
      })
       setposts(data) 
    })
  }, []);
    return(
        <div>
            <MyBar />
            <div style={styles.new}>
              <Newfeed name={name || "userName"}></Newfeed>
              <AddNew/>
            </div>
                <Box style={styles.inbox} sx={{ width: 620}}>
                    {posts.map((post)=>(
                        <MyCard user={name || "userName"} time={post.time} topic={post.topic} content={post.content} image={post.imageUrl} />
                    ))}
                </Box>
        </div>

    )
}