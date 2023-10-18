import React from "react";
import { Container, Form, Logo } from "./styles";
import FilledInput from '@mui/material/FilledInput';

export const Signin = () => {
    return (
        <Container>
            <div className="container">
                <div className="container-primary">
                    
                </div>
                <div className="container-secundary">
                    <Form>
                        <Logo>
                            <h3>Login</h3>
                        </Logo>
                        <FilledInput
                            id="filled-adornment-weight"
                            className="input"
                            placeholder="Login"
                            />
                        <FilledInput
                            id="filled-adornment-weight"
                            className="input"
                            type="password"
                            placeholder="Senha"
                            />   
                    </Form>
                </div>
            </div>
        </Container>
    )
}