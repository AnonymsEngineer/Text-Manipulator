import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='light'?'white':'rgb(65,65,65)',
        borderRadius: '20px'
    }
  return (
    <div className="accordion accordion-flush container" id="accordionFlushExample" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>About Us</h1>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Analyze your Text
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"  style={myStyle}>Text Manipulator gives you a way to analyze and manipulate your text quickly and efficiently. Be it word count, character count or playing with text.</div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Free to Use
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>Text Manipulator is a free tool that provides instant character and word count statistics for a given text. thus it is suitable for writing text with word/ character limit.</div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Browser Compatible
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>It works with any web browser efficiently such as Chrome, Edge, Firefox, Safari, Opera. It suit to count wors? characters in a tweet, blog, book, essay, pdf document etc.</div>
            </div>
        </div>
    </div>
  )
}
