
export default (state = [], action) => {
  switch(action.type) {
    case 'GET_MEMES_SUCCESS':
      return action.memes;
    case 'CREATE_MEME_SUCCESS':
    console.log(this)

      return [...state, action.meme]
    case 'LIKE_ADDED':
      return state;
    default:
      return state;
  }
}
