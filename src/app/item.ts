export class Item {

     title: string;
     discription: string;
     isCompleted:boolean;
     timeStamp: Date;

    constructor(message: string, discription: string,isCompleted:boolean) {
        this.title = message;
        this.discription = discription;
        this.timeStamp = new Date();
        this.isCompleted = isCompleted;
    }
    
}
