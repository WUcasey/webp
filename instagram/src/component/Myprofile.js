import * as React from 'react';
import { useEffect,useState } from 'react';
import MyCard from './MyCard';
import MyBar from "./MyBar";
import Info from './Info';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Addfile from './Add';
import firebase from "../back/firebase";
import 'firebase/compat/firestore'
import Changeinfo from './Changeinfo';

const styles={
  inbox:{
    position:"absolute",
    left:"20%",
    top:"70%",
    
  }
}
export default function Myprofile() {
  const [posts,setposts] = useState([]);
  const [name,setname] = useState("");
  firebase.auth().onAuthStateChanged(user => { 
    if (user) { 
        const user = firebase.auth().currentUser;
        setname(user.displayName);
        console.log(name)
    }
    else{
        console.log("no user")
    }
  })
  
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
  
  return (
    
    <div >
        <MyBar />
        <Addfile/>
        <Changeinfo />
        <Info name={ name ||"userName"}/>
        <Box style={styles.inbox} sx={{ width: 800}}>
          <ImageList variant="masonry" cols={2} gap={18}>
            {posts.map((post) => (
              <ImageListItem key={post.imageUrl}>
                <MyCard user={ name ||"userName"} time={post.time} topic={post.topic} content={post.content} image={post.imageUrl} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
    </div>
    
  );
}
