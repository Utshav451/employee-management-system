package com.utshav.ems_backend.service.impl;

import com.utshav.ems_backend.dto.EmployeeDto;
import com.utshav.ems_backend.entity.Employee;
import com.utshav.ems_backend.exception.EmployeeNotFoundException;
import com.utshav.ems_backend.mapper.EmployeeMapper;
import com.utshav.ems_backend.respository.EmployeeRepository;
import com.utshav.ems_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto){
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
    @Override
    public EmployeeDto getEmployeeById(Long id) throws EmployeeNotFoundException {
        Employee emp =employeeRepository.findById(id).orElseThrow(()->new EmployeeNotFoundException("Employee not found"));
        return EmployeeMapper.mapToEmployeeDto(emp);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees=employeeRepository.findAll();
        return employees.stream().map(EmployeeMapper::mapToEmployeeDto).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) throws EmployeeNotFoundException {
        Employee employee=employeeRepository.findById(employeeId).orElseThrow(()->new EmployeeNotFoundException("Employee not found"));
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());
        employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public void deleteEmployee(Long employeeId) throws EmployeeNotFoundException {
        Employee employee=employeeRepository.findById(employeeId).orElseThrow(()->new EmployeeNotFoundException("Employee not found"));
        employeeRepository.deleteById(employeeId);
    }

}
