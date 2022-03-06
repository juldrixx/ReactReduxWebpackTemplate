import { DUMMY_SUCCESS, DUMMY_FAILURE } from '../constants/actions';
import services from '../services';

function dummyGet() {
  return function func(dispatch) {
    return new Promise((resolve, reject) => {
      services.dummyService
        .get()
        .then((payload) => {
          dispatch({ type: DUMMY_SUCCESS, payload });
          resolve('DUMMY SUCCEED');
        })
        .catch((error) => {
          dispatch({ type: DUMMY_FAILURE, payload: { dummyError: error } });
          reject(new Error('DUMMY FAILED'));
        });
    });
  };
}

export default {
  dummyGet,
};
