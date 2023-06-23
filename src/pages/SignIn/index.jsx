import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';


const SignIn = () => {
  const {signin} = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if(!email | !senha){
      setError("Preencha todos o campos!");
      return;
    }

    const res = signin(email, senha);

    if(res){
      setError(res);
      return;
    }
    navigate("/home");
  };

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
        type="password"
        placeholder='Digite sua senha'
        value={pwd}
        onChange={(e) => [setPwd(e.target.value), setError("")]}
      />
      <div>
        <p>{error}</p>
      </div>
      <Button Text="Entrar" onClick={handleLogin}/>
      <div>
        <p>Não tem uma conta?</p>
        <strong>
          <Link to="/signup">Registre-se</Link>
        </strong>
      </div>
    </div>
  )
}

export default SignIn