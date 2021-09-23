import { RECEIVE_PERMITS } from "../constants";

export default (state = [], action: {type: string, data: object}) => {
  switch (action.type) {
    case RECEIVE_PERMITS:
      return action.data;
    default:
      return state;
  }
};