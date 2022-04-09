package com.wedding.entities;

import java.io.Serializable;

public class AuthenticationResponse implements Serializable {


	private static final long serialVersionUID = -5219894033763454603L;
	/**
	 * 
	 */
	private final String jwt;

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }
}