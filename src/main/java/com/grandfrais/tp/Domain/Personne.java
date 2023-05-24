package com.grandfrais.tp.Domain;

import javax.persistence.*;

@Entity
@Table(name = "personne")
public class Personne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private  String prenom;
    private  Integer age;

    public Personne(){}

    public Personne(Long id, String nom, String prenom, Integer age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}
