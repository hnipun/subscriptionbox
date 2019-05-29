import { StateType } from 'typesafe-actions';
import { Middleware } from 'redux';

import rootReducer from './root-reducer';

import { fetchBranchesMiddleware } from './branches/middleware';

import * as branchesActions from './branches/actions';

export { default } from './store';
export { default as rootReducer } from './root-reducer';

export const selectors = {

};

export const actions = {
    branches: branchesActions
};

export const middlewares: Middleware[] = [
    fetchBranchesMiddleware
]

export type RootState = StateType<typeof rootReducer>;
