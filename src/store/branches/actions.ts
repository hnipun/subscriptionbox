import {createAction, createAsyncAction} from 'typesafe-actions';
import {Box} from './types';

export const fetchBranches = createAsyncAction(
    'branches/FETCH_REQUEST',
    'branches/FETCH_SUCCESS',
    'branches/FETCH_FAILURE'
)<void, Box[], Error>();

export const updateBranches = createAction('locations/UPDATE_BRANCHES', resolve =>
    () => resolve()
);
