const Item = ({ id, money, time, deleteData}) => {
    function deleteItem() { 
        deleteData(function (prev) {
                return prev.filter(item => item.id !==id) 
            })
    }
  return (
    <div className="item">
      <div>
        <p>{money}</p>
        <p>{time}</p>
      </div>
      <button className="remove" onClick = {deleteItem}>remove</button>
    </div>
  );
};

export default Item;
