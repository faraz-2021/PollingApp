import { GET_USER, GETTING_USER } from "../constant/constant";

const initialState = {
  isLoading: false,

  data: {},
};

const GetUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        isLoading: true,

        data: {},
      };
    }
    case GETTING_USER: {
      return {
        isLoading: false,

        data: action.user,
      };
    }
    default:
      return state;
  }
};

export default GetUserReducer;
