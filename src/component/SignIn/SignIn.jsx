import React from 'react'
import { MainContainer, SignInButton, SignInForm, SignInFormInput, SignInLink, SignInLinkText, SignInText, SignInTitle } from './SignIn.styled'

const SignIn = () => {
  return (
      <MainContainer>
          <SignInTitle>Sign In</SignInTitle>
          <SignInText>Welcome! Please enter your credentials to login to the platform:</SignInText>
      <SignInForm>
          <label>
              <SignInFormInput type="email" placeholder='Email' name='email' />
              </label>
              <label>
              <SignInFormInput type="password" placeholder='Password' name='password' />
              </label>
              <SignInButton type='submit'>Sign In</SignInButton>
          </SignInForm>
          <div>
            <SignInLinkText>Don’t have an account? <SignInLink>Sign Up</SignInLink></SignInLinkText>
            </div>
      </MainContainer>
  )
}

export default SignIn