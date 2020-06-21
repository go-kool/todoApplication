export class Item {

     title: string;
     discription: string;
     timeStamp: Date;

    constructor(message: string, discription: string) {
        this.title = message;
        this.discription = discription;
        this.timeStamp = new Date();
    }

    
}
