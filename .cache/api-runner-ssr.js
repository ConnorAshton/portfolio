var plugins = [{
      plugin: require('/Users/connorashton/Development/connor-ashton-portfolio/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[],"trackingId":"UA-76366395-2","head":false,"anonymize":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"]},
    },{
      plugin: require('/Users/connorashton/Development/connor-ashton-portfolio/node_modules/gatsby-plugin-canonical-urls/gatsby-ssr.js'),
      options: {"plugins":[],"siteUrl":"https://gatsby-starter-typescript-plus.netlify.com"},
    },{
      plugin: require('/Users/connorashton/Development/connor-ashton-portfolio/node_modules/gatsby-plugin-styled-components/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/connorashton/Development/connor-ashton-portfolio/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/connorashton/Development/connor-ashton-portfolio/node_modules/gatsby-plugin-typography/gatsby-ssr.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography.js"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  let results = plugins.map(plugin => {
    if (plugin.plugin[api]) {
      const result = plugin.plugin[api](args, plugin.options)
      return result
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
