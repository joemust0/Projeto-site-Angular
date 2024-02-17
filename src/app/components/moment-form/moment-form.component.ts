import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent implements OnInit{
@Input() btnText!: string;

constructor() {}

ngOnInit(): void {
  
}
}
