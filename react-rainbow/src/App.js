import './App.css';

import React, { useState } from 'react'
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';
// import './App.css';

function App() {
  let [colors, setColors] = useState ([
                'violet', 'blue', 
                'lightblue', 'green', 
                'greenyellow', 'yellow', 
                'orange', 'red'
              ])

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
     // <ColorBlock key={i} color={color} />
    )
  })

  // jsx section
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }


  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  )

  }

export default App;
