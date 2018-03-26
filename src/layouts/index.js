import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import 'prismjs'
import 'prismjs/themes/prism-okaidia.css';

import './index.scss'
import 'bootstrap/dist/css/bootstrap.css';

const TemplateWrapper = ({ children }) => (
    <div>
        <Header/>
        <div>

            {
                children()
            }

        </div>
        <Footer/>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func
}

export default TemplateWrapper
