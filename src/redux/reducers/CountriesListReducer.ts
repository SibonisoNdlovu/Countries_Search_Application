import { Reducer } from 'redux';
import CountriesListState from '../state/CountriesListState';
import { CountryActionTypes, CountriesListActions } from '../actions/CountriesActions';

const initialState: CountriesListState = {
  countries: [],
  isFetching: false
};
const CountriesListReducer: Reducer<CountriesListState, CountriesListActions> = (state = initialState, action: CountriesListActions) => {

  switch (action.type) {
    case CountryActionTypes.GET_COUNTRIES_LIST_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case CountryActionTypes.GET_COUNTRIES_LIST_SUCCESS: {
      return {
        ...state,
        countries: action.Countries,
        isFetching: false
      };
    }
    case CountryActionTypes.GET_COUNTRIES_LIST_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    default: return state;
  }
};

export default CountriesListReducer;
