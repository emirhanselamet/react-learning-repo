import React from 'react';
import {ThemeContext} from '../contexts/ThemeContext'
class Navbar extends React.Component {
    static contextType = ThemeContext;

    render(){
        const {isDarkTheme,darkTheme,lightTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return(
            <nav style={{backgroundColor: theme.backgroundColor, color :theme.text , height: '120px'}}>
                <h2 style={{textalign: 'center'}} className="ui centered header">
                    FieraSoft
                </h2>
                <div className='ui three buttons'>
                    <button className='ui button'>Overview</button>
                    <button className='ui button'>Contact</button>
                    <button className='ui button'>Support</button>
                </div>
            </nav>
        )
    }
}
export default Navbar;