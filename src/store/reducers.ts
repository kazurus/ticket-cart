import { combineReducers } from 'redux';
import { ticketsReducer } from './tickets';
import type { TicketsState } from './tickets';

export type RootState = {
  tickets: TicketsState;
};

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
});
