import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import StoriesReducer from './stories_reducer'
import UserReducer from './user_reducer';
import CommentsReducer from './comments_reducer';
// import EntitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
  // entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  stories: StoriesReducer,
  comments: CommentsReducer,
  user: UserReducer
});

export default RootReducer;
