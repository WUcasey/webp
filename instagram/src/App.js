
import { Routes, Route} from "react-router-dom";
import Login from './component/Login';
import Myregister from './component/Myregister';
import Myprofile from "./component/Myprofile";
import MyHome from './component/MyHome';
import MyFile from './component/Addfile';
import Change from "./component/Change";
import Mynew from "./component/Mynew";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} exact></Route>
        <Route path="/Myregister" element={<Myregister />} exact></Route>
        <Route path="/MyHome" element={<MyHome />} exact></Route>
        <Route path="/Myprofile" element={< Myprofile />} exact></Route>
        <Route path="/Addfile" element={<MyFile />} exact></Route>
        <Route path="/Mynew" element={<Mynew />} exact></Route>
        <Route path="/Change" element={<Change />} exact></Route>
      </Routes>
  );
}
export default App;
