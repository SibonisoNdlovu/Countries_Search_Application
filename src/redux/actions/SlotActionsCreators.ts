import { Dispatch } from 'redux';
import { SlotMachineApi } from '../../api/rest/SlotMachineApi';
import {
  GetSlotResultsStartAction,
  GetSlotResultsSuccessAction,
  GetSlotResultsFailureAction,
  SlotActionTypes
} from './SlotActions';


export const GetSlotStart = (): GetSlotResultsStartAction => {
  return {
    type: SlotActionTypes.GET_SLOT_RESULTS_START
  };
}

export const GetSlotSuccess = (results: {}): GetSlotResultsSuccessAction => {
  return {
    type: SlotActionTypes.GET_SLOT_RESULTS_SUCCESS,
    results: results
  };
}

export const GetSlotFailure = (error: string): GetSlotResultsFailureAction => {
  return {
    type: SlotActionTypes.GET_SLOT_RESULTS_FAILURE,
    error: error
  };
}

export const play = () => {
  return (dispatch: Dispatch) => {
    dispatch(GetSlotStart());
    var api = new SlotMachineApi();
    var results = api.play()
    results.then((response) => 
      dispatch(GetSlotSuccess(response.data.results)
    ))
    .catch((error) => dispatch(GetSlotFailure('Could not get Countries: ' + error.message)));
    };
};
