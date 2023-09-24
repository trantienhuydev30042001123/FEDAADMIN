import {categoryDTO} from "./categoryDTO";

export class productDTO {
  id: string;
  name:string;
  available:boolean;
  description:string;
  // createdate:;
  discount:number;
  image:string;
  image2:string;
  image3:string;
  price:number;
  lastprice:number;
  category: categoryDTO[];

  // constructor(product = null) {
  //   if (product !== null) {
  //     this.id = product.id;
  //     this.name = product.name;
  //     this.available = product.available;
  //     this.discount = product.discount;
  //     this.description = product.description;
  //     this.image = product.image;
  //     this.image2 = product.image2;
  //     this.image3 = product.image3;
  //     this.price = product.price;
  //     this.lastprice = product.lastprice;
  //     this.category = product.category;
  //   }
  // }

  // constructor(id: string, name: string, available: boolean, description: string, discount: number, image: string, image2: string, image3: string, price: number, lastprice: number, category: categoryDTO[]) {
  //   this.id = id;
  //   this.name = name;
  //   this.available = available;
  //   this.description = description;
  //   this.discount = discount;
  //   this.image = image;
  //   this.image2 = image2;
  //   this.image3 = image3;
  //   this.price = price;
  //   this.lastprice = lastprice;
  //   this.category = category;
  // }
}
