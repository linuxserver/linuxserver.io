import React from 'react'

import DocsSectionListItem from '../DocsSectionListItem';

export default class DocsSectionList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                {
                    this.props.sections.map((section, index) => (
                        <div key={index}>
                            <DocsSectionListItem section={section} />
                        </div>
                    ))
                }
            </div>
        )
    }
}
