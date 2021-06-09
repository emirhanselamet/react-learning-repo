import React from 'react';
import { ThemeContext } from "../contexts/ThemeContext";

class TodoList extends React.Component {
    static contextType = ThemeContext;
    render() {
        const {isDarkTheme,lightTheme,darkTheme ,changeTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <div style={{ backgroundColor:theme.background, color:theme.text, height:'140px', textAlign: 'center'}} className="ui list">
                <p className='item'>Plan the family trip</p>
                <p className='item'>Go for shopping</p>
                <p className='item'>Write Code for your dream</p>
                <button className='ui button' onClick={changeTheme}>Change Theme</button>
            </div>
        )
    }
}
export default TodoList;