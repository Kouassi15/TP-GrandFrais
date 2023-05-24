package com.grandfrais.tp.Infrastructure;

import com.grandfrais.tp.Application.PersonneVo;
import com.grandfrais.tp.Domain.Personne;
import com.grandfrais.tp.Domain.PersonneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;
import java.util.Optional;

@Service
public class PersonneService {
    @Autowired
    private PersonneRepository personneRepository;
    public List<Personne> getAllPersonne(){
        return personneRepository.findAll();
    }

   public Personne getPersonneById(Long id) {
       return personneRepository.findById(id).get();
   }

    public Personne createPersonne(PersonneVo personneVo) {
        Personne personne = new Personne(personneVo.getId(), personneVo.getNom(), personneVo.getPrenom(), personneVo.getAge());
        return personneRepository.save(personne);
    }

    public PersonneVo updatePersonneVo(Long id, PersonneVo updatedPersonneVo) {
        Optional<Personne> personne = personneRepository.findById(id);
        Personne personne1 = personne.get();
        if (personne != null) {
            personne1.setId(updatedPersonneVo.getId());
            personne1.setNom(updatedPersonneVo.getNom());
            personne1.setPrenom(updatedPersonneVo.getPrenom());
            personne1.setAge(updatedPersonneVo.getAge());
            Personne updatePersonne = personneRepository.save(personne1);
            return  new PersonneVo(updatePersonne);
        }
        return  null;
    }

    public void deletePersonne(Long id){
        personneRepository.deleteById(id);
    }


}
