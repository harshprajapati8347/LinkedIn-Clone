import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ErrorOutlineSharpIcon from "@material-ui/icons/ErrorOutlineSharp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import HeaderInfo from "../../components/util/HeadLine";
import { LinkedInLightBlue } from "../../assets/Colors";
// import { LinkedInJobAdd } from "../../assets/images/images";
import Style from "./Style";

const Widgets = () => {
  const classes = Style();
  const [expand, setExpand] = useState(false);

  return (
    <div className={classes.widgets}>
      <Paper className={classes.widgets__top}>
        <div className={classes.heading}>
          <h4>LinkedIn News</h4>
          <ErrorOutlineSharpIcon />
        </div>
        {top_1.map((title, i) => (
          <HeaderInfo
            key={`widgets-top_1_${i}`}
            Icon={
              <FiberManualRecordIcon
                style={{
                  color: LinkedInLightBlue,
                  fontSize: 12,
                }}
              />
            }
            title={title}
            time={true}
            count={true}
          />
        ))}
        {expand &&
          top_2.map((title, i) => (
            <HeaderInfo
              key={`widgets-top_2_${i}`}
              Icon={
                <FiberManualRecordIcon
                  style={{ color: LinkedInLightBlue, fontSize: 12 }}
                />
              }
              title={title}
              time={true}
              count={true}
            />
          ))}
        <div className={classes.expand} onClick={() => setExpand(!expand)}>
          <h4>{expand ? "Show less" : "Show more"}</h4>
          <ExpandMoreIcon
            style={{ transform: expand ? "rotate(180deg)" : "" }}
          />
        </div>
      </Paper>
      <div className={classes.widgets__bottom}>
        {/* <Paper className={classes.addBanner}>
          <img src={LinkedInJobAdd} alt="linked-in-jub-add" />
        </Paper> */}
        <div className={classes.footer_extra_links}>
          <span>
            <a href="/">About</a>
            <a href="/">Privacy & Terms</a>

            <a href="/">Help Center</a>
          </span>
          <span>
            <a href="/">Accessibility</a>

            <a href="/">Ad Choices</a>
            <a href="/">Advertising</a>
          </span>
          <span>
            <a href="/">Business Services </a>
            <a href="/">Get the app</a>

            <a href="/">More</a>
          </span>
        </div>

        {/* About Author */}
        <div className={classes.about}>
          <h4>
            <a
              target="_blank"
              href="https://harsh-prajapati.netlify.app/"
              rel="noreferrer"
            >
              Author Info
            </a>
          </h4>
          <div>
            {author.map(({ src, url }, i) => (
              <a
                href={`${url}`}
                key={`author-link-${i}`}
                rel="noreferrer nofollow"
                target="_blank"
              >
                {src}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const top_1 = [
  "Indian fintech giant Razorpay is now the most valued fintech startup in India",
  "Bengluru has the second highest number of skilled AI workers in the world.",
  "Infosys: 4th Indian firm to hit Rs. 8 trillion market cap.",
  "Tata Motors to invest 700cr into in brand new EV division.",
];

const top_2 = [
  "Google cracks down on loan apps",
  "Byju’s new acquisition",
  "Lost password? That'll be $220M",
  "Tesla gets an India address",
  "India Inc returns gingerly to office",
];

const author = [
  { src: <GitHubIcon />, url: "https://github.com/harshprajapati8347" },
  {
    src: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/harsh-prajapati-1780921aa/",
  },
  {
    src: <YouTubeIcon />,
    url: "https://www.youtube.com/channel/UCGrekJRFqeI7SP4o06CuxPg",
  },
  { src: <InstagramIcon />, url: "https://www.instagram.com/_h_a_r_s_h26/" },
  { src: <TwitterIcon />, url: "https://twitter.com/Harsh62300719" },
];

export default Widgets;
