const initialState = {
  cards: [
    { id: "1", title: "Alex", body: "Lorem ispum" },
    { id: "2", title: "bob", body: "İpsum" },
    { id: "3", title: "Stanford", body: "Loremicik" },
  ],
  users: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_CARD":
      let newCards = state.cards.filter((card) => card.id !== action.id);
      return {
        ...state,
        cards: newCards,
      };
    case "FETCH_USER":
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
export default rootReducer;
