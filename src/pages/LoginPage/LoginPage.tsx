import "./LoginPage.css";
import { StyledFormInput } from "../../components/ui/StyledFormInput";

export const LoginPage = () => {
    return(
        <div className="page">
            <div className="login_container">
                <h2>Login</h2>
                <form>
                    <StyledFormInput />
                </form>
            </div>
        </div>
    )
}