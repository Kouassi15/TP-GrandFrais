import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { PersonneService } from '../../service/personne.service';
import { Personne } from '../../model/personne';

@Component({
  selector: 'app-ajouter-personne',
  templateUrl: './ajouter-personne.component.html',
  styleUrls: ['./ajouter-personne.component.css']
})
export class AjouterPersonneComponent implements OnInit {

  form!:FormGroup
  submitted = false;
  personnes !: Personne;

constructor(
  private formBuilder:FormBuilder,
  private personneService:PersonneService
  ){}

ngOnInit(){
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

createPersonne() {
  // console.log(this.form.value)
  this.personneService.create(this.form.value).subscribe(
      (data:any)=>{
        console.log(data); 
  }),
  (error:any)=>{
    console.log(error)
  }
  }

// get fb(): { [key: string]: AbstractControl } {
//     return this.form.controls;
//   }

  // onSubmit(): void {
  //   this.submitted = true;

  //   if (this.form.invalid) {
  //     return;
  //   }

  //   console.log(JSON.stringify(this.form.value, null, 2));
  // }

  
}