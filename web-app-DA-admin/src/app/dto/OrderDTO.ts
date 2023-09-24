import {orderDetailsDTO} from "./orderDetailsDTO";

export class OrderDTO{
  id:number;
  fullname:string;
  sizes: number[];
  createdDate:string;
  address:string;
  sdt:string;
  orderDetail: orderDetailsDTO[];
  status:number;
  nameProducts: string[];
  images: string[];
  prices: number[];
  quantity: number[];
}
