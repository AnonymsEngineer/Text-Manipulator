import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleUpChange = () => {
        let UpText = text.toUpperCase();
        setText(UpText);
        props.showAlert("Text Converted to Uppercase", "success");
    }

    const handleLoChange = () => {
        let LoText = text.toLowerCase();
        setText(LoText);
        props.showAlert("Text Converted to Lowercase", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }

    const handleClear = () => {
        setText('');
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard", "success");
    }

  return (
    <>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'primary'} mx-1 my-1`} onClick={handleUpChange}>Convert to Uppercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'primary'} mx-1 my-1`} onClick={handleLoChange}>Convert to Lowercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'primary'} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'primary'} mx-1 my-1`} onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'primary'} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
    </div>
    <div className={`container my-2 text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Your Text Statistics</h2>
        <p>{text.trim().split(/\s+/).filter(e => e !== "").length} Words and {text.length} Characters</p>
        <p>{(0.008 * text.trim().split(/\s+/).filter(e => e !== "").length).toFixed(3)} Minutes Read</p>
    </div>
    </>
  )
}
