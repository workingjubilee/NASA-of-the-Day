import {
  FETCH_PHOTO_START,
  FETCH_PHOTO_SUCCESS,
  FETCH_PHOTO_FAILURE
} from "../actions";

const initialState = {
  isLoading: false,
  photoOfTheDay: null,
  error: ""
};

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_PHOTO_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case FETCH_PHOTO_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        photoOfTheDay: action.payload
      };
    case FETCH_PHOTO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
