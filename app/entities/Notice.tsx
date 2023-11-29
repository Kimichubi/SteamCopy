export class Notice {
  title: string;
  content: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  constructor(
    name: string,
    password: string,
    img1: string,
    img2: string,
    img3: string,
    img4: string,
    img5: string
  ) {
    this.title = name;
    this.content = password;
    this.img1 = img1;
    this.img2 = img2;
    this.img3 = img3;
    this.img4 = img4;
    this.img5 = img5;
  }
}
