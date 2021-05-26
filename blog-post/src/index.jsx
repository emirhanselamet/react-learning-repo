import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return(
        <div className='ui comments'>
        <div className='comment'>
            <a href="/" className='avatar'>
                <img src="" alt="profilepicture" />
            </a>
            <div className="content">
                <a href="/" className='author'>
                    Sarah
                </a>
                <div className="metadata">
                    <span className="date">
                        Today At 5:00PM
                    </span>
                </div>
                <div className="text">
                    Very good react 
                </div>
            </div>
        </div>
    </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)