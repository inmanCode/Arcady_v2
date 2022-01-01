module.exports = {
  reactStrictMode: true,
  i18n: {
    localeDetection: false,
    locales: ["en", "nl"],
    defaultLocale: "nl",
  },
  images: {
    domains: ['a.storyblok.com'],
    disableStaticImages: true,
  },
  webpack(config){
    config.module.rules.push({
      test: /\.svg$/,
      use: [ {loader: '@svgr/webpack', options:{icon: true } }],
    })
    return config
  }
}
