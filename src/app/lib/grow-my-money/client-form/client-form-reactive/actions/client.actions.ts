import { Action } from '@ngrx/store';
import { Client } from '../models/client.model';
import { ClientRequestActions } from './client-request.actions';
import { ClientSetActions } from './client-set.actions';

export type ClientActions = ClientRequestActions | ClientSetActions;
