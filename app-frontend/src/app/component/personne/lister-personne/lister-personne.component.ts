import { Component, OnInit,ViewChild } from '@angular/core';
import { PersonneService } from '../../service/personne.service';
import { Router } from '@angular/router';
import { Observable, window } from 'rxjs';
import { Personne } from '../../model/personne';
import { Table } from 'primeng/table';
import { FilterMatchMode, MenuItem, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-lister-personne',
  templateUrl: './lister-personne.component.html',
  styleUrls: ['./lister-personne.component.css']
})
export class ListerPersonneComponent implements OnInit {
  personnes !:Personne[];
  item !: MenuItem[];
  @ViewChild('myTab') table!: Table;

  constructor(
    private personneService: PersonneService,
    private router: Router

  ) { }

  ngOnInit() {
    this.lister();
  }

  lister (){
    this.personneService.getAll().subscribe({
      next : (res : any) =>{
        this.personnes = res;
      },
      error :  (error :any)=>{
        console.log(error);
        
      }
  })
  }


  personneDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updatePersonne(id:number){
    this.router.navigate(['/modifier-personne',id]);
  }

  deletePersonne(id: any) {
    this.personneService.delete(id).subscribe(data =>{
      this.router.navigate(['/listepersonne'])
      this.lister();
    })
    }
 }
