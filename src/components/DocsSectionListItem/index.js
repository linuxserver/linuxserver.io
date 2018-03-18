import React from 'react'
import Link from 'gatsby-link'

export default class DocsSectionListItem extends React.Component {

    constructor(props) {

        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
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
                <span onClick={this.toggle} className={ this.state.isOpen ? 'documentSection' : 'closed documentSection'}>
                    {this.props.section.title}
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
