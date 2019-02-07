import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users form './users';
import tweets form './tweets';


export default combineReducers({
  authedUser,
  users,
  tweets
})
