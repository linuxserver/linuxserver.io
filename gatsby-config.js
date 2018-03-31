module.exports = {
    siteMetadata: {
        title: 'LinuxServer'
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/docs`,
                name: "markdown-pages-docs"
            }
        }, {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-"
                        }
                    },
                    'gatsby-remark-autolink-headers'
                ]
            }
        }, {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: "./src/images/favicon.png",
                injectHTML: true,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass'
    ]
};
