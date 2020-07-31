import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  myForm:FormGroup
  constructor(private fb:FormBuilder) {
    this.myForm = this.fb.group({
      nombre:["",[Validators.required,Validators.minLength(4)]], //Pide un mínimo de 4 caracteres
      apellido:["",[Validators.required]],
      email:["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(6),,Validators.maxLength(10)]]
      //Pide entre 6 y 10 caracteres máximo
    });
}}