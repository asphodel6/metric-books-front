import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {SettlementInfoService} from "../../settlement-info/service/settlement-info.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'add-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogClose, FormsModule],
  templateUrl: './add.dialog.component.html',
  styleUrl: './add.dialog.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddDialogComponent {
  constructor(private dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {type: string},
              private service: SettlementInfoService) {
  }

  name: string = '';

  closeDialog(): void {
    this.dialogRef.close();
  }

  add(): void {
    if(!this.name) {
      return;
    }
    this.service.addCounty(this.name);
    // this.service.reset();
  }
}
