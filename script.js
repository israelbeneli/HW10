class User
{
    #booksar;
    constructor(privetname,familyname,city){
        this.privatename=privetname;
        this.familyname=familyname;
        this.city=city;
        this.#booksar=[];
        this.useracount=0;
    }
    addbooktouser(book){
        if(book.available==true){
            this.#booksar.push(book);
            book.available=false;
            book.changePlaceOfBook(this);
            this.useracount=Number(this.useracount+book.price);
        }
        else{
            console.log("The book is not possible to borrow");
        }
    }
    ReturningABook(book){
        if (this.username == book.whereIsTheBook[book.whereIsTheBook.length-1]){
            book.available=true;
         }
    }
    getbookinarrey(){
        this.#booksar.forEach(book => {
            console.log("name of book is "+book.name);
        }); 
    }
}