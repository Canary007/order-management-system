import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-order-add-edit',
  templateUrl: './order-add-edit.component.html',
  styleUrls: ['./order-add-edit.component.scss']
})
export class OrderAddEditComponent implements OnInit {
  addEditOrderForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<OrderAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.buildAddEditForm();
    if (data.title === 'Edit') {
      this.patchForm();
    }
  }

  buildAddEditForm() {
    this.addEditOrderForm = this.fb.group({
      order_no: ['', [Validators.required]],
      due_date: [new Date(''), [Validators.required]],
      buyer_name: ['', [Validators.required]],
      customer_address: ['', [Validators.required]],
      customer_phone: ['', [Validators.required]],
      order_total: ['', [Validators.required]]
    });
  }

  patchForm() {
    if (this.data?.element !== null || undefined) {
      const selectedRow = this.data?.element;
      this.addEditOrderForm.patchValue({
        order_no: selectedRow.order_no,
        due_date: new Date(selectedRow.due_date),
        buyer_name: selectedRow.customer_name,
        customer_address: selectedRow.customer_address,
        customer_phone: selectedRow.customer_phone,
        order_total: selectedRow.order_total
      });
    }
  }

  ngOnInit(): void {
  }

  submit() {
    this.dialogRef.close({ formValue: this.addEditOrderForm.value });
  }

}
