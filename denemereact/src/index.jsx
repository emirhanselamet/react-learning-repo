import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {  
    const buttonText = {text:'submit'}
    return(
        <div>
            <label htmlFor="name" className="label">enter email</label>
            <input type="text" id="name" />
            <button style={{backgroundColor:'red',color:'white'}}>
                {buttonText.text}
                
            </button>

        </div>
        
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)