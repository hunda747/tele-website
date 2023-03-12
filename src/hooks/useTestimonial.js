import { createClient } from "contentful";

export default function useTestimonial() {
  const client = createClient({
    space: "o6quhc28ezlz",
    accessToken: "NV-QvgZWq8aDVHmTslyXGZsdAYDd67bSDIcqU24V75A",
    host: "preview.contentful.com",
  });

  const getTestimonial = async () => {
    try {
      const entries = await client.getEntries({
        // content_type: "stat",
        content_type: "testimonies",
        select: "fields",
      });
      // console.log(entries);

      const sanitizedEntries = entries.items.map((item) => {
        // console.log(item);
        const image = item?.fields?.image?.fields?.file?.url;
        const author = item?.fields?.image?.fields?.title;
        const description = item?.fields?.image?.fields?.description;
        return {
          ...item.fields,
          image,
          author,
          description,
        };
      });

      return { sanitizedEntries };
    } catch (error) {
      console.log(`Error fetching test ${error}`);
    }
  };

  return { getTestimonial };
}
