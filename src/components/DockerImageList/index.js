import React from 'react'
import ReactTable from 'react-table'
import Link from 'gatsby-link'

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import DockerIcon from '@fortawesome/fontawesome-free-brands/faDocker';

import { mapImages, commarise, commaAwareSort, wildcardFilter } from '../../utils/imageUtils';

export default class DockerImageList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            images: 0
        }
    }

    componentDidMount() {

        fetch('https://next.linuxserver.io/dockerhub-jsonstats/stats')
            .then(response => response.json())
            .then(result => {

                this.setState({
                    isLoaded: true,
                    images: mapImages(result)
                });
            });
    }

    render() {

        const { error, isLoaded, images } = this.state;

        const columns = [
            { Header: 'Image', accessor: 'image', filterable: true, style: { 'textAlign': 'left', paddingLeft: '20px', textTransform: 'capitalize' }, filterMethod: wildcardFilter },
            { Header: 'Pulls', accessor:'pulls', style: { 'textAlign': 'right' }, className: 'pull-count', sortMethod: commaAwareSort },
            { Header: 'x86', accessor: 'x86Link', sortable: false },
            { Header: 'aarch64', accessor: 'aarch64Link', sortable: false },
            { Header: 'armhf', accessor: 'armhfLink', sortable: false }
        ];

        const data = Object.keys(images).sort().map((appName, index) => {

            let x86Link = images[appName].x86 ? <a href={images[appName].x86.url} target="_blank"><FontAwesomeIcon icon={DockerIcon} /></a> : <span />;
            let aarch64Link = images[appName].aarch64 ? <a href={images[appName].aarch64.url} target="_blank"><FontAwesomeIcon icon={DockerIcon} /></a> : <span />;
            let armhfLink = images[appName].armhf ? <a href={images[appName].armhf.url} target="_blank"><FontAwesomeIcon icon={DockerIcon} /></a> : <span />;

            return {
                image: appName,
                pulls: commarise(images[appName].pulls),
                x86Link: x86Link,
                aarch64Link: aarch64Link,
                armhfLink: armhfLink
            }
        });

        if (isLoaded) {
            return <ReactTable data={data} columns={columns} showPagination={false} defaultPageSize={data.length} />;
        } else {

            return (
                <div />
            )
        }
    }
}
