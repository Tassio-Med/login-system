import React from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <Button 
        Text="Sair"
        onClick={() => [signout(), navigate("/")]}
      >
        Sair
      </Button>
    </div>
  )
}

export default Home