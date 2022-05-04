import Item from "./item";
const List = ({ listData, deleteData }) => {
  console.log("listData", listData);
  return (
    <div className="list">
      {listData.map((item) => {
        const { money, time, id } = item;
        return (
            <Item
                key={id}
                id = {id}
                money={money}
                time={time}
                deleteData={deleteData}
            />
        );
      })}
    </div>
  );
};

export default List;
