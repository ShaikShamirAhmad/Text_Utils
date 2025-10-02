import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase!', 'success');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerrCase!', 'success');
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text has been cleared!', 'success');
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text has been copied!', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",}}
            id="myBox"
            rows="10"
          ></textarea>
        </div>

        <div className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase{" "}
        </div>

        <div className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase{" "}
        </div>

        <div className="btn btn-primary mx-2" onClick={handleClearClick}>
          {" "}
          Clear Text{" "}
        </div>

        <div className="btn btn-primary mx-2" onClick={handleCopy}>
          {" "}
          Copy Text{" "}
        </div>
      </div>

      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h2>Your Text Summary :</h2>
        <p>
          {text.trim().split(" ").length} Words and {text.length} Characters
        </p>
        <p>Read Time {0.008 * text.split(" ").length}</p>
        <h2>Preview :</h2>
        <p>{text.length>0? text:'Enter something in the Text box above to preview here;'}</p>
      </div>
    </>
  );
}
 