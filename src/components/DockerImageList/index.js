import React from 'react'
import Link from 'gatsby-link'

import { Table } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import DockerIcon from '@fortawesome/fontawesome-free-brands/faDocker';

let buildMainUrl = (image) => `https://hub.docker.com/r/linuxserver/${image}`;
let buildArmUrl = (image) => `https://hub.docker.com/r/lsioarmhf/${image}`;
let buildAarch64Url = (image) => `https://hub.docker.com/r/lsioarmhf/${image}-aarch64`;

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

                    if (image.name.indexOf('baseimage') === -1) {

                        let mainImageName = image.name.replace('-aarch64', '');
                        if (typeof images[mainImageName] === 'undefined') {

                            images[mainImageName] = {

                                x86: image.arch === 'x86',
                                armhf: image.arch === 'armhf' && !image.name.endsWith('-aarch64'),
                                aarch64: image.arch === 'armhf' && image.name.endsWith('-aarch64'),
                                pulls: image.count
                            }

                        } else {

                            if (image.arch === 'x86') {
                                images[mainImageName].x86 = true;
                            }

                            else if (image.arch === 'armhf' && !image.name.endsWith('-aarch64')) {
                                images[mainImageName].armhf = true;
                            }

                            else if (image.arch === 'armhf' && image.name.endsWith('-aarch64')) {
                                images[mainImageName].aarch64 = true;
                            }

                            images[mainImageName].pulls += image.count;
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
                            <th style={{textAlign: 'right'}}>Pulls</th>
                            <th>x86</th>
                            <th>aarch64</th>
                            <th>armhf</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(images).sort().map((appName, index) => {

                                let x86Link = images[appName].x86 ? <a href={buildMainUrl(appName)} target="_blank"><FontAwesomeIcon icon={DockerIcon} /></a> : <span />;
                                let aarch64Link = images[appName].aarch64 ? <a href={buildAarch64Url(appName)} target="_blank"><FontAwesomeIcon icon={DockerIcon} /></a> : <span />;
                                let armhfLink = images[appName].armhf ? <a href={buildArmUrl(appName)} target="_blank"><FontAwesomeIcon icon={DockerIcon} /></a> : <span />;

                                return (

                                    <tr key={index}>
                                        <td style={{textAlign: 'left', textTransform: 'capitalize'}}>{appName}</td>
                                        <td style={{textAlign: 'right', fontFamily: 'monospace'}}>{images[appName].pulls}</td>
                                        <td>{x86Link}</td>
                                        <td>{aarch64Link}</td>
                                        <td>{armhfLink}</td>
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
