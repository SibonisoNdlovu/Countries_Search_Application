import axios, { AxiosResponse } from 'axios';

export class SlotMachineApi {
  SERVER_API_HOST = 'https://kanon-gaming-server.herokuapp.com/';
  API_HOST = 'http://localhost:3001/';
  headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  };

  play(): Promise<AxiosResponse<any>> {
    return axios.get<any>(this.SERVER_API_HOST + `play`)
  };
}