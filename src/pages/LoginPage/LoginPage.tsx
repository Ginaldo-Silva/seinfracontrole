import "./LoginPage.css";
import { StyledFormInput } from "../../components/ui/StyledFormInput";

import { StyledButton } from "../../components/ui/StyledButton";

export const LoginPage = () => {
    return(
        <div className="page">
            <div className="login_container">
                <h2>Login</h2>
                <p>Faça login para poder registrar algo.</p>
                <form>
                    <StyledFormInput 
                        placeholder="Usuario"
                        aditionalStyles="form_input"
                    />
                    <StyledFormInput 
                        placeholder="Senha"
                        aditionalStyles="form_input"
                    />
                    <StyledButton children="Entrar" type="submit" aditionalstyle="submit_login_btn" />
                </form>
            </div>
        </div>
    )
}