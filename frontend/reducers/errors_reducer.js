import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';

const ErrorsReducer = combineReducers({
  sessionErrors: SessionErrorsReducer
});

export default ErrorsReducer;
