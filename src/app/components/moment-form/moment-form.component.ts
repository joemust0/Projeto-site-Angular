import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent implements OnInit{
@Input() btnText!: string;

momentForm!: FormGroup;

constructor() {}

ngOnInit(): void {
  this.momentForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl(''),
  });
}

get title() {
  return this.momentForm.get('title')!;
}

get description() {
  return this.momentForm.get('description')!;
}
submit(){
  if(this.momentForm.invalid) {
    return;
  }
  console.log("Enviou o formulário...")
  }
}
