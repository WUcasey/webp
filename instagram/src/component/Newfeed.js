import React ,{useEffect,useState}from "react";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import firebase from "../back/firebase";
import 'firebase/compat/firestore'
import DialogActions from '@mui/material/DialogActions';
import StepLabel from '@mui/material/StepLabel';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Newfeed(props){
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [New,setnew] = useState([]);
    useEffect(() => {
    firebase.firestore().collection("News").get()
    .then((collectionSnapshot)=>{
      //collectionSnapshot = posts array
      const data = collectionSnapshot.docs.map(docSnapshot =>{
        return docSnapshot.data();
        //拿到每筆資料
      })
       setnew(data) 
        })
    }, []);
    console.log(New)
    return(
        <div>
            <IconButton onClick={handleClickOpen}>
                <div>
                    <Avatar 
                        sx={{ width: 70, height: 70 }}
                        alt="casey" 
                        src="https://images.unsplash.com/photo-1549388604-817d15aa0110" />
                    <Typography
                        style={{margin:"10px"}}
                        noWrap
                        variant="body2"
                        component="a"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        {props.name}
                    </Typography>
                </div>
            </IconButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >   <Box sx={{ width: 350, height: 300}}>
                    {New.map((item)=>(
                        <div>
                            <DialogTitle>{item.content}</DialogTitle>
                            <StepLabel><hr/></StepLabel>
                        </div>
                    ))}
                    
                </Box>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}