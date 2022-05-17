import React, {useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { AUTH_TOKEN } from '../constants';

import Header from '../partials/Header';
import forms from '@tailwindcss/forms';

const SignUp = () => {

  const SIGNUP_MUTATION = gql`
  mutation CreateUserMutation(
    $email: String!
    $password: String!
    $name: String!
  ) {
    createUser(
      email: $email
      password: $password
      username: $name
    ) 
    {
      user {
        username
        id
      }
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation TokenAuthMutation(
    $username: String!
    $password: String!
  ) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    name: ''  
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      username: formState.email,
      password: formState.password
    },
    onCompleted: ({ tokenAuth }) => {
      localStorage.setItem(AUTH_TOKEN, tokenAuth.token);
      console.log(tokenAuth.token);
      navigate('/');
    }
  });
  
  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ createUser }) => {
     // localStorage.setItem(AUTH_TOKEN, signup.token);
      console.log(createUser);
      navigate('/');
    }
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
              {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
           <h1 className="h1"> {formState.login ? 'Login' : 'Sign Up'}</h1>
        </div>

        <div className="max-w-sm mx-auto">
          <div className="flex flex-column"> 
          {!formState.login && (
          <input
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Your name"
          />
        )}
        <br></br>
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value
            })
          }
          type="text"
          placeholder="Your email address"
        />
        <br></br>
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value
            })
          }
          type="password"
          placeholder="Choose a safe password"
          />
          </div>

          <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button 
                        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                        onClick={formState.login ? login : signup}>
                        {formState.login ? 'login' : 'create account'}
                      </button>
                    </div>
                    <div className="w-full px-3">
                    <button 
                        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                        onClick={(e) =>
                          setFormState({
                            ...formState,
                            login: !formState.login
                          })
                        }
                      >
                        {formState.login
                          ? 'need to create an account?'
                          : 'already have an account?'}
                      </button>
                      </div>
            </div>
                  
        </div>
    </div>
  );
}

export default SignUp;