const Item = ({ money, time }) => {
  return (
    <div className="item">
      <div>
        <p>{money}</p>
        <p>{time}</p>
      </div>
      <button className="remove">remove</button>
    </div>
  );
};

export default Item;
