import { createStore, combineReducers} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  form: reduxFormReducer,
});


export const store = createStore(reducer, composeWithDevTools());
