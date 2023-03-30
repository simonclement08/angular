import { Category } from "./category";

export class Todo {
    constructor(
      public id: number,
      public title: string,
      public category: Category,
      public isCompleted: boolean,
      public userId: number
    ) {}
}