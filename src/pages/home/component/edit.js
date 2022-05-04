import { useState } from "react";
const Edit = ({ add }) => {
  const [money, setmoney] = useState("");
  const [time, setTime] = useState("");
  function handleTimeChange(event) {
    setTime(event.target.value);
  }
  function addItem() {
    add(function (prev) {
      return [...prev, { money, time }];
    });
  }
  function handleChange(event) {
    setmoney(event.target.value);
  }

  return (
    <div>
      <h1>松松理财</h1>
      <p>消费金额:</p>
      <input type="text" value={money} onChange={handleChange} />
      <p>时间:</p>
      <input type="datetime-local" value={time} onChange={handleTimeChange} />
      <button className="add" onClick={addItem}>
        新增
      </button>
    </div>
  );
};

export default Edit;
