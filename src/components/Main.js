/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getArticlesAPI } from "../actions";
import InputOption from "./InputOption";
import PostModel from "./PostModel";
import ReactPlayer from "react-player";

import TodayIcon from "@material-ui/icons/Today";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventIcon from "@material-ui/icons/Event";
import ViewDayIcon from "@material-ui/icons/ViewDay";

const Main = (props) => {
  const [showModel, setShowModel] = useState("close");

  useEffect(() => {
    props.getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModel) {
      case "open":
        setShowModel("close");
        break;
      case "close":
        setShowModel("open");
        break;
      default:
        setShowModel("close");
        break;
    }
  };
  return (
    <>
      <Container>
        <ShareBox>
          <div>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} alt="" />
            ) : (
              <img src="/images/user.svg" alt="" />
            )}
            <button
              onClick={handleClick}
              disabled={props.loading ? true : false}
            >
              Start a post
            </button>
          </div>
          <div
            className="FeedInputOptions"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <InputOption Icon={TodayIcon} title="Photo" color="#70b5f9" />
            <InputOption
              Icon={SubscriptionsIcon}
              title="Video"
              color="#E7A33E"
            />
            <InputOption Icon={EventIcon} title="Event" color="#C0CBCD" />
            <InputOption
              Icon={ViewDayIcon}
              title="Write article"
              color="#7FC15E"
            />
          </div>
        </ShareBox>
        <Content>
          {props.loading && <img src="/images/spin-loading.svg" alt="" />}
          {props.articles.length > 0 &&
            props.articles.map((article, key) => (
              <Article key={key}>
                <SharedActor>
                  <a>
                    <img src={article.actor.image} alt="" />
                    <div>
                      <span>{article.actor.title}</span>
                      <span>{article.actor.description}</span>
                      {/* <span>{article.actor.date.toDate().toLocalDateString()}</span> */}
                    </div>
                  </a>
                  <button>
                    <img src="/images/ellipsis.svg" alt="" />
                  </button>
                </SharedActor>
                <Description>{article.description}</Description>
                <SharedImg>
                  <a>
                    {!article.shareImg && article.video ? (
                      <ReactPlayer width={"100%"} url={article.video} />
                    ) : (
                      article.shareImg && <img src={article.shareImg} alt="" />
                    )}
                  </a>
                </SharedImg>
                <SocialCounts>
                  <li>
                    <button>
                      <img src="/images/liked.svg" alt="LIKE" />
                      <img src="/images/praised.svg" alt="PRAISE" />
                      <img src="/images/empathy.svg" alt="EMPATHY" />
                      <span>75</span>
                    </button>
                  </li>
                  <li>
                    <a>{article.comments}</a>
                  </li>
                </SocialCounts>
                <SocialActions>
                  <button>
                    <img src="/images/like.svg" alt="" />
                    <span>Like</span>
                  </button>

                  <button>
                    <img src="/images/comment.svg" alt="" />
                    <span>Comment</span>
                  </button>

                  <button>
                    <img src="/images/share.svg" alt="" />
                    <span>Share</span>
                  </button>

                  <button>
                    <img src="/images/send.svg" alt="" />
                    <span>Send</span>
                  </button>
                </SocialActions>
              </Article>
            ))}
        </Content>
        <PostModel showModel={showModel} handleClick={handleClick} />
      </Container>
    </>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: #fff;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hodden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
    }
    span {
      text-align: left;
      &:first-child {
        font-size: 16px;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }
      &:nth-child(n + 1) {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: $f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: left;
  margin: 0;
  left: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    background-color: transparent;
    border: none;

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
