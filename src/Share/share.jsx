import React, { useContext } from "react";
import './share.scss'
import { useLocation } from "react-router-dom";
import { FacebookIcon, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import { FacebookShareButton } from "react-share";

import { EditCampaignContext } from "../../../App";

export default function ShareLinks(params) {
  const { data, dispatch } = useContext(EditCampaignContext);
  console.log(data.campaignId);
	const title = data.title;
	const shareUrl = "https://www.youtube.com/watch?v=Ek_PR33hjOQ"
	// const shareUrl = `http://www.youtube.com/detail/${data.campaignId}`
  return (
    <div className="share_social">
      <div className="social">
        <FacebookShareButton
          url={shareUrl}
          quote={"Hey, checkout this site"}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>

      <div className="social">
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>

      <div className="social">
        <TelegramShareButton url={shareUrl} title={title}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </div>

      <div className="social">
        <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>

      <div className="social">
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
}
