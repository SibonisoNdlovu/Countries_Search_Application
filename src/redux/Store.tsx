import { applyMiddleware, combineReducers, createStore, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppState from './state/AppState';
import CountriesListReducer from './reducers/CountriesListReducer';
import SlotReducer from './reducers/SlotReducer';

const rootReducer = combineReducers<AppState>({
  countriesListState: CountriesListReducer,
  slotState: SlotReducer
});

export default function configureStore(): Store<AppState, AnyAction> {
  return createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
}
