import { Epic } from 'redux-observable';
import { Action, EpicDeps, State } from '../redux/store';

export enum PageStatus {
    LOADED = "LOADED",
    LOADING = "LOADING",
    ERROR = "ERROR",
}


export type FuncEpic = Epic<Action, Action, State, EpicDeps>

export type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
export type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function
    ? K
    : T[K] extends Function | undefined
    ? K
    : never;
}[keyof T];

export type TStateProps<T, TOwnProps = {}> = Pick<
  T,
  Exclude<NonFunctionPropertyNames<T>, NonFunctionPropertyNames<TOwnProps>>
>;
export type TDispatchProps<T, TOwnProps = {}> = Pick<
  T,
  Exclude<FunctionPropertyNames<T>, FunctionPropertyNames<TOwnProps>>
>;
