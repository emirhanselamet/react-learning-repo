import React from 'react';

class TodoList extends React.Component {
    render() {
        return (
            <div className="ui list">
                <p className='item'>Plan the family trip</p>
                <p className='item'>Go for shopping</p>
                <p className='item'>Write Code for your dream</p>
            </div>
        )
    }
}
export default TodoList;