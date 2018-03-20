
const API_URL = 'http://localhost:9393/api/v1';

const updateMeme = meme => {
  return {
    type: 'UPDATE_MEME',
    meme
  }
}

export const createLike = meme => {
  return dispatch => {
    return fetch(`${API_URL}/memes/${meme.id}/likes`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(meme)
    })
    .then(response => response.json())
    .then(meme => {
      dispatch(updateMeme(meme))
      console.log(meme)
    })
  }
}
