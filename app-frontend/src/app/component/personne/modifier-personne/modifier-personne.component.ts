import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Personne } from '../../model/personne';
import { PersonneService } from '../../service/personne.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-personne',
  templateUrl: './modifier-personne.component.html',
  styleUrls: ['./modifier-personne.component.css']
})
export class ModifierPersonneComponent implements OnInit {

  form!:FormGroup
  // submitted = false;
  personnes !: Personne;
  id !: number;

constructor(
  private formBuilder:FormBuilder,
  private personneService:PersonneService,
  private route : ActivatedRoute,
  private routes :Router
  ){}

ngOnInit(){
  this.id = this.route.snapshot.params['id'];
  this.personneService.getById(this.id).subscribe((data:any)=>{
  this.personnes= data;
  })

  this.form = this.formBuilder.group ({
    nom:['',
     [Validators.required]
  ],
    prenom:['',
     [Validators.required]
    ],
    age:['',
     [Validators.required]
    ]
  })
}

// onOuverture(){
//   this.form.patchValue({
//     nom : this.personnes.nom,
//   })
// }


updatePersonne() {
  //console.log(this.form.value)
  this.personneService.update(this.id, this.personnes).subscribe((data:any)=>{
        console.log(this.personnes); 
    this.routes.navigate(['/listepersonne']);

  }),
  (error:any)=>{
    console.log(error)
  }
}

// updatePersonne(id: any) {
//   this.personneService.update(id).subscribe({
//    next:(data: any) => {
//    this.personnes = data;
//  },
//   error:(error: any) =>{
//    console.log(error)
//   }
//  });

// }
// }
}
