package com.utshav.ems_backend.service;

import com.utshav.ems_backend.dto.EmployeeDto;
import com.utshav.ems_backend.exception.EmployeeNotFoundException;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(Long id) throws EmployeeNotFoundException;
    List<EmployeeDto> getAllEmployees();
    EmployeeDto updateEmployee(Long employeeId,EmployeeDto updatedEmployee) throws EmployeeNotFoundException;
    void deleteEmployee(Long employeeId) throws EmployeeNotFoundException;
}
