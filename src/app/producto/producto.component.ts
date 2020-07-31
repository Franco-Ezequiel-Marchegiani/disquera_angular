import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() data={
    id:0,
    title:"title",
    body:""
  }
  @Input() verDetalle=true;
  constructor() { }

  ngOnInit(): void {
  }

}
