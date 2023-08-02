const DiaryItem = ({ author, content, created_date, emotion, id }) => {
  return (
    <div className="item__inner">
      <p className="item__author">작성자 : {author}</p>
      <p className="item__emotion">감정점수 : {emotion}</p>
      <p className="item__date">{new Date(created_date).toLocaleString()}</p>
      <p className="item__content">{content}</p>
    </div>
  );
};

export default DiaryItem;
