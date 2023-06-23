import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
  const navigate = useNavigate();
  const {signup} = useAuth();


  const [email, setEmail] = useState("");
  const [emailConfig, setEmailConfig] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if(!email | !emailConfig | !pwd){
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConfig) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if(res){
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  }


  return (
    <div>
       <div>
        <h3>SISTEMA DE LOGIN</h3>
      </div>
      <input
        type="email"
        placeholder='Digite seu e-mail'
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
      />
      <input
        type="email"
        placeholder='Confirme seu e-mail'
        value={emailConfig}
        onChange={(e) => [setEmailConfig(e.target.value), setError("")]}
      />
      <input
        type="password"
        placeholder='Digite sua senha'
        value={pwd}
        onChange={(e) => [setPwd(e.target.value), setError("")]}
      />
      <div>
        <p>{error}</p>
      </div>
      <Button Text="Entrar" onClick={handleSignup}/>
      <div>
        <p>Não tem uma conta?</p>
        <strong>
          <Link to="/">Entre</Link>
        </strong>
      </div>
    </div>
  )
}

export default SignUp