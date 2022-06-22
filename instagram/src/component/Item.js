import * as React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const styles={
  but:{
    position:"absolute",
    left:"45%",
    margin:"15px"
  },
  comment:{
    position:"relative",
    left:"10%",
  }

}
//item 是最小的module
//list is item father
const Item = ({ id, note,deletData }) => {
  //note data time 有點像參數 被input到item的module裡面
  function deletItem() {
    deletData(function (prev) {
      //filter過濾掉當前的id 且不改變順序
      return prev.filter((item) => item.id !== id);
      //當下的id不等於之前的id 就放入array裡
    });
  }
  return (
    <div>
      <AccountCircle />
      <IconButton style={styles.but} onClick={deletItem}>
        <HighlightOffIcon/>
      </IconButton>
      <div style={styles.comment}>
        <Typography variant="body1" color="text.secondary">
          {note}
        </Typography>
      </div>
      
      
      {/*模板語法 串起來*/}
      {/*<p>{`${date} ${time}`}</p>*/}
      

    </div>
  );
};
//如果return html 會被視為是 js的function 如果不是被視為react的function
export default Item;
