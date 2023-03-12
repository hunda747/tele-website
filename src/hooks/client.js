import { createClient } from "contentful";

export default function clients(params) {
  console.log("token");
  console.log(process.env.REACT_APP_ACCESS_TOKEN);
  return process.env.REACT_APP_ACCESS_TOKEN;
  // return createClient({
  //   space: "o6quhc28ezlz",
  //   accessToken: "NV-QvgZWq8aDVHmTslyXGZsdAYDd67bSDIcqU24V75A",
  //   host: "preview.contentful.com",
  // });
}
