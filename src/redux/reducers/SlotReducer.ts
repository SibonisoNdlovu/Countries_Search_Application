import { Reducer } from 'redux';
import SlotState from '../state/SlotState';
import { SlotActionTypes, SlotResultsActions } from '../actions/SlotActions';

const initialState: SlotState = {
  results: {},
  isFetching: false
};
const SlotReducer: Reducer<SlotState, SlotResultsActions> = (state = initialState, action: SlotResultsActions) => {

  switch (action.type) {
    case SlotActionTypes.GET_SLOT_RESULTS_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case SlotActionTypes.GET_SLOT_RESULTS_SUCCESS: {
      return {
        ...state,
        results: action.results,
        isFetching: false
      };
    }
    case SlotActionTypes.GET_SLOT_RESULTS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    default: return state;
  }
};

export default SlotReducer;
