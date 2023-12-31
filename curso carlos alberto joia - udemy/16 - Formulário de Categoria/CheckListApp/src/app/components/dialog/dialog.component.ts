import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  public dialogMsg ='Deseja continuar com essa ação?';
  public leftButtonLabel ='Cancelar';
  public rightButtonLabel ='sim';

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
     if(data.leftButtonLabel != null){
      this.leftButtonLabel = data.leftButtonLabel;
     }

     if(data.rightButtonLabel != null){
      this.rightButtonLabel = data.rightButtonLabel;
     }

     if(data.dialogMsg != null){
      this.dialogMsg = data.dialogMsg;
     }

  }

  public clickLeftButton(){
    this.dialogRef.close(false)

  }

  public clickRightButton(){
    this.dialogRef.close(true)

  }
}
