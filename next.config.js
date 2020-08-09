/* eslint-disable import/no-extraneous-dependencies */
const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withOffline = require("next-offline");

module.exports = withOffline(
  withFonts(
    withOptimizedImages({
      /* config for next-optimized-images */
      // inlineImageLimit: -1,
    })
  )
);
