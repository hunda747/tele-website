import { createClient } from "contentful";

const useStat = () => {
  const client = createClient({
    space: "o6quhc28ezlz",
    accessToken: "NV-QvgZWq8aDVHmTslyXGZsdAYDd67bSDIcqU24V75A",
    host: "preview.contentful.com",
  });
  const getStats = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "blog",
        select: "fields",
      });
      // content_type: "blogs",
      console.log(entries);

      // const sanitizedEntries = entries.items.map((item) => {
      //   // console.log(item);
      //   const image = item?.fields?.image?.fields?.file?.url;
      //   return {
      //     ...item.fields,
      //     image,
      //   };
      // });

      return { getStats };
    } catch (error) {
      console.log(`Error fetching stat ${error}`);
    }
  };

  return { getStats };
};

export default useStat;
