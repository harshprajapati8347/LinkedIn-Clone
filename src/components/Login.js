/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import { connect } from "react-redux";
import { signInAPI } from "../actions";
import { Redirect } from "react-router";

const Login = (props) => {
  return (
    <>
      <Container>
        {props.user && <Redirect to="/home" />}
        <Nav>
          <a href="/">
            <img src="/images/login-logo.svg" alt="" />
          </a>
          <div>
            <Join onClick={() => props.signIn()}>Join now</Join>
            <SignIn onClick={() => props.signIn()}>Sign in</SignIn>
          </div>
        </Nav>
        <Section>
          <Hero>
            <h1>Welcome to your professional community</h1>
            <img
              src="https://static-exp1.licdn.com/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn"
              alt=""
            />
          </Hero>
          <Additional>
            <button onClick={() => props.signIn()}>
              <span>Search for a job</span>
              <img src="/images/searchForJob.svg" alt="" />
            </button>

            <button onClick={() => props.signIn()}>
              <span> Find a person you know</span>

              <img src="/images/searchForJob.svg" alt="" />
            </button>

            <button onClick={() => props.signIn()}>
              <span> Learn a new skill</span>

              <img src="/images/searchForJob.svg" alt="" />
            </button>
          </Additional>

          {/* <Quotes>
            <h1>Connect to Opportunity</h1>
            <h1>Responsibility Added To Your Profile</h1>
          </Quotes> */}

          {/* <img src="/images/login-hero.svg" alt="" /> */}
        </Section>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 4px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    cursor: pointer;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 11px 22px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
    border: 1px solid blue;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  /* padding-top: 40px; */
  padding: 40px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: 120px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

// const Quotes = styled.div`
//   h1 {
//     padding-top: 35px;
//     width: 100%;
//     font-size: 30px;
//     color: #2977c9;
//     font-weight: 500;
//     line-height: 50px;
//     @media (max-width: 768px) {
//       text-align: center;
//       font-size: 20px;
//       width: 100%;
//       line-height: 2;
//     }
//   }
// `;

// const Form = styled.div`
//   margin-top: 100px;
//   width: 408px;
//   @media (max-width: 768px) {
//     margin-top: 20px;
//   }
// `;

// const Google = styled.button`
//   display: flex;
//   justify-content: center;
//   background-color: #fff;
//   align-items: center;
//   height: 56px;
//   width: 100%;
//   border-radius: 28px;
//   box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
//     inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);

//   vertical-align: middle;
//   z-index: 0;
//   transition-duration: 167ms;
//   font-size: 20px;
//   color: rgba(0, 0, 0, 0.6);
//   &:hover {
//     background-color: rgba(207, 207, 207, 0.25);
//     color: rgba(0, 0, 0, 0.75);
//   }
// `;

const Additional = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  button {
    background: transparent;
    align-items: center;
    justify-content: left;
    border: 1.5px solid lightgray;
    border-radius: 7px;
    height: 60px;
    width: 408px;
    margin: 0 0 16px;
    padding: 16px;
    font-size: 20px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
    text-align: left;
    cursor: pointer;
    &:hover {
      -webkit-box-shadow: 0 10px 6px -6px #ecefe9;
      -moz-box-shadow: 0 10px 6px -6px #ecefe9;
      box-shadow: 0 10px 6px -6px #ecefe9;
    }
  }
  img {
    float: right;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;
