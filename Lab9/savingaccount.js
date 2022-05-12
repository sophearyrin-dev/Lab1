class SavingAccount extends Account {
    constructor(number,interest){
        super(number);
        this.interest = interest;
    }
    set interest(value){
        this._interest= value;
    }
    get interest(){
        return this._interest;
    }

    addInterest(){
        this.deposit(this.getBalance() * this.interest/100);
    }

    toString(){
        return "Saving Account " + this.getNumber() + ": balance " + this.getBalance();
    }

}