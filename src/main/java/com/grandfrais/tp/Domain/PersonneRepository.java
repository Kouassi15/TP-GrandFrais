package com.grandfrais.tp.Domain;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonneRepository extends JpaRepository<Personne ,Long> {
}
