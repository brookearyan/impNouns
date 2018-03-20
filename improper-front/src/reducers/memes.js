
export default (state = [], action) => {
  switch(action.type) {
    case 'GET_MEMES_SUCCESS':
      return action.memes;
    case 'CREATE_MEME_SUCCESS':
      return [...state, action.meme];
     case 'UPDATE_MEME': {
       let index = state.findIndex((meme) => meme.id == action.meme.id);
       return [...state.slice(0, index), action.meme, ...state.slice(index +1)];
   }
    default:
      return state;
  }
}
