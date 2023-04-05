class Account {
    private Acc_no: number
    private Balance: number
    debitAmount() {

    }
    creditAmount() {

    }
    getBalance() { }
}
interface IAccount {
    Date_of_opening: Date;
    addCustomer();
    removeCustomer();
}

class Saving_Account extends Account implements IAccount {
    Date_of_opening: Date;
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
    Min_Balance: number;
}
class Current_Account extends Account implements IAccount {
    Date_of_opening: Date;
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
    Interest_rate: number;
}