package com.utshav.ems_backend.controller;

import com.utshav.ems_backend.dto.EmployeeDto;
import com.utshav.ems_backend.entity.Employee;
import com.utshav.ems_backend.exception.EmployeeNotFoundException;
import com.utshav.ems_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto created =employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(created, HttpStatus.CREATED);

    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId) throws EmployeeNotFoundException {
        EmployeeDto emp=employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(emp);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> employees=employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,@RequestBody EmployeeDto updatedEmployee) throws EmployeeNotFoundException {
        EmployeeDto employeeDto=employeeService.updateEmployee(employeeId,updatedEmployee);
        return ResponseEntity.ok(employeeDto);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) throws EmployeeNotFoundException {
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Deleted Successfully");
    }
}
