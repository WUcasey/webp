import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react';
export default function AddNew(){
    return(
        <Link to="/Mynew">
            <IconButton>
            <AddCircleIcon></AddCircleIcon>
        </IconButton>
        </Link>
    )
}