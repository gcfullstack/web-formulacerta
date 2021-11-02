import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { OrcTrailService } from 'src/app/services/orc-trail.service';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { ModalConfirmacaoComponent } from 'src/app/modais/modal-confirmacao/modal-confirmacao.component';
import { MsgService } from 'src/app/services/msg.service';
@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @BlockUI()
  blockUI: NgBlockUI;

  list = new MatTableDataSource<any>();
  colunas: string[] = ["numOrcamento", "nomeFuncionario", "descricaoSimples", "formaFarmaceutica", "codFormaFarmaceutica", "preco", "url"];

  constructor(
    private orcTrailService: OrcTrailService,
    private dialog: MatDialog,
    private msgService: MsgService
  ) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.blockUI.start();
    this.orcTrailService.findAll().subscribe(
      res => {
        this.list = new MatTableDataSource<any>(res);
        this.list.paginator = this.paginator;
        this.blockUI.stop();
      },
      err => {
        this.blockUI.stop();
      }
    )
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalConfirmacaoComponent, {
      width: '420px',
      data: { txtEnunciado: "Executar a integração de orçamento?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.blockUI.start();
        this.orcTrailService.executarIntegracao().subscribe(
          res => {
            this.msgService.msgSucesso("Integração executada com sucesso!");
            this.blockUI.stop();
            this.findAll();
          },
          error => {
            this.msgService.msgErro("Ocorreu um erro ao executar a integração")
            this.blockUI.stop();
          }
        )
      }

    });
  }

  copyToClipboard (orc) {
    let el:any = document.createElement('textarea');
    el.value = "https://trayparceiros.commercesuite.com.br/loja/produto.php?loja=391250&IdProd=" + orc.idProdutoTray;
    el.style = {position: 'absolute', left: '-9999px'};
    el.setAttribute('readonly', '');
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.msgService.msgSucesso("URL Copiada");
   }

}
