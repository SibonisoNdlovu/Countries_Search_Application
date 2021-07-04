import Country from '../../api/model/Country';

export enum CountryActionTypes {

  GET_COUNTRIES_LIST_START = 'GET_COUNTRIES_LIST_START',
  GET_COUNTRIES_LIST_SUCCESS = 'GET_COUNTRIES_LIST_SUCCESS',
  GET_COUNTRIES_LIST_FAILURE = 'GET_COUNTRIES_LIST_FAILURE',
}

export interface GetCountriesListStartAction {
  type: CountryActionTypes.GET_COUNTRIES_LIST_START,
}

export interface GetCountriesListSuccessAction {
  type: CountryActionTypes.GET_COUNTRIES_LIST_SUCCESS,
  Countries: Country[]
}

export interface GetCountriesListFailureAction {
  type: CountryActionTypes.GET_COUNTRIES_LIST_FAILURE,
  error: string
}

export type CountriesListActions =
  GetCountriesListStartAction
  | GetCountriesListSuccessAction
  | GetCountriesListFailureAction;
