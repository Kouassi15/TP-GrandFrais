package com.grandfrais.tp.Interfaces;

import com.grandfrais.tp.Application.PersonneVo;
import com.grandfrais.tp.Domain.Personne;
import com.grandfrais.tp.Infrastructure.PersonneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PersonneController {
    @Autowired
private PersonneService personneService;

    //   Recuperation de tout les données de la table
    @GetMapping("/personnes")
    public List<Personne> getAllPersonne() {
        return personneService.getAllPersonne();
    }

    //    Recuperation des données de la table par son id
    @GetMapping("/personne/{id}")
    public ResponseEntity<Personne> getPersonneById(@PathVariable Long id) {

        return new ResponseEntity<Personne>(personneService.getPersonneById(id), HttpStatus.NOT_FOUND);
    }Q

    //   Insertion des données dans la table
    @PostMapping("/personne")
    public Personne createVo(@RequestBody PersonneVo personneVo) {
        return this.personneService.createPersonne(personneVo);
    }

//    Mise à jour des données de la table
    @PutMapping("/personne/{id}")
    public PersonneVo updateVo(@PathVariable Long id, @RequestBody PersonneVo personneVo) {

        return this.personneService.updatePersonneVo(id, personneVo);
    }

    //   Suppression des données de la table
    @DeleteMapping("/deletePersonne/{id}")
    public ResponseEntity<Void> deleteVo(@PathVariable("id") Long id){
        personneService.deletePersonne(id);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
