import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {SettlementInfoService} from "../../settlement-info/service/settlement-info.service";
import {IChurchData} from "../../settlement-info/interfaces/settlementData.interface";

@Component({
  selector: 'app-form.dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogClose, ReactiveFormsModule],
  templateUrl: './form.dialog.component.html',
  styleUrl: './form.dialog.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDialogComponent implements OnInit{
  constructor(private dialogRef: MatDialogRef<FormDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {type: string},
              public service: SettlementInfoService,
              private fb: FormBuilder) {
  }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      met_year: ['', Validators.required],
      met_fond: ['', Validators.required],
      met_opis: ['', Validators.required],
      met_delo: ['', Validators.required],
      met_page: ['', Validators.required],
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  add(): void {
    this.service.addData(this.form.value);
  }
}
