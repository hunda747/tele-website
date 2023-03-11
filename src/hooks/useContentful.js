import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "o6quhc28ezlz",
    accessToken: "NV-QvgZWq8aDVHmTslyXGZsdAYDd67bSDIcqU24V75A",
    host: "preview.contentful.com",
  });

  const getBlogs = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "blogs",
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
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getBlogs };
};

export default useContentful;
