// CODE ALONG
class BankAccount {
    constructor(balance = 0,accountHolder,accountNumber){
        this.balance = balance;
        this.accountHolder = accountHolder
        this.accountNumber = accountNumber
    }
                                
    deposit (amt) {
        this.balance =  this.balance + amt
    }
    withdraw (amt) {
        this.balance =  this.balance - amt
    }
}