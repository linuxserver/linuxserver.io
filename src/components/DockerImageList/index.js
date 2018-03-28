import React from 'react'
import Link from 'gatsby-link'

import { Table } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import DockerIcon from '@fortawesome/fontawesome-free-brands/faDocker';

let buildMainUrl = (image) => `https://hub.docker.com/r/linuxserver/${image}`;
let buildArmUrl = (image) => `https://hub.docker.com/r/lsioarmhf/${image}`;

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

                let images = {};

                result.forEach(image => {

                    if (image.name.endsWith('-aarch64')) {

                        const imageName = image.name.replace('-aarch64', '');

                        if (typeof images[imageName] === 'undefined') {

                            images[imageName] = {
                                x86: false,
                                aarch64: true
                            };

                        } else {
                            images[imageName].aarch64 = true;
                        }

                    } else {

                        if (typeof images[image.name] === 'undefined') {

                            images[image.name] = {
                                x86: true,
                                aarch64: false
                            };

                        } else {
                            images[image.name].x86 = true;
                        }
                    }

                });

                this.setState({
                    isLoaded: true,
                    images: images
                });
            });
    }

    render() {

        const { error, isLoaded, images } = this.state;

        if (isLoaded) {

            return (
                <Table striped style={{marginTop: '50px'}}>
                    <thead>
                        <tr>
                            <th style={{textAlign: 'left'}}>Image</th>
                            <th>x86</th>
                            <th>aarch64</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(images).map((appName, index) => {

                                let x86Link = images[appName].x86 ? <a href={buildMainUrl(appName)} target="_blank"><FontAwesomeIcon icon={DockerIcon} /></a> : <span />;
                                let aarch64Link = images[appName].aarch64 ? <a href={buildArmUrl(appName)} target="_blank"><FontAwesomeIcon icon={DockerIcon} /></a> : <span />;

                                return (

                                    <tr key={index}>
                                        <td style={{textAlign: 'left', textTransform: 'capitalize'}}>{appName}</td>
                                        <td>{x86Link}</td>
                                        <td>{aarch64Link}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            );

        } else {

            return (
                <div />
            )
        }
    }
}
