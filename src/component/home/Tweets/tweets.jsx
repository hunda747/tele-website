import React from "react";
import "./tweets.scss";

import TweetEmbed from "react-tweet-embed";

export default function Tweets(params) {
  return (
    <div className="tweets">
      <div className="wrapper">
        <div className="tweets">
          <div className="tweet">
            {/* 1633521996800614414 */}
            <TweetEmbed tweetId="1633521996800614414" />
          </div>
        </div>
      </div>
    </div>
  );
}
