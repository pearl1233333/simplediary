import React, { useEffect, useRef, useState } from "react";

const DiaryEditor = React.memo(({ onCreate }) => {

  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  // 데이터 입력
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // 저장버튼
  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      alert("제목을 1자 이상 입력해주세요.");
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      alert("내용을 5자 이상 입력해주세요.");
      return;
    }
    // console.log(state);
    onCreate(state.author, state.content, state.emotion);
    alert("저장 되었습니다.");
    setState({
      author: "",
      content: "",
      emotion: 1
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div className="title">
        <div className="lbl">제목</div>
        <input
          placeholder="제목을 1자 이상 입력해주세요."
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div className="content">
        <div className="lbl">내용</div>
        <textarea
          placeholder="내용을 5자 이상 입력해주세요."
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div className="selectBox">
        <div className="lbl">내 감정 점수</div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button className="btn_sumit" onClick={handleSubmit}>
          저장
        </button>
      </div>
    </div>
  );
});
export default React.memo(DiaryEditor);
