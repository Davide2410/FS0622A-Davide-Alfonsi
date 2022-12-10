import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {


  options= ["potereA" , "potereB", "potereC"]

  constructor() { }

  ngOnInit(): void {
  }

  submit(f:NgForm){
    console.log(f.valid);
  }

}
