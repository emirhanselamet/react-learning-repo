import React from 'react';
import {Link,NavLink,withRouter} from "react-router-dom"; 

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('./about')
    // },2000)
    return(
        <nav className="ui raised very padded segment">
            <a className="ui teal inverted segment" href="">Gloria</a>
            <div className="ui right floated header">
                <button className='ui button'><Link to="/">Home</Link></button>
                <button className='ui button'><NavLink to="/about">About</NavLink></button>
                <button className='ui button'><NavLink to="/contact">Contact</NavLink></button>
                <Link to="/"></Link>
            </div>
        </nav>
    )
}
export default withRouter(Navbar);
//withRouter sayesinde props obejsini hatasız bir şekilde kullanabildik