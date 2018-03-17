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
                            classPrefix: "language-",
                            inlineCodeMarker: null
                        }
                    },
                    'gatsby-remark-autolink-headers'
                ]
            }
        },
        'gatsby-plugin-react-helmet'
    ]
};
