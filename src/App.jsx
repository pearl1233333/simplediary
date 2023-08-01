import React from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

const dummyList = [
  {
    id: 1,
    author: "최진주",
    content: "허허",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 1,
    author: "최진지",
    content: "하핫~!!",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 1,
    author: "아효효",
    content: "허허 ~~~",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 1,
    author: "흐으음",
    content: "졸려요~~",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

const App = () => {
  return (
    <div className="wrapper">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};

export default App;
