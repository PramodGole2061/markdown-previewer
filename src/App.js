import { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
  document.body.style.backgroundColor = "#87b5b5";
  const defaultMarkdown = 
  `
  # Heading 1

  ## Heading 2

  [FreeCodeCamp](https://freecodecamp.org)

  \`inline code\`

  \`\`\`
  code block
  \`\`\`

  - List item

  > Blockquote

  ![Image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  **Bold text**
  `;

function App() {
  document.body.style.backgroundColor = "#52cdcdff";}
  const[markdown, setMarkdown] = useState(defaultMarkdown)
  return (
    <div className="App">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Previewer markdown={markdown}/>
    </div>
  );
}

export default App;
