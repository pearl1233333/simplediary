import { useState, useRef } from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

// const dummyList = [
//   {
//     id: 1,
//     author: "최진주",
//     content: "허허",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 1,
//     author: "최진지",
//     content: "하핫~!!",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
// ];

const App = () => {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  // 데이터 추가
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([...data, newItem]);
  };

  const onRemove = (targetId) => {
    const newDailyList = data.filter((it) => it.id != targetId);
    setData(newDailyList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="wrapper">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};

export default App;
