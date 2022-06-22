import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { v4 } from "uuid";
const Edit = ({ add }) => {
  //每個元件(input)綁定自己的狀態
  const [note, setNote] = useState(""); //剛開始是空字串
  //透過note影響vaule onChange影響setNote
  // value={note(輸入進去的數值)}
  function noteChange(e) {
    //notchange function在onChange裡使用
    //雙向綁定 沒有這個輸入的數執會存在note裡面 但不顯示在螢幕上
    setNote(e.target.value);
  }
  function addItem() {
    //add 可以當成function做使用
    add(function (preData) {
      return [
        {
          /*id 是給map獨一無二的key */
          id: v4(),
          note
        },
        ...preData,
      ]; //拿到上一個數值(preData) 把現在的數值塞進去 變成新的陣列
    });
  }
  return (
    <div>
      <TextField
        sx={{width:"250px"}}
        id="input-with-icon-textfield"
        value={note}
        onChange={noteChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle  />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <IconButton aria-label="chat"
        onClick={addItem}>
        <ArrowCircleUpRoundedIcon />
      </IconButton>
    </div>
  );
  
};
//如果return html 會被視為是 js的function 如果不是被視為react的function
export default Edit;
