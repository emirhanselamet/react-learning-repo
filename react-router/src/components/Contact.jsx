import React from 'react';
import {Link} from 'react-router-dom'
const Contact = (props) => {
    // setTimeout(() => {
    //     //otomtaik bir sayfaya yönlendirme
    //     props.history.push('/about')
    // },2000)
    return(
    <div>
            <div className='ui raised very padded text container segment'
        style={{marginTop:'80px'}}>
            <Link to='/alex' className='ui header'>Alex</Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor rerum quas sint voluptatibus at voluptatum. Laborum reiciendis beatae eum officiis dolor consectetur modi cupiditate tempora quas, iure ut consequuntur impedit.
            </p>
        </div>
        <div className='ui raised very padded text container segment'
        style={{marginTop:'80px'}}>
            <Link to='/wilma' className='ui header'>Wilma</Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor rerum quas sint voluptatibus at voluptatum. Laborum reiciendis beatae eum officiis dolor consectetur modi cupiditate tempora quas, iure ut consequuntur impedit.
            </p>
        </div>
    </div>
    )
}
export default Contact;