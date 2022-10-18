import { takeLatest, all } from "redux-saga/effects";
import sagasManager from "Utils/sagasManager";

import { signin, forgotPassword } from "Sagas/authentication";

import {
   SIGN_IN,
   FORGOT_PASSWORD
} from 'Constants/actionConstants';

sagasManager.addSagaToRoot(function* rootSaga() {
   yield all([
      takeLatest(SIGN_IN, signin),
      takeLatest(FORGOT_PASSWORD, forgotPassword)
   ]);
});