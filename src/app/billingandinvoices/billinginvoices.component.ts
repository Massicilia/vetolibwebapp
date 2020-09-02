import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Invoice } from '../model/invoice';

@Component({
  selector: 'billinginvoices',
  templateUrl: './billinginvoices.component.html'
})
export class BillinginvoicesComponent implements OnInit {

  public invoices: Invoice[];
  public dateinvoice: string[];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getInvoices();
  }
  getInvoices(){
    this.route.data.subscribe((data: { invoices: Invoice[] }) => {
      this.invoices = data.invoices;
      for(let index=0;index<this.invoices.length;index++){
        let month = new Date(this.invoices[index].date).getMonth();
        let year = new Date(this.invoices[index].date).getFullYear();
        this.invoices[index].date = this.getMonthFormat(month) + ' ' + year;
      }
    });
  }
  getMonthFormat(month){
    switch (month) {
      case 1: {
        return 'janvier'
      }
      case 2: {
        return 'fevrier'
      }
      case 3: {
        return 'mars'
      }
      case 4: {
        return 'avril'
      }
      case 5: {
        return 'mai'
      }
      case 6: {
        return 'juin'
      }
      case 7: {
        return 'juillet'
      }
      case 8: {
        return 'août'
      }
      case 9: {
        return 'septembre'
      }
      case 10: {
        return 'octobre'
      }
      case 11: {
        return 'novembre'
      }
      case 12: {
        return 'décembre'
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/appointment']);
    //window.history.back();
  }

}
