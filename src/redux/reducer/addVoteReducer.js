import { ADD_VOTE, VOTE_ADDED } from "../constant/constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const addVoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VOTE: {
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case VOTE_ADDED: {
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    }

    default:
      return state;
  }
};

export default addVoteReducer;
