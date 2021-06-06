import React from "react";
import { connect } from "react-redux";

class Card extends React.Component {
  
  onBUttonClick = () => {
    let {id} = this.props.card;
    this.props.deleteCard(id);
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
    deleteCard: (id) => { dispatch({type:'DELETE_CARD',id}) }
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Card);
