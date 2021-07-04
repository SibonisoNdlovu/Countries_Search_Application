import Country from '../../api/model/Country';

export default interface CountriesListState {
  countries: Country[],
  isFetching: boolean,
  error?: string
}
