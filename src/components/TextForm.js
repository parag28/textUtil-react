import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnUpClick = ()=>{
        // setText("You have clicked button")
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleOnLowClick = ()=>{
        // setText("You have clicked button")
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        var text=document.getElementById("myBox")
        setText(event.target.value)
    }
    const toTitleCase = (event)=>{
        let words = text.split(' ');
        let newStr = words.map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ');
        setText(newStr);
    }


    const[text, setText] = useState('Enter Text here!!')

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} style={{backgtoundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnUpClick}>Convert to upperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleOnLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={toTitleCase}>Convert to TitleCase</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
