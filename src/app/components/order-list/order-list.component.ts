import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/dialogs/confirmation-dialog/confirmation-dialog.component';
import { OrderAddEditComponent } from 'src/app/dialogs/order-add-edit/order-add-edit.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  tableData = [
    { order_no: 1, due_date: '10-24-2021', customer_name: 'Alex', customer_address: '3400 Garfield Road', customer_phone: '626-371-6162', order_total: '20' },
    { order_no: 2, due_date: '10-24-2021', customer_name: 'Bob', customer_address: '4059 Wilkinson Street', customer_phone: '469-223-8474', order_total: '10' },
    { order_no: 3, due_date: '10-24-2021', customer_name: 'Carrie', customer_address: '693 Whitetail Lane', customer_phone: '615-438-4874', order_total: '12' },
    { order_no: 4, due_date: '10-24-2021', customer_name: 'Danny', customer_address: '3400 Garfield Road', customer_phone: '626-371-6162', order_total: '22' },
    { order_no: 5, due_date: '10-24-2021', customer_name: 'Emily', customer_address: '4059 Wilkinson Street', customer_phone: '615-438-4874', order_total: '50' },
    { order_no: 6, due_date: '10-24-2021', customer_name: 'Freddie', customer_address: '693 Whitetail Lane', customer_phone: '626-371-6162', order_total: '13' },
    { order_no: 7, due_date: '10-24-2021', customer_name: 'Gabriel', customer_address: '693 Whitetail Lane', customer_phone: '615-438-4874', order_total: '45' },
    { order_no: 8, due_date: '10-24-2021', customer_name: 'Hozier', customer_address: '4059 Wilkinson Street', customer_phone: '469-223-8474', order_total: '65' },
    { order_no: 9, due_date: '10-24-2021', customer_name: 'Illiana', customer_address: '1062 Woodrow Way', customer_phone: '626-371-6162', order_total: '10' },
    { order_no: 10, due_date: '10-24-2021', customer_name: 'Jacob', customer_address: '1062 Woodrow Way', customer_phone: '615-438-4874', order_total: '11' },
  ];

  displayedColumns: string[] = ['order_no', 'due_date', 'customer_name', 'customer_address', 'customer_phone', 'order_total', 'action'];

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openAddOrderDialog() {
    this.dialog.open(OrderAddEditComponent, {
      // maxWidth: '50%',
      data: {
        title: 'Add'
      }
    }).afterClosed()
      .subscribe(res => {
        if (res?.formValue) {
          this.tableData.push(res?.formValue);
          this.tableData = [...this.tableData];
        }
      });
  }

  openEditOrderDialog(element: any) {
    this.dialog.open(OrderAddEditComponent, {
      width: 'auto',
      data: {
        title: 'Edit',
        element
      }
    });
  }

  deleteOrder(element: any) {
    this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      maxHeight: '450px',
      width: '400px',
      data: {
        message: 'Are you sure you want to delete the order?'
      }
    }).afterClosed()
      .subscribe(res => {
        if (res === 'yes') {
          this.tableData = this.tableData.filter((row: any) => row !== element);
        }
      });
  }

  logout() {
    this.router.navigate(['/login']);
  }

}
