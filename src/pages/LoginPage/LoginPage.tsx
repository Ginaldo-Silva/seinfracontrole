import "./LoginPage.css";
import { StyledFormInput } from "../../components/ui/StyledFormInput";
import { StyledButton } from "../../components/ui/StyledButton";

export const LoginPage = () => {
    return(
        <div className="page">
            <div className="login_container">
                <div>
                    <h2>Login</h2>
                    <p>Faça login para poder registrar algo.</p>
                </div>
                <form>
                    <StyledFormInput 
                        name="user"
                        type="text"
                        placeholder="Usuario"
                        aditionalStyles="form_input"
                        required
                    />
                    <StyledFormInput
                        name="passsword"
                        type="password"
                        placeholder="Senha"
                        aditionalStyles="form_input"
                        required
                    />
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