import React from "react";
import { connect } from "react-redux";
import {deleteCard,fetchUser} from '../actions/cardActinos';

class Card extends React.Component {

  componentDidMount() {
    this.props.fetchUser();
  }


//   state = { user: "" };
//   componentDidMount() {
//     let user = this.props.match.params.user;
//     this.setState({ user });
//   }
  render() {
    const {users} = this.props;
    return (
    users.map(user =>{
      return(
        <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
        key = {user.id}
      >
        <h3 className="ui header">{user.name}</h3>
        <p>{user.email}</p>
        <button className="ui primary right floated button" onClick={this.onBUttonClick}>Delete</button>
      </div>
      )
    })
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let title = ownProps.match.params.user;

  return {
    card: state.cards.find((card) => card.title === title),
    users: state.users
  };
};
const mapDispatchToProps = (dispatch) =>{
  return { 
    deleteCard: (id) => { dispatch(deleteCard(id)) },
    fetchUser:() => {dispatch(fetchUser())}
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Card);
