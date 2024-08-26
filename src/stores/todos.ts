import { defineStore } from 'pinia';
interface State {
  todos: { text: string; id: number; isFinished: boolean }[];
  filter: 'all' | 'finished' | 'unfinished';
  nextId: number;
}
export const useTodos = defineStore('todos', {
  state: (): State => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // 类型将自动推断为 number
    nextId: 0
  }),
  getters: {
    finishedTodos(state) {
      // 自动补全！ ✨
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state): State['todos'] {
      if (this.filter === 'finished') {
        // 调用其他带有自动补全的 getters ✨
        return this.finishedTodos;
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos;
      }
      return this.todos;
    }
  },
  actions: {
    // 接受任何数量的参数，返回一个 Promise 或不返回
    addTodo(text: any) {
      // 你可以直接变更该状态
      this.todos.push({ text, id: this.nextId++, isFinished: false });
    }
  }
});
