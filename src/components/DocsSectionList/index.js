import React from 'react'

import DocsSectionListItem from '../DocsSectionListItem';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import AngleDownIcon from '@fortawesome/fontawesome-free-solid/faAngleDown'
import AngleUpIcon from '@fortawesome/fontawesome-free-solid/faAngleUp'

export default class DocsSectionList extends React.Component {

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
                <div className="contents-toggle">
                    <span onClick={this.toggle}>
                        Contents <FontAwesomeIcon icon={ this.state.isOpen ? AngleUpIcon : AngleDownIcon } style={ { paddingTop: '4px' } } />
                    </span>
                </div>
                <div className={`contents ${this.state.isOpen ? 'open' : 'closed'}`}>
                    {
                        this.props.sections.map((section, index) => (
                            <div key={index}>
                                <DocsSectionListItem section={section} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
