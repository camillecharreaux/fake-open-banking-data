/**
 * Auto generated thanks to https://jvilk.com/MakeTypes/
 */

export interface Sample {
  accounts: (AccountsEntity)[];
}

export interface AccountsEntity {
  balance: number;
  balanceDate: string;
  bank: Bank;
  currency: string;
  transactions: (TransactionsEntity)[];
  type: string;
  usage: string;
}

export interface Bank {
  name: string;
}

export interface TransactionsEntity {
  currency: string;
  dates: Dates;
  description: string;
  amount: number;
}

export interface Dates {
  debitedAt: string;
}

export interface FileEntity {
  filename: string;
  sample: Sample;
}