import React from "react";
import DiaryItem from "./DiaryItem";

const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2 className="list__title">일기 리스트</h2>
      <p className="list__total">{diaryList.length}개의 일기가 있습니다.</p>
      <div className="list__item">
        {diaryList.map((it) => (
          <DiaryItem onRemove={onRemove} onEdit={onEdit} key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
