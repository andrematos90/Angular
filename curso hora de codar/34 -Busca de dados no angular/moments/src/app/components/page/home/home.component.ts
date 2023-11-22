import { Moment } from './../../../../../../../31 - Finalizando sistema de mensgens/moments/src/app/Moment';
import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  allMoments: Moment[] = []
  moments: Moment[] = []
  baseApiUrl = environment.baseApiUrl

  faSearch = faSearch
  searchTerm: string = '';

  constructor(private momenteService: MomentService){}

  ngOnInit(): void {
    this.momenteService.getMoment().subscribe((items)=>{
      const data = items.data

      data.map((item)=> {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');

      });

      this.allMoments = data;
      this.moments = data;
    });
  }


  //todo search
  search(event:Event):void{
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter((moment) =>{
      return moment.title.toLowerCase().includes(value);
    });
  }

}
