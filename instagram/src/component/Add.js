import React  from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
const styles={
    add:{
      position: "fixed",
      top: "100px",
      right:"20px",
    },
    input:{
        position:"relative",
        top:"40px",
        borderRadius:"10%"

    }
}

export default function Addfile(){
    return(
        <div style={styles.add}>
            <Link to="/Addfile">
            <IconButton>
                <Fab color="primary" aria-label="add" style={styles.add}>
                    <AddIcon />
                </Fab>
            </IconButton>
            </Link>
        </div>
    )

}