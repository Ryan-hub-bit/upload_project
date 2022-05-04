import Item from "./item";
const List = ({ listData }) => {
  console.log("listData", listData);
  return (
    <div className="list">
      {listData.map((item) => {
        const { money, time } = item;
        return <Item money={money} time={time} />;
      })}
    </div>
  );
};

export default List;
