import { Ingredient } from "../Shared/model/ingredient";

export interface Recipe {
  name:string;
  discription:string;
  imagePath:string;
  ingredient:Ingredient[]
}
