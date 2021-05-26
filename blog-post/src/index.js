import React from "react";
import ReactDOM from "react-dom";
import SingleComment  from "./SingleComment";
import profile1 from "./img/i1.jpg";
import profile2 from "./img/i2.jpg";
import profile3 from "./img/i3.jpg";
import UserCard from './UserCard';

const App = () => {
    return(
    <div className='ui comments'>
        <UserCard>
        <SingleComment name='Alex' time='Today 5:00PM' text='I love React' img={profile1}/>
        </UserCard>
        <SingleComment name='Jackie' time='Today 5:00AM' text='I love CSharp' img={profile2}/>
        <SingleComment name='Bob' time='Today 3:00PM' text='I love JavaScript' img={profile3}/> 
    </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)