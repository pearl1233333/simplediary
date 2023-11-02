import { useMemo, useState, useRef } from "react";
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

  const getDariyAnalysis = useMemo(() => {
    console.log("일기 분석 시작");

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return {goodCount, badCount, goodRatio};
  }, [data.length]);

  const {goodCount, badCount, goodRatio} = getDariyAnalysis;

  return (
    <div className="wrapper">
      <DiaryEditor onCreate={onCreate} />
      <div className="emotion_score">
        <div>전체일기 : {data.length}개</div>
        <div>기분 좋은 일기 개수 : {goodCount}개</div>
        <div>기분 나쁜 일기 개수 : {badCount}개</div>
        <div>기분 좋은 일기 비율 : {goodRatio}</div>
      </div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};

export default App;
