import { createClient } from "contentful";
import clients from "./client";

const useHero = () => {
  console.log("hero token");
  console.log(process.env.REACT_APP_ACCESS_TOKEN);
  const client = createClient({
    space: "o6quhc28ezlz",
    accessToken: "NV-QvgZWq8aDVHmTslyXGZsdAYDd67bSDIcqU24V75A",
    host: "preview.contentful.com",
  });
  const tl = clients();
  console.log(tl);
  const getHeros = async () => {
    try {
      const entries = await client.getEntries({
        // content_type: "statistics",
        content_type: "heroImage",
        select: "fields",
      });
      // console.log(entries);

      const sanitizedEntries = entries.items.map((item) => {
        // console.log(item);
        const image = item?.fields?.image?.fields?.file?.url;
        return {
          ...item.fields,
          image,
        };
      });

      return { sanitizedEntries };
    } catch (error) {
      console.log(`Error fetching hero ${error}`);
    }
  };

  return { getHeros };
};

export default useHero;
