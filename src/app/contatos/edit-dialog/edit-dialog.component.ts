import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpService} from "../../service/http.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
   editContact: any;

  constructor(@Inject(MAT_DIALOG_DATA) public contato: any,
              public dialogRef: MatDialogRef<EditDialogComponent>,
              private httpService: HttpService,
              private stack:MatSnackBar) { }

  ngOnInit(): void {
    this.editContact = this.contato;
  }


  salvar() {
    this.httpService.updateContact(this.editContact).subscribe({
      next: (value: any) => {
        this.dialogRef.close();
        this.stack.open('Contato atualizado', 'Fechar', {duration: 2000});
      },
      error: (error: any) => console.error(error)
    });

  }
}
