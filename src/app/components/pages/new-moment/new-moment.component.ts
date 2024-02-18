import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MomentFormComponent } from "../../moment-form/moment-form.component";
import { Moment } from '../../../Moment';

import { MomentService } from '../../../services/moment.service';

@Component({
    selector: 'app-new-moment',
    standalone: true,
    templateUrl: './new-moment.component.html',
    styleUrl: './new-moment.component.css',
    imports: [RouterModule, MomentFormComponent]
})
export class NewMomentComponent implements OnInit {
btnText = 'Compartilhar!';

constructor (private momentService: MomentService) {}

ngOnInit(): void {}

async createHandler(moment: Moment) {
    const formData = new FormData()

    formData.append("title", moment.title);
    formData.append("description", moment.description);

    if(moment.image){
        formData.append('image', moment.image);
        }   

        //todo
        await this.momentService.createMoment(formData).subscribe();
        //enviar para service

        //exibir mgs

        //redirect
    }
}
