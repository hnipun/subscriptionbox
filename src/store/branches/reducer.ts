import * as branches from './actions';
import {ActionType, getType} from 'typesafe-actions';
import {BranchState} from "./types";

let branchlist = [
    {id: 1, name : 'sample_name', about: 'sample about'}, {id: 2, name : 'sample_name', about: 'sample about'}, {id: 3, name : 'sample_name', about: 'sample about'},
    {id: 4, name : 'sample_name', about: 'sample about'}, {id: 5, name : 'sample_name', about: 'sample about'}, {id: 6, name : 'sample_name', about: 'sample about'},
    {id: 7, name : 'sample_name', about: 'sample about'}, {id: 8, name : 'sample_name', about: 'sample about'}, {id: 9, name : 'sample_name', about: 'sample about'},
    {id: 10, name : 'sample_name', about: 'sample about'}, {id: 11, name : 'sample_name', about: 'sample about'}, {id: 12, name : 'sample_name', about: 'sample about'},
    {id: 13, name : 'sample_name', about: 'sample about'}, {id: 14, name : 'sample_name', about: 'sample about'}, {id: 15, name : 'sample_name', about: 'sample about'},
    {id: 16, name : 'sample_name', about: 'sample about'}, {id: 17, name : 'sample_name', about: 'sample about'}, {id: 18, name : 'sample_name', about: 'sample about'},
];

const defaultState: BranchState = {
    branches: branchlist
}

export type BranchAction = ActionType<typeof branches>;



export default (state = defaultState, action: BranchAction): BranchState => {
    switch (action.type) {
        case getType(branches.fetchBranches.success):
            return {
                ...state,
                branches: action.payload
            }
        default:
            return state;
    }
};
