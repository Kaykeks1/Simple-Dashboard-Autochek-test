import { RECEIVE_PERMIT } from "../constants";

export default (state = {}, action: {type: string, data: object}) => {
  switch (action.type) {
    case RECEIVE_PERMIT:
      return action.data;
    default:
      return state;
  }
};