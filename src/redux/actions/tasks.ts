export const LOAD_TASKS = "@tasks/LOAD_CURRENT_TASKS";
export const LOAD_TASKS_SUCCESS = "@tasks/LOAD_CURRENT_TASKS_SUCCESS";
export const LOAD_TASKS_ERROR = "@tasks/LOAD_CURRENT_TASKS_ERROR";

export type LOAD_TASKS = typeof LOAD_TASKS;
export type LOAD_TASKS_SUCCESS = typeof LOAD_TASKS_SUCCESS;
export type LOAD_TASKS_ERROR = typeof LOAD_TASKS_ERROR;

export interface LoadTasksAction {
    type: LOAD_TASKS;
}

export interface LoadTasksSuccessAction {
    type: LOAD_TASKS_SUCCESS;
    tasks: any;
}

export interface LoadTasksErrorAction {
    type: LOAD_TASKS_ERROR;
    err: any;
}

export const loadTasks = (): LoadTasksAction => ({
    type: LOAD_TASKS
});

export const loadTasksSuccess = (tasks: any): LoadTasksSuccessAction => ({
    type: LOAD_TASKS_SUCCESS,
    tasks
})

export const loadTasksError = (err: any): LoadTasksErrorAction => ({
    type: LOAD_TASKS_ERROR,
    err
})

export type TasksActions = LoadTasksAction | LoadTasksErrorAction | LoadTasksSuccessAction;