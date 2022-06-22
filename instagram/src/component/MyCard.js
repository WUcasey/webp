import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import { useState } from 'react';
import Comment from './Comment';
import { Box } from '@mui/system';
import firebase from "../back/firebase";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export default function MyCard(props) {
  const [count,setcount]=useState(0);
  const [heart,setheart]=useState(true);
  
  const increase = ()=>{
    if(heart){
      setheart(false)
      //已經被按下去了 不能在按了 所以是false
      setcount(count+1)
      
    }
  }
  const decrease = ()=>{
    //要先increase在做desrease 所以在increase時heart就變成false
    if(!heart){
      setheart(true)
      //可以在按 改成true
      setcount(count-1)
    }
  }
  
  //console.log(props.time.toDate().toLocaleDateString())
  return (
    
    <Card sx={{ MaxWidth:380,marginBottom:"50px"}}>
      <CardHeader
        avatar={
          <Avatar alt='casey photo' src= 'https://images.unsplash.com/photo-1549388604-817d15aa0110' sx={{ width: 56, height: 56 }}>
          </Avatar>
        }
        title={props.user}
        subheader={props.time.toDate().toLocaleDateString()}
      />
      <CardMedia
        component="img"
        height="400"
        src={props.image}
        alt="DOG"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          <h3 style={{margin:"0px"}}>{props.topic}</h3>
          <h5 style={{margin:"0px"}}>{props.content}</h5>
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{paddingLeft:2.2,paddingBottom:2.1}}>
        <div >
          <IconButton aria-label="add to favorites"
            onClick={heart? increase : decrease}>
              {/*onClick按下去時 如果是true做increase false做decrease*/}
            <FavoriteIcon 
            style={{color:heart ? 'grey' : '#930093'}}
            fontSize='medium' />
          </IconButton>
        </div>
        <h3 style={{color:'grey'}} >{count}</h3>
        <IconButton aria-label="chat">
          <ChatIcon fontSize='medium' />
        </IconButton>
      </CardActions>
      <Box style={{paddingLeft:"30px",paddingBottom:"20px"}} sx={{ MaxWidth:380}}>
        <Comment />
      </Box>
    </Card>
  );
}
