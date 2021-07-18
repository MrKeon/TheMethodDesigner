require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const router = require("./App.tsx").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("http//www.themethoddesigner.com")
            .save("./src/sitemap.xml")
      );
  }
  
  generateSitemap();
  