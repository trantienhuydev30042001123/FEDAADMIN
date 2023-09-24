export class DialogConfirm {
    title: string;
    content: string;
    colorBtn: string;

    constructor(title: string, content: string, colorBtn: string = "primary") {
        this.title = title;
        this.content = content;
        this.colorBtn = colorBtn;
    }
}
