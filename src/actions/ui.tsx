import * as consts from '../consts/actionTypes';

export const startNetwork = (payload: string = 'global') => ({ type: consts.START_NETWORK, payload });

export const endNetwork = (payload: string = 'global') => ({ type: consts.END_NETWORK, payload });

export const setNetworkErrors = (name: string, error: any) => ({
  type: consts.SET_NETWORK_ERRORS,
  payload: {
    name,
    error
  }
});