import { USER_STORAGE_KEY } from '../constants';

export const getUserData = () => JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
export const setUserData = (user) => localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
export const deleteUserData = () => localStorage.removeItem(USER_STORAGE_KEY);
