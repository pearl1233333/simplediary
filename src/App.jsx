import React, { useCallback, useMemo, useRef, useReducer } from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE': {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date
      }
      return [newItem, ...state];
    }
    case 'REMOVE': {
      return state.filter((it) => it.id !== action.targetId);
    }
    case 'EDIT': {
      return state.map((it) =>
        it.id === action.targetId ?
          { ...it, content: action.newContent } : it
      )
    }
    default:
    return state;
  }
}

export const DiaryStateContext = React.createContext();

export const DiaryDispatchContext = React.createContext();

const App = () => {
  
  const [data, dispatch] = useReducer(reducer,[]);

  const dataId = useRef(0);

  // 데이터 추가
  const onCreate = useCallback(
    (author, content, emotion) => {
      dispatch({
        type: "CREATE",
        data: { author, content, emotion, id: dataId.current }
      });
      dataId.current += 1;
    },
    []
  );

  const onRemove = useCallback((targetId) => {
    dispatch({
      type: "REMOVE",
      targetId
    });
  },[]);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({
      type: "EDIT",
      targetId,
      newContent
    });
  },[]);

  const menoizeDispatches = useMemo(() => {
    return { onCreate, onRemove, onEdit }
  }, []);

  const getDariyAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = data.length > 0 ?
      (goodCount / data.length * 100).toFixed(1) : '-';
    return {goodCount, badCount, goodRatio};
  }, [data.length]);

  const {goodCount, badCount, goodRatio} = getDariyAnalysis;

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={menoizeDispatches}>
        <div className="wrapper">
          <DiaryEditor />
          <div className="emotion_score">
            <div>전체일기 : {data.length}개</div>
            <div>기분 좋은 일기 개수 : {goodCount}개</div>
            <div>기분 나쁜 일기 개수 : {badCount}개</div>
            <div>기분 좋은 일기 비율 : {goodRatio}%</div>
          </div>
          <DiaryList />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    
  );
};

export default App;
