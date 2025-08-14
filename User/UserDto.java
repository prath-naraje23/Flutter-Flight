package com.app.dto;

import com.app.pojos.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDto {


	
	private String email;
	
	private String password;
public String getEmail () {
	return this .email;
	
}
public String getPassword()
{
	return this.password;

	}
	
}
