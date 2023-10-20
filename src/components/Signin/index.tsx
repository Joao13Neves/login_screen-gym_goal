import React from "react";
import { Container, Form, Login } from "./styles";
import FilledInput from '@mui/material/FilledInput';
import Logo from '../../../public/img/logo.svg';

export const Signin = () => {
    return (
        <Container>
            <div className="container">
                <div className="container-primary">
                    <img src={Logo} alt="Logo do Sistema" title="Logo do Sistema"/>
                </div>
                <div className="container-secundary">
                    <Form>
                        <Login>
                            <h3>Login</h3>
                        </Login>
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