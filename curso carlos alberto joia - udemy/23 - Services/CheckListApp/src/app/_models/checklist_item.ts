import { Category } from "./category";

export class ChecklistItem{
  public guid!: string;
  public isCompleted!:boolean;
  public description!: string;
  public deadLine!:Date;
  public postDate!:Date;
  public category!: Category;
}
