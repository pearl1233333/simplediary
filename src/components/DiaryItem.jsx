const DiaryItem = ({
  onDelete,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  return (
    <div className="item__inner">
      <div className="item__top">
        <p className="item__num">{id + 1}번째 일기</p>
        <p className="item__date">{new Date(created_date).toLocaleString()}</p>
      </div>
      <div className="item__bottom">
        <p className="item__author">제목 : {author}</p>
        <p className="item__content">{content}</p>
        <p className="item__emotion">감정 점수 : {emotion}</p>
      </div>
      <button
        className="btn_delete"
        onClick={() => {
          if (window.confirm(`${id + 1}번째 일기를 삭제하시겠습니까?`)) {
            onDelete(id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default DiaryItem;
