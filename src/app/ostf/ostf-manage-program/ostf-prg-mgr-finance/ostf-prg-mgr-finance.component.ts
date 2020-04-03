import { Component, OnInit } from '@angular/core';

export interface RevenueExpenses {
  year: number;
  annualTaxLevy: number;
  reimbursements: number;
  cashReceipts: number;
  interest: number;
  other: number;
  total: number;
  disbursements: number;
  debtPayments: number;
  other2: number;
  total2: number;
  edit: boolean;
}

const ELEMENT_DATA: RevenueExpenses[] = [
  { year: 2000, annualTaxLevy: 200, reimbursements: 100, cashReceipts: 300, interest: 400, other: 500, total: 0, disbursements: 200, debtPayments: 100, other2: 200, total2: 0, edit: true },
  { year: 2001, annualTaxLevy: 200, reimbursements: 100, cashReceipts: 300, interest: 400, other: 500, total: 0, disbursements: 200, debtPayments: 100, other2: 200, total2: 0, edit: true },
  { year: 2003, annualTaxLevy: 200, reimbursements: 100, cashReceipts: 300, interest: 400, other: 500, total: 0, disbursements: 200, debtPayments: 100, other2: 200, total2: 0, edit: true },
];

@Component({
  selector: 'app-ostf-prg-mgr-finance',
  templateUrl: './ostf-prg-mgr-finance.component.html',
  styleUrls: ['./ostf-prg-mgr-finance.component.scss']
})
export class OstfPrgMgrFinanceComponent implements OnInit {

  public displayedColumns: string[] = ['year', 'annualTaxLevy', 'reimbursements', 'cashReceipts', 'interest', 'other', 'total',
    'disbursements', 'debtPayments', 'other2', 'total2', 'edit'];
  public dataSource = ELEMENT_DATA;
  public RevenueTotal: number = 0;
  public ExpenseTotal: number = 0;
  public Balance: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  isCalculateTotal(object: RevenueExpenses) {
    object.total = object.annualTaxLevy + object.cashReceipts + object.reimbursements + object.interest +
      object.other;
    return object.total;
  }

  isCalculateTotal2(object: RevenueExpenses) {
    object.total2 = object.debtPayments + object.disbursements + object.other2;
    return object.total2;
  }

  getAnnualTaxLevy() {
    return this.dataSource.map(t => t.annualTaxLevy).reduce((acc, value) => acc + value, 0);
  }

  getReimbursements() {
    return this.dataSource.map(t => t.reimbursements).reduce((acc, value) => acc + value, 0);
  }

  getCashReceipts() {
    return this.dataSource.map(t => t.cashReceipts).reduce((acc, value) => acc + value, 0);
  }

  getInterest() {
    return this.dataSource.map(t => t.interest).reduce((acc, value) => acc + value, 0);
  }

  getOther1() {
    return this.dataSource.map(t => t.other).reduce((acc, value) => acc + value, 0);
  }

  getTotal1() {
    this.RevenueTotal = this.dataSource.map(t => t.total).reduce((acc, value) => acc + value, 0);
    return this.RevenueTotal;
  }

  getDisbursements() {
    return this.dataSource.map(t => t.disbursements).reduce((acc, value) => acc + value, 0);
  }

  getDebtPayments() {
    return this.dataSource.map(t => t.debtPayments).reduce((acc, value) => acc + value, 0);
  }

  getOther2() {
    return this.dataSource.map(t => t.other2).reduce((acc, value) => acc + value, 0);
  }

  getTotal2() {
    this.ExpenseTotal = this.dataSource.map(t => t.total2).reduce((acc, value) => acc + value, 0);
    this.Balance = this.RevenueTotal-this.ExpenseTotal;
    return this.ExpenseTotal;
  }

}
