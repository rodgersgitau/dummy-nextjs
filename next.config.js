// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require("next-images");
const withNx = require("@nrwl/next/plugins/with-nx");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
**/
const nextConfig = {
  webpack5: true,
  trailingSlash: true,
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    disableStaticImages: true,
    domains: [
      "localhost",
      "appspot.com",
      "savannah-emr.appspot.com",
      "lh3.googleusercontent.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = withImages(withNx(nextConfig));
