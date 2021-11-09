/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// actions for loading list of strings
export const LOAD_LIST = 'DMI-frontend/App/LOAD_LIST';
export const LOAD_LIST_SUCCESS = 'DMI-frontend/App/LOAD_LIST_SUCCESS';
export const LOAD_LIST_ERROR = 'DMI-frontend/App/LOAD_LIST_ERROR';
export const ADD_ITEM = 'app/AddPage/ADD_ITEM';
