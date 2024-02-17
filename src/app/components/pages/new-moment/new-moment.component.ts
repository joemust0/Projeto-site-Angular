import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MomentFormComponent } from "../../moment-form/moment-form.component";

@Component({
    selector: 'app-new-moment',
    standalone: true,
    templateUrl: './new-moment.component.html',
    styleUrl: './new-moment.component.css',
    imports: [RouterModule, MomentFormComponent]
})
export class NewMomentComponent implements OnInit {
btnText = 'Compartilhar!';

constructor () {}

ngOnInit(): void {
    
}
}
