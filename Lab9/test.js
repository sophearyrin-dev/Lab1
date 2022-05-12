function tester() {
    //account
    var account = new Account(614133);
    account.deposit(100);
    //saving account
    var saving = new SavingAccount(614133, 10);
    saving.deposit(100);
    saving.addInterest();
    //checking account
    var checking = new CheckingAccount(614133,30);
    checking.deposit(100);
    checking.withdraw(40);
    console.log(checking.getBalance());
   
    
    describe("account class methods test",() =>{
        it("test get account number, it shoud retrun the account number",()=>{
            assert.equal(account.getNumber(), 614133)
        });
        it("test getBalance after making some deposit methods should return the current balance",
          () => {
            assert.equal(account.getBalance(),100);
        });
        it("test after making widthdraw", () => {
            account.withdraw(50);
            assert.equal(account.getBalance(), 50)
        })
        it("test toString method", () => {
            assert.equal(account.toString(), "Account " + account.getNumber() + ": balance " + account.getBalance())
        })
        it("test endOfMonth should return nothing", () => {
            assert.equal(account.endOfMonth(), "")
        })
        it("add 10% of interest to saving account", () => {
            assert.equal(saving.getBalance(), 110);
        })
        it("test tostring of saving account should return the account number and balance", () => {
            assert.equal(saving.toString(), "Saving Account " + saving.getNumber() + ": balance " + saving.getBalance());
        })
        
    });
    mocha.run();
}

window.onload = function() {
    tester();
}