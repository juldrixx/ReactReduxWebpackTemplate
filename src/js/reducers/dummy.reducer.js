import { DUMMY_SUCCESS, DUMMY_FAILURE } from '../constants/actions';

const INITIAL_STATE = {
  dummyResult: '',
  dummyError: '',
};

function dummyReducer(state = INITIAL_STATE, { type, payload } = {}) {
  switch (type) {
    case DUMMY_SUCCESS:
      return {
        ...state,
        dummyResult: payload.dummyResult,
      };
    case DUMMY_FAILURE:
      return {
        ...state,
        dummyError: payload.dummyError,
      };
    default:
      return state;
  }
}

export default dummyReducer;
