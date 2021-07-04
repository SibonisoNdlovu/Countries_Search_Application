import axios, { AxiosResponse } from 'axios';
import CountryListResponse from '../model/CountryListResponse';

export class CountriesApi {
  SERVER_API_HOST = 'https://kanon-gaming-server.herokuapp.com/';
  API_HOST = 'http://localhost:3001/';
  headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  };

  //get all countires from the backend
  getCountries(): Promise<AxiosResponse<CountryListResponse>> {
    return axios.get<CountryListResponse>(this.SERVER_API_HOST + `getCountries`)
  };

  //search for a country from backend
  searchCountries(name: string): Promise<AxiosResponse<CountryListResponse>> {
    return axios.post<CountryListResponse>(
      this.SERVER_API_HOST + `searchCountries`,
      { data : JSON.stringify({name : name }),
      headers: this.headers
    });
  };
}