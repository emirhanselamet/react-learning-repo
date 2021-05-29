import React from 'react';
import ReactDOM from 'react-dom';


const Model = (Props) => {
    return ReactDOM.createPortal(
        <div className='ui dimmer show modals visible active'>
            <div className='ui raised very padded text container segment'>
                <h1>Ben bir modelim</h1>
            </div>
        </div>,
        document.querySelector('#model')
    )
}
export default Model;