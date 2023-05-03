export default async function handler(req, res) {
  // fetcher api med props og læser state data (sellerData)
  fetch("https://gdbpieovhxbltmbhyctf.supabase.co/rest/v1/sellers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.SUPABASE_KEY,
      Prefer: "return=representation",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      res.status(200).json({ data });
    });
}
