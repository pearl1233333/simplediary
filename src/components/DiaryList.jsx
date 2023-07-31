import React from "react";

const DiaryList = ({ diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <p>{diaryList.length}개의 일기가 있습니다.</p>
      <div className="list">
        {diaryList.map((it) => (
          <div className="list_inner">
            <div className="list_author">작성자 : {it.author}</div>
            <div className="list_content">{it.content}</div>
            <div className="list_emotion">{it.emotion}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
