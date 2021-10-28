import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class MsgService {

  constructor(public toastr: ToastrService) { }

  msgSucesso(msg: string) {
    this.toastr.success(msg,'Sucesso');
  }

  msgErro(msg: string) {
    this.toastr.error(msg,'Erro');
  }

  msgAdvertencia(msg: string) {
    this.toastr.warning(msg,'Notificação');
  }


  /*
  showSuccess(msg: string) {
    this.toastr.success(msg,'Sucesso',  {toastLife: 3000});
  }
  */



}
