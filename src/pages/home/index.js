import { useState } from "react";
import Edit from "./component/edit";
import List from "./component/list";
import "./index.css";
const Home = () => {
  const [data, addData] = useState([]);
  return (
    <div className="app">
      <Edit add={addData} />
      <List listData={data} />
    </div>
  );
};
export default Home;
