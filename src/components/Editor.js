import React from 'react'

export default function Editor(props) {
    const {markdown, setMarkdown} = props;
    const handleChange = (e) => {
        setMarkdown(e.target.value);
    }
  return (
    <div className="form-floating container mx-auto my-4" style={{backgroundColor: "#c5e4e4", padding: 0, margin: 0 }}>
        <div className='container-fluid text-center' style={{backgroundColor: "#2ef7f7ff"}}>
            <label className='fs-3' htmlFor="editor" >Editor</label>
        </div>
        
        <textarea className="form-control" id="editor" value={markdown} onChange={handleChange} placeholder="Leave a comment here" style={{height: "200px",backgroundColor: "#c5e4e4"}}></textarea>
        
    </div>
  )
}
