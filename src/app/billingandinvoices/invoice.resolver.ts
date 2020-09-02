import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Component, Injectable, ViewEncapsulation} from '@angular/core';
import {Invoice} from '../model/invoice';
import {InvoiceService} from './invoice.service';

@Injectable({
  providedIn: "root"
})
export class InvoiceResolver implements Resolve<Invoice[]> {
  constructor(private router : Router, private invoiceService: InvoiceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.invoiceService.getInvoices()
      .pipe();
  };
}
