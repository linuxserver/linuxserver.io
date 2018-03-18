import React from 'react'
import Helmet from 'react-helmet'

const TitleAndMetaTags = ({ title }) => (

    <Helmet title={title} meta={
        [
            {
                name: 'description',
                content: 'Community-based Docker images'
            }, {
                name: 'keywords',
                content: 'linux,server,docker,guides,foss,oss,open source'
            }
        ]
    }/>
)

export default TitleAndMetaTags
