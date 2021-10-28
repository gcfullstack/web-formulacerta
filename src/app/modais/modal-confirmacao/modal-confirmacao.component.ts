import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.css']
})
export class ModalConfirmacaoComponent implements OnInit {

  txtEnunciado: string;
  txtPositivo: string;
  txtNegativo: string;
  motivo: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialogRef<any>) { }

  ngOnInit() {
    this.txtEnunciado = (this.data.txtEnunciado != undefined) ? this.data.txtEnunciado : "Tem certeza que deseja realizar esta ação ?"
    this.txtPositivo = (this.data.txtPositivo != undefined) ? this.data.txtPositivo : "Sim"
    this.txtNegativo = (this.data.txtNegativo != undefined) ? this.data.txtNegativo : "Não"
  }

  retornar(resposta: boolean) {
    if(this.data.motivo == undefined || this.data.motivo == null) {
      this.dialog.close(resposta);
    } else {
      let obj = {
        resposta: resposta,
        motivo: this.motivo
      }
      this.dialog.close(obj);
    }
  }
}
