import axios from "axios";

export const FETCH_PHOTO_START = "FETCH_PHOTO_START";
export const FETCH_PHOTO_SUCCESS = "FETCH_PHOTO_SUCCESS";

export const getPhoto = () => dispatch => {
  dispatch({ type: FETCH_PHOTO_START });
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => {
      dispatch({ type: FETCH_PHOTO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
