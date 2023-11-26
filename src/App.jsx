import { useCallback, useMemo, useState, useRef } from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

const App = () => {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  // 데이터 추가
  const onCreate = useCallback(
    (author, content, emotion) => {
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
    },
    []
  );

  const onRemove = useCallback((targetId) => {
    setData(data => data.filter((it) => it.id != targetId));
  },[]);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  },[]);

  const getDariyAnalysis = useMemo(() => {
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
