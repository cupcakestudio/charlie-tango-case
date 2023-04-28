import { generateBuyerProfiles } from "@/data/buyerProfiles";

/**
 * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 * @param req {import('next').NextApiRequest}
 * @param res {import('next').NextApiResponse}
 */
export default async function handler(req, res) {
  //res.status(200).json({ name: "req.body" });

  const response = await fetch(
    "https://gdbpieovhxbltmbhyctf.supabase.co/rest/v1/sellers",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.SUPABASE_KEY,
        Prefer: "return=representation",
      },
      body: JSON.stringify(req.body),
      //req.body refers to contact form body that is sent when submitting contact form
    }
  ).then((res) => res.json());
  console.log({ response });
  res.status(200).json({ response });
  //.then((data) => console.log(data));

  // // Basic example of how you can create an API route.
  // // You can open the browser, and go to http://localhost:3000/api/find-buyers to see the response.

  // // Find the zip code from the query parameters, and use it to generate a list of (fake) buyer profiles.
  // const zipCode = parseInt(req.query.zipCode || "2100");
  // const price = parseInt(req.query.price || "3000000");
  // const estateType = parseInt(req.query.estateType || "0");
  // const size = parseInt(req.query.size || "100");
  // const profilesForZipCode = generateBuyerProfiles({
  //   zipCode,
  //   price,
  //   estateTypeIndex: estateType,
  //   size,
  // });

  // // Set the cache headers, so that the response can be cached
  // res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  // // Make sure to filter out profiles based on the other query parameters. e.g. minSize, maxPrice, etc.
  // return res.status(200).json(profilesForZipCode);
}
