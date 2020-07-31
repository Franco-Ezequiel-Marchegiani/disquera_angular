import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id;
  producto={}
  constructor(private activatedRoute:ActivatedRoute,private productoService:ProductosService) { 
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.id)
    this.productoService.getById(this.id).subscribe(data=>{
      this.producto=data
    })
  }

  ngOnInit(): void {
  }

}
