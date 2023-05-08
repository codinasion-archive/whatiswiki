const siteUrl = "https://whatiswiki.codinasion.org";

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  exclude: [],
  robotsTxtOptions: {
    additionalSitemaps: [],
  },
};

module.exports = config;
