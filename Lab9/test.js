function tester() {
    var account = new Account(614133);
    account.deposit(100);
    
    describe("account class methods test",() =>{
        it("test get account number",()=>{
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
    });
    mocha.run();
}

window.onload = function() {
    tester();
}