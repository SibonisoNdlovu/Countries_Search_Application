export enum SlotActionTypes {

  GET_SLOT_RESULTS_START = 'GET_SLOT_RESULTS_START',
  GET_SLOT_RESULTS_SUCCESS = 'GET_SLOT_RESULTS_SUCCESS',
  GET_SLOT_RESULTS_FAILURE = 'GET_SLOT_RESULTS_FAILURE',
}

export interface GetSlotResultsStartAction {
  type: SlotActionTypes.GET_SLOT_RESULTS_START,
}

export interface GetSlotResultsSuccessAction {
  type: SlotActionTypes.GET_SLOT_RESULTS_SUCCESS,
  results: {}
}

export interface GetSlotResultsFailureAction {
  type: SlotActionTypes.GET_SLOT_RESULTS_FAILURE,
  error: string
}

export type SlotResultsActions =
  GetSlotResultsStartAction
  | GetSlotResultsSuccessAction
  | GetSlotResultsFailureAction;
