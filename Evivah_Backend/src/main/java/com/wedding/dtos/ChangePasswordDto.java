package com.wedding.dtos;

public class ChangePasswordDto {
	private String email;
	private String oldPassword;
	private String newPassword;
	
	public ChangePasswordDto() {
		
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	@Override
	public String toString() {
		return "ChangePasswordDto [email=" + email + ", oldPassword=" + oldPassword + ", newPassword=" + newPassword
				+ "]";
	}
	
	
	
}
