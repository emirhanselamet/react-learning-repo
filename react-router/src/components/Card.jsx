import React from "react";
import { connect } from "react-redux";

class Card extends React.Component {
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
export default connect(mapStateToProps)(Card);
