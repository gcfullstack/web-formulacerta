import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  @ViewChild('textArea', {static: false}) textArea: ElementRef;

  @Input() readOnly: boolean;

  @Input() valor: any;

  @Output() capturarTexto = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.textArea.nativeElement.readOnly = this.readOnly;
  }

  adicionarTexto(evento){
    this.capturarTexto.emit(evento);
  }
  

}
