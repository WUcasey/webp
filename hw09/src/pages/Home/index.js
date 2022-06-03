import { useState, useEffect } from "react";
import Edit from "./components/Edit";
//只要寫一個Eidt就可以引入到很多地方 用import的方式引用
//把Edit元件化
import List from "./components/List";
//可以引入css 跟一般寫程式一樣
import "./index.css";

//另一種css的寫法
/*const app ={
    color : 'red'
}*/

/*    Home
      /  \
    Edit List
            \
            Item  
*/

//root
const Home = () => {
  const [data, setData] = useState([]);
  //useState(要加[]因為是list) 只要useState裡面東西(data ,setData)有改變react畫面就會重新渲染
  /*useEffect(() => {
      //useEffect是一個function 在useState或useEffect變數有變化時 會做執行
    //外面的function是在每一次執行時 都會做的事
    window.alert('sucessful')
    return () =>{
        //每次結束後要開始下一次渲染時 會執行return裡面的function
    }
  }, [data]);*/
  //跟data做綁定 如果data改變就會執行function
  //如果useEffect有用到的變數 要加到dependent裡面 EX :data
  //如果沒有dependent每次渲染都會做一次 小心無限迴圈
  return (
    <div className="app" /*style={app}*/>
      {/*先在Edit裡面做input 把setdata改變 影響到data */}
      <Edit add={setData} /*把setData傳入到Edit裡面 */ />
      <List listData={data} deletData={setData} />
      {/*listData 只要把list做output 但add和deletData會改變list裡的內容 */}
    </div>
  );
};
//如果return html 會被視為是 js的function 如果不是被視為react的function
export default Home;
