export default function handler(req, res) {
    const base = "https://imatinations.com";
  
    const routes = [
      "/",
      "/about",
      "/beauty-photography",
      "/fashion-photography",
      "/couples-photography",
      "/headshot-photography"
    ];
  
    const xml = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${routes
          .map(
            (route) => `
        <url>
          <loc>${base}${route}</loc>
          <changefreq>monthly</changefreq>
          <priority>${route === "/" ? "1.0" : "0.8"}</priority>
        </url>`
          )
          .join("")}
      </urlset>
    `;
  
    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(xml.trim());
  }
  