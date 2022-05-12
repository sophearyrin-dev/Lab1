class CheckingAccount extends Account {
    constructor(number, overdraft) {
        super(number);
        this.overdraft = overdraft;
    }
    set overdraft(value) {
        this._overdraft = value;
    }
    get overdraft() {
        return this._overdraft;
    }

    withdraw(amount) {
        if (amount > this.overdraft) {
            console.log("You cannot widthdram, because The amount of money that you want to withdraw is more than the overdraft limit");
        }
        else {
            this._balance = this._balance - amount;
        }
    }
    
    toString() {
        return "Checking Account " + this.getNumber() + ": balance " + this.getBalance();
    }
}