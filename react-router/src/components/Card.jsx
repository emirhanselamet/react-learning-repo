import React from "react";
import { connect } from "react-redux";
import {deleteCard,fetchUser} from '../actions/cardActinos';

class Card extends React.Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  onBUttonClick = () => {
    let {id} = this.props.card;
    this.props.deleteCard(id);
    this.props.history.push('/contact');
  }
//   state = { user: "" };
//   componentDidMount() {
//     let user = this.props.match.params.user;
//     this.setState({ user });
//   }
  render() {
  const {title,body} =this.props.card;
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <h3 className="ui header">{title}</h3>
        <p>{body}</p>
        <button className="ui primary right floated button" onClick={this.onBUttonClick}>Delete</button>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let title = ownProps.match.params.user;

  return {
    card: state.cards.find((card) => card.title === title),
  };
};
const mapDispatchToProps = (dispatch) =>{
  return { 
    deleteCard: (id) => { dispatch(deleteCard(id)) },
    fetchUser:() => {dispatch(fetchUser())}
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Card);
