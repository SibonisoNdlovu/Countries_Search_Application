import axios from 'axios';
import { CountriesApi } from './CountriesApi';

describe('CountriesApi', () => {

  const api = new CountriesApi();

  beforeEach(() => axios.get = jest.fn());

  it('getCountries', () => {
    api.getCountries();
    expect(axios.get).toHaveBeenCalledWith('https://restcountries.eu/rest/v2/all');
  });

  it('searchCountries', () => {
    const searchString = 'usa';
    api.searchCountries(searchString);
    expect(axios.get).toHaveBeenCalledWith(`https://restcountries.eu/rest/v2/name${searchString}`);
  });
});
