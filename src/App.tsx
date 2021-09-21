import React from 'react';
import './App.css';

const names = ["Sanya", "Oleg", "Victor", "Yulia", "Ksenia", "Irina"]
const liElements = names.map((e, index) => <li key={index+1}>{e}</li>)

function App() {
    return (
        <div>
            {liElements}
          /learn react/i
        </div>
    );
}

export default App;
