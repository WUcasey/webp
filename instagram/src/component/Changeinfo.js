import React from "react";
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import ColorizeIcon from '@mui/icons-material/Colorize';
export default  function Changeinfo(){
    const styles={
        fix:{
          position: "fixed",
          top: "160px",
          right:"12px",
        }
    }
    return(
        <div>
            <Link to="/Change">
            <IconButton style={styles.fix}>
                <Fab color="primary" aria-label="fix" >
                    <ColorizeIcon></ColorizeIcon>
                </Fab>
            </IconButton>
            </Link>
        </div>
    )
}