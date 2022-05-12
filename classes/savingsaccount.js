class SavingsAccount extends Account {
    constructor(number, _interest) {
        super(number);
        this._interest = _interest;
    }
    getInterest() {
        return this._interest;
    }
    setInterest(_interest) {
        this._interest = _interest;
    }
    addInterest() {
        this.deposit(this.getBalance() * this._interest / 100);
    }
    toString() {
        return "Account " + this._number + ": balance " 
            + this._balance + ": interest" + this._interest;
    }
    endOfMonth() {
        let _interest = this.getBalance() * this._interest / 100;
        this.addInterest();
        return _interest;
    }
}

// class SavingAccount extends Account {
//     constructor(number,interest){
//         super(number);
//         this.interest = interest;
//     }
//     set interest(value){
//         this._interest= value;
//     }
//     get interest(){
//         return this._interest;
//     }

//     addInterest(){
//         // this._balance = super.getBalance() * this.interest() /100;
//         this.deposit(this.getBalance() * this.interest/100);
//     }

//     toString(){
//         return "Saving Account " + this.getNumber() + ": balance " + this.getBalance();
//     }

// }