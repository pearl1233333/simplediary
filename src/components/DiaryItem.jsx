const DiaryItem = ({ author, content, created_date, emotion, id }) => {
  return (
    <div className="list_inner">
      <div className="info">
        <span className="list_author">작성자 : {author}</span>
        <span className="list_emotion">감정점수 : {emotion}</span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="list_content">{content}</div>
    </div>
  );
};

export default DiaryItem;
