import { Dispatch } from 'redux';
import { CountriesApi } from '../../api/rest/CountriesApi';
import {
  GetCountriesListStartAction,
  GetCountriesListSuccessAction,
  GetCountriesListFailureAction,
  CountryActionTypes
} from './CountriesActions';


export const GetCountriesStart = (): GetCountriesListStartAction => {
  return {
    type: CountryActionTypes.GET_COUNTRIES_LIST_START
  };
}

export const GetCountriesSuccess = (results: any): GetCountriesListSuccessAction => {
  return {
    type: CountryActionTypes.GET_COUNTRIES_LIST_SUCCESS,
    Countries: results
  };
}

export const GetCountriesFailure = (error: string): GetCountriesListFailureAction => {
  return {
    type: CountryActionTypes.GET_COUNTRIES_LIST_FAILURE,
    error: error
  };
}

export const getCountries = () => {
  return (dispatch: Dispatch) => {
    dispatch(GetCountriesStart());
    return new CountriesApi()
      .getCountries()
      .then((response) => 
        dispatch(GetCountriesSuccess(response.data.results)
        ))
      .catch((error) => dispatch(GetCountriesFailure('Could not get Countries: ' + error.message)));
  };
};

export const searchCountries = (term: string) => {
  return (dispatch: Dispatch) => {

    dispatch(GetCountriesStart());
    return new CountriesApi()
      .searchCountries(term)
      .then((response) => dispatch(GetCountriesSuccess(response.data.results)))
      .catch((error) => dispatch(GetCountriesFailure('Could not search for Countries: ' + error.message)));
  };
};
