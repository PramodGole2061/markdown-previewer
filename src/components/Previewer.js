import React from 'react'
import ReactMarkdown from 'react-markdown';

export default function Previewer(props) {
  return (
    <div className="form-floating container mx-auto my-4" style={{backgroundColor: "#c5e4e4", padding: 0, margin: 0 }}>
        <div className='container-fluid text-center' style={{width: "100%",backgroundColor: "#2ef7f7ff"}}>
            <label className='fs-3' for="floatingTextarea2" >Preview</label>
        </div>
        <div className='overflow-auto' id="preview" style={{height: "200px",backgroundColor: "#c5e4e4"}}>
            <ReactMarkdown>
                {props.markdown}
            </ReactMarkdown>
        </div>        
    </div>
  )
}
