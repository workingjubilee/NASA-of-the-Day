import { FETCH_PHOTO_START } from '../actions';

const initialState = {
  photoOfTheDay: null,
  error: ''
};

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_PHOTO_START:
      return {
        ...state,
        error:
          "Uh oh... You haven't built out your action file yet! Go to actions/index.js and use redux-thunk to make a call to the NASA api."
      };
    default:
      return state;
  }
}

export default reducer;
