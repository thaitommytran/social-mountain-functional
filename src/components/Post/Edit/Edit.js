import React, { useState } from "react";

import "./Edit.css";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *POST* COMPONENT

const Edit = (props) => {
  const [text, setText] = useState(props.text);

  const updateText = (value) => {
    setText(value);
  };

  const updatePost = () => {
    props.updatePostFn(props.id, props.text);
    props.hideEdit();
  };

  return (
    <section className="Edit__parent">
      {/* This is the input field where you can edit the text */}
      <textarea
        className="Edit__textarea"
        value={text}
        onChange={(e) => updateText(e.target.value)}
      ></textarea>

      <div className="Edit__controls">
        {/* This saves your changes made */}
        <button
          id="Edit__controls-update"
          className="Edit__control-btn"
          onClick={updatePost}
        >
          Update
        </button>

        {/* This cancels the edit mode and does not save changes. Remember the "hideEdit" method was passed down through props */}
        <button
          id="Edit__controsl-cancel"
          className="Edit__control-btn"
          onClick={props.hideEdit}
        >
          Cancel
        </button>
      </div>
    </section>
  );
};

export default Edit;
