// /* eslint-disable jsx-a11y/anchor-is-valid */
// import styled from "styled-components";

// const Rightside = (props) => {
//   return (
import React from "react";
import "./Rightside.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  const mostViewedCourses = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="widgetsCover">
        <div className="widgets">
          <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
          </div>
          {newsArticle("Coronavirus: UK updates", "Top news - 886 readers")}
          {newsArticle("Tesla hits new heights", "Cars & Auto - 306 readers")}
          {newsArticle("Is Redux too good?", "Code - 125 readers")}
          {newsArticle("Bitcoin breaks $22k", "Crypto - 8000 readers")}
          {newsArticle("MERN stack is Easy?", "Code - 1225 readers")}
          {newsArticle(
            "Will India whitewash the T20 series against Eng?",
            "Code - 1500 readers"
          )}
        </div>

        <div id="widgetsMostViewedCources" className="widgets">
          <div className="widgets__header">
            <h2>Today’s most viewed courses</h2>
            <InfoIcon />
          </div>
          {mostViewedCourses(
            "The Six morning habits of High Per..",
            "Pete Mockaitis | How to be awsome at your .."
          )}
          {mostViewedCourses(
            "Speaking Confidently and Effectively",
            "Pete Mockaitis | How to be awsome at your .."
          )}
          {mostViewedCourses(
            "Communication Foundations",
            "Brenda Bialey | Hughes and Tetina kolovou"
          )}
        </div>
      </div>
    </>
  );
};

export default Widgets;

//     <>
//     <Container>
//       <FollowCard>
//         <Title>
//           <h2>Add to your feed</h2>
//           <img src="/images/feed-icon.svg" alt="" />
//         </Title>

//         <FeedList>
//           <li>
//             <a>
//               <Avatar />
//             </a>
//             <div>
//               <span>#LinkedIn</span>
//               <button>Follow</button>
//             </div>
//           </li>
//           <li>
//             <a>
//               <Avatar />
//             </a>
//             <div>
//               <span>#Video</span>
//               <button>Follow</button>
//             </div>
//           </li>
//         </FeedList>

//         <Recommendation>
//           View all recommendations
//           <img src="/images/right-icon.svg" alt="" />
//         </Recommendation>
//       </FollowCard>
//       <BannerCard>
//         <img src="/images/right-bottom.png" alt="" />
//       </BannerCard>
//     </Container></>
//   );
// };

// const Container = styled.div`
//   grid-area: rightside;
//   flex: 0.25;
// `;

// const FollowCard = styled.div`
//   text-align: center;
//   overflow: hidden;
//   margin-bottom: 8px;
//   background-color: #fff;
//   border-radius: 5px;
//   position: relative;
//   border: none;
//   box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
//   padding: 12px;
// `;

// const Title = styled.div`
//   display: inline-flex;
//   align-items: center;
//   justify-content: space-between;
//   font-size: 16px;
//   width: 100%;
//   color: rgba(0, 0, 0, 0.6);
// `;

// const FeedList = styled.ul`
//   margin-top: 16px;
//   li {
//     display: flex;
//     align-items: center;
//     margin: 12px 0;
//     position: relative;
//     font-size: 14px;
//     & > div {
//       display: flex;
//       flex-direction: column;
//     }

//     button {
//       background-color: transparent;
//       color: rgba(0, 0, 0, 0.6);
//       box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
//       padding: 16px;
//       align-items: center;
//       border-radius: 15px;
//       box-sizing: border-box;
//       font-weight: 600;
//       display: inline-flex;
//       justify-content: center;
//       max-height: 32px;
//       max-width: 480px;
//       text-align: center;
//       outline: none;
//     }
//   }
// `;

// const Avatar = styled.div`
//   background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;
//   width: 48px;
//   height: 48px;
//   margin-right: 8px;
// `;

// const Recommendation = styled.a`
//   color: #0a66c2;
//   display: flex;
//   align-items: center;
//   font-size: 14px;
// `;

// const BannerCard = styled(FollowCard)`
//   img {
//     width: 100%;
//     height: 100%;
//   }
// `;

// export default Rightside;
