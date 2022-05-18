import React from "react";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import Grid from '@mui/material/Grid';
import purple from '@material-ui/core/colors/purple'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
const back = purple[100]
const box = {
    width: 500,
    height: 400, 
    marginTop:10,
    borderRadius: 20,
    backgroundColor: back
}
const LOG ={
    color: "white",
    position:"fixed",
    left:"320px",
    top:"150px",
    letterSpacing:"3px",
    fontSize:"2cm"
}
const but = {
    width:"150px",
    letterSpacing:"3px",
    position:"fixed",
    left:"320px",
    top:"300px",
}
const Login = () =>{
    return(
        <Fragment>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Card sx={box} variant="h5" component="span">
                    <h1 style={LOG}>LOG IN</h1>
                    <Button style={but} variant="contained" color="secondary">commit</Button>
                </Card>
                <Card sx={box} variant="h5" component="span">
                    <TextField sx={{width:350,marginLeft:10,marginTop:10}} id="outlined-password-input" label="User Nmae" type="search" autoComplete="current-password"/>
                    <TextField sx={{width:350,marginLeft:10,marginTop:5}} id="outlined-password-input" label="E-mail" type="search" autoComplete="current-password"/>
                    <TextField sx={{width:350,marginLeft:10,marginTop:5}} id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
                    
                </Card>
            </Grid>
            
        </Fragment>
       
    );
}
export default Login