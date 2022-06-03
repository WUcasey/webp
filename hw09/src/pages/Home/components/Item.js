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
    <div className="item">
      <input style={{width:"20px"}}type="checkbox"></input>
      <div>  
        <p>{note}</p>
        {/*模板語法 串起來*/}
        {/*<p>{`${date} ${time}`}</p>*/}
      </div>
      <button onClick={deletItem} className="remove">
        刪除
      </button>
    </div>
  );
};
//如果return html 會被視為是 js的function 如果不是被視為react的function
export default Item;
