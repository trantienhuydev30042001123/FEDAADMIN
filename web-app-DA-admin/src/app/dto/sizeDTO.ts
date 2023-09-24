
export class SizeDTO {
  id: string;
  size: number;


constructor(size = null) {
    if (size !== null) {
      this.size = size;
    }
  }
  // constructor(id: string, size: number) {
  //   this.id = id;
  //   this.size = size;
  // }
}
