import {
  ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO, ACTIVE_ALL_TODO, DONE_ALL_TODO,
  FILTER_ALL, FILTER_ACTIVE, FILTER_DONE
} from '../constants/action-types';

export function addTodo(payload) {
  return { type : ADD_TODO, payload }
};

export function deleteTodo(payload) {
  return { type : DELETE_TODO, payload }
};

export function editTodo(payload) {
  return { type : EDIT_TODO, payload }
};

export function toggleTodo(payload) {
  return { type : TOGGLE_TODO, payload }
};

export function activeAllTodo() {
  return { type : ACTIVE_ALL_TODO }
};

export function doneAllTodo() {
  return { type : DONE_ALL_TODO }
};

export function filterAll() {
  return { type : FILTER_ALL }
};

export function filterActive() {
  return { type : FILTER_ACTIVE }
};

export function filterDone() {
  return { type : FILTER_DONE }
};
