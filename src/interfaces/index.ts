export interface Todo {
  text: string;
  is_done: boolean;
  id: number;
}

export interface StoreState {
  list: Todo[];
}

export interface TodoAction {
  type: string;
  payload: Todo[];
}
