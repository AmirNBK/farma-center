const withVideos = require('next-videos');

module.exports = withVideos({
  images: {
    unoptimized: true,
  },
});
