import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {SettlementInfoService} from "../../settlement-info/service/settlement-info.service";

@Component({
  selector: 'delete-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatButtonModule, MatDialogClose],
  templateUrl: './delete.dialog.component.html',
  styleUrl: './delete.dialog.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteDialogComponent {
  constructor(private dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {name: string, code: number, type: string},
              private service: SettlementInfoService) {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  delete(): void {
    this.service.deleteChurch(this.data.code);

    this.service.reset();
  }
}
