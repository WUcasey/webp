/*
    map()
    1.會透過函式把回傳值組合成 一個新的陣列
    2.不改變原來的陣列 
    forEach()會改變原來的陣列 且不會回傳任何東西 所以寫在return裡的東西不會有作用
    3.回傳長度等於原始陣列長度
    4.不回傳就是undefined
    example
        let A = [900, 8500, 5500, 2000];
        let B = A.map(function (vaule ,index(可省略),array(可省略)){
            return value*2
        });
        or
        let B = A.map(item => item*2);
        B =[1800, 17000, 11000, 4000];*/

// import list's child
import Item from "./Item";
const List = ({ listData, deletData }) => {
  console.log(listData);
  //listData是新增item deletData是刪除item
  //listData = [item0,item1,item2.....]
  return (
    <div className="list">
      {
        //每做一次map就return一次
        listData.map((item) => {
          const { note, id } = item;
          //解構的方式取數值 但也可以用item.note的方式 但如果這樣取數值時 當沒有數值時電腦會出錯
          //所以解構的方式比較容易可以設預設值 const { note = "預設值", date, time } = item;
          return (
            <Item
              key={id}
              id={id}
              note={note}
              deletData={deletData}
            />
          );
          //每個item都有deletData 所以要下放deletData的數值
          //Item 左邊的note是在prop時要取值的東西
          //Item 右邊的note是單純叫note
        })
        // listData.map((item,index) => <Item key={index}/>)
        //因為key要是獨一無二的，但不能用index雖然console log不會顯示錯誤
        //但會造成系統不夠優化 當使用index時如過刪除或新增index的數值會有所改變
        //所以會造成系統必須重新認識新的key
      }
    </div>
  );
};
//如果return html 會被視為是 js的function 如果不是被視為react的function
export default List;
