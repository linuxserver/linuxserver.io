module.exports = {
    siteMetadata: {
        title: 'LinuxServer'
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content/docs`,
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
                    }
                ]
            }
        },
        'gatsby-plugin-react-helmet'
    ]
};
