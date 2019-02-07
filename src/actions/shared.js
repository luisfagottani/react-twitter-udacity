import { getInitialData } from "../utils/api/";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthUser } from "./authedUser";

const USER_ID = "dan_abramov";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthUser(USER_ID));
    });
  };
}
