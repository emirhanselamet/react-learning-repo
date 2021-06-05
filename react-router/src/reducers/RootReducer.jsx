const initialState = {
    cards: [
        {id:'1',title:'Alex',body:'Lorem ispum'},
        {id:'2',title:'bob',body:'İpsum'},
        {id:'3',title:'Stanford',body:'Loremicik'}
    ],
}
const rootReducer = (state=initialState, action) => {
    return state;

}
export default rootReducer;