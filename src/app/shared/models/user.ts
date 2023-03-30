import { Todo } from "./todo";

export class User {
    constructor(
        public id: number, 
        public name: string, 
        public todos: Todo[]
    ) {}
}