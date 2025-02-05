import React, { useState } from "react";
import {
  ButtonSubmit,
  Form,
  Error,
  Social,
  SocialButton,
} from "./LoginForm.styles";
import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

interface LoginFormData {
  email: string;
  password: string;
  error: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    error: "",
  });
  const [loading, setLoading] = useState(false); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setFormData({ ...formData, error: "Preencha todos os campos." });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormData({ ...formData, error: "Insira um email válido." });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1200);

    setFormData({ ...formData, error: "" });
 
  };


  return (
    <Form onSubmit={handleSubmit}>
      <h2>Please Enter your Account details</h2>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="exemplo@email.com"
        value={formData.email}
        disabled={loading}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>setFormData({ ...formData, password: e.target.value })}
      />
      {formData.error && <Error>{formData.error}</Error>}
      <a href="/">Forgot Password</a>
      <ButtonSubmit type="submit" disabled={loading}>
        {loading ? "..." : "Sign in"}
      </ButtonSubmit>
      <Social>
        <SocialButton>
          <FcGoogle />
        </SocialButton>
        <SocialButton>
          <FaGithub />
        </SocialButton>
        <SocialButton>
          <FaFacebook color="#1877F2" />
        </SocialButton>
      </Social>
    </Form>
  );
};

export default LoginForm;
