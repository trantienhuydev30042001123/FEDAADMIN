import {productDTO} from "./ProductDTO";

export class orderDetailsDTO {
  id:number;
  price:number;
  quantity:number;
  product: productDTO[];
}
