import { useState } from "react";

import Validation from "../../utils/loginValidation";

import "./LoginPage.css";
import { StyledFormInput } from "../../components/ui/StyledFormInput";
import { StyledButton } from "../../components/ui/StyledButton";

export const LoginPage = () => {
    const [values, setValues] = useState({
        user: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
    
    return(
        <div className="page">
            <div className="login_container">
                <div>
                    <h2>Login</h2>
                    <p>Faça login para poder registrar algo.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <StyledFormInput 
                        name="user"
                        type="text"
                        placeholder="Usuario"
                        aditionalStyles="form_input"
                        required
                        onChange={handleInput}
                    />
                    {errors.user && <span className="text_danger">{errors.user}</span>}
                    <StyledFormInput
                        name="passsword"
                        type="password"
                        placeholder="Senha"
                        aditionalStyles="form_input"
                        required
                        onChange={handleInput}
                    />
                    {errors.password && <p className="text_danger">{errors.password}</p>}
                    <StyledButton 
                        children="Entrar" 
                        type="submit" 
                        aditionalstyle="submit_login_btn" 
                    />
                </form>
            </div>
        </div>
    )
}