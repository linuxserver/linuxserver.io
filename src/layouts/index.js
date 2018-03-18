import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.scss'
import 'bootstrap/dist/css/bootstrap.css';

import 'prismjs'
import 'prismjs/themes/prism-okaidia.css';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet title="LinuxServer" meta={
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
        <Header/>
        <div>

            {
                children()
            }

        </div>
        {/* <Footer/> */}
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func
}

export default TemplateWrapper
