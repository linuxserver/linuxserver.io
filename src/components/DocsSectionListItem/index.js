import React from 'react'
import Link from 'gatsby-link'


import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import AngleDownIcon from '@fortawesome/fontawesome-free-solid/faAngleDown'
import AngleUpIcon from '@fortawesome/fontawesome-free-solid/faAngleUp'

export default class DocsSectionListItem extends React.Component {

    constructor(props) {

        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: true
        };
    }

    toggle() {

        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <div>
                <span onClick={this.toggle} className={ this.state.isOpen ? 'document-section' : 'closed document-section'}>
                    {this.props.section.title} <FontAwesomeIcon icon={ this.state.isOpen ? AngleUpIcon : AngleDownIcon } style={ { paddingTop: '4px' } } />
                </span>
                <ul>
                    {
                        this.props.section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                <Link to={item.id} activeClassName="viewing">{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
