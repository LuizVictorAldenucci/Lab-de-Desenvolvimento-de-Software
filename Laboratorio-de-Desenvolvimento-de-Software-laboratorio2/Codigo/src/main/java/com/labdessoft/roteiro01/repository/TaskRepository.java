package com.labdessoft.roteiro01.repository;

import com.labdessoft.roteiro01.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long>{
    // Inserir métodos;
}