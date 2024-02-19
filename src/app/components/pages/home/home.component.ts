import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
allMoments: Moment[] = []
moments: Moment[] = []
baseApiUrl = `http://localhost:3333/`;
//todo search

constructor(private momentService: MomentService){}

ngOnInit(): void {
  this.momentService.getMoments().subscribe((items) => {

    const data = items.data

    data.map((item) => {
      item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
    })

    this.allMoments = data
    this.moments = data
  })
}


}
