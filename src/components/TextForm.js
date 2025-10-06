import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerrCase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" ").trim());
    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          
          Copy Text
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary :</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
          Words and {text.length} Characters
        </p>
        <p>Read Time :{0.008 * text.split(" ").length} </p>
        <h2>Preview :</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview ! :"}
        </p>
      </div>
    </>
  );
}
