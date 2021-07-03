/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <>
      <Container>
        {!props.user && <Redirect to="/" />}
        <Layout>
          <Leftside />
          <Main />
          <Rightside />
        </Layout>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding-top: 20px;
  max-width: 100%;
  background-color: #f5f5f5 !important;
padding:auto auto;
`;

const Layout = styled.div`
  display: flex;
justify-content: center;
  flex: 1;
  /* grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr); */
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps)(Home);
