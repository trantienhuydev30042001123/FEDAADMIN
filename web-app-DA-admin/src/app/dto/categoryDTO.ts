export class categoryDTO {
  id:string;
  name:string;
  description:string;

  // constructor(id: number, name: string, description: string) {
  //   this.id = id;
  //   this.name = name;
  //   this.description = description;
  // }
  constructor(category = null) {
    if (category !== null) {
      // this.name = name;
      // this.description = description;
    }
  }
}
