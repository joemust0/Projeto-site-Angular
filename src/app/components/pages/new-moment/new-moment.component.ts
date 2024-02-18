import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MomentFormComponent } from "../../moment-form/moment-form.component";
import { Moment } from '../../../Moment';

import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';


@Component({
    selector: 'app-new-moment',
    standalone: true,
    templateUrl: './new-moment.component.html',
    styleUrl: './new-moment.component.css',
    imports: [RouterModule, MomentFormComponent]
})
export class NewMomentComponent implements OnInit {
btnText = 'Compartilhar!';

constructor (
    private momentService: MomentService,
    private messageService: MessagesService,
    private router: Router) {}

ngOnInit(): void {}

async createHandler(moment: Moment) {
    const formData = new FormData()

    formData.append("title", moment.title);
    formData.append("description", moment.description);

    if(moment.image){
        formData.append('image', moment.image);
        }   

        await this.momentService.createMoment(formData).subscribe();
        
        this.messageService.add("Momento adicionado com sucesso!");

        this.router.navigate(['/']);
    }
}
