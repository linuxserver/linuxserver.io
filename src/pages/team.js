import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import TitleAndMetaTags from '../components/TitleAndMetaTags'
import TeamCard from '../components/TeamCard'

const members = {

    founders: [
        { name: "IronicBadger", gravatar: "fe787a6cc9815aba6f8d6fc22471f238", irl: { url: "https://blog.ktz.me", name: "Alex Kretzschmar" }, blurb: "Project co-founder, Red Hatter, Container Evangelist, Drone Racer and tinkerer extraordinaire." },
        { name: "j0nnymoe", gravatar: "56783d65ac1011a1c612dcf15d469e19", blurb: "Project co-founder: Coffee fueled SysAdmin." }
    ],
    team: [
        { name: "aptalca", blurb: "" },
        { name: "chbmb", blurb: "" },
        { name: "Kode", gravatar: "ea0163baa79c87f2332b383930284fa7", irl: { url: "https://medium.com/@kodestar", name: "Chris Hunt" }, blurb: "fanart.tv creator, Web Developer, DevOps, not enough fingers for all the pies." },
        { name: "nicjo814", irl: { name: "Niclas Berglind" }, blurb: "OMV docker plugin creator and docker enthusiast" },
        { name: "phendryx", irl: { name: "Paul Hendryx" }, blurb: "Automation lover, developer, devops, drone / quadcopter nut and efficiently lazy." },
        { name: "saarg", irl: { name: "Torbjørn Brekke" }, blurb: "Dockerizer, Home Cinema enthusiast, Jazz Fusion lover and Pour Over Coffee Brewer." },
        { name: "sparklyballs", gravatar: "78f90955de2d57d2d0764eff0058b47b", blurb: "Guardian of the biscuits, Docker Dude, Old, Blind-ish and Deaf-ish" },
        { name: "Squid" },
        { name: "Stark", gravatar: "93c8297ad39bdd7b65e3faef60f73aee", irl: { name: "Josh Stark" }, blurb: "Full-stack Software Engineer; Biker; Full-time grammar police." },
        { name: "TheLamer" },
        { name: "xe", blurb: "Some say he is made of exotic alien materials. All we know is, he exists somewhere." }
    ],
    community: [
        { name: "hackerman", blurb: "" },
        { name: "imadeofwaxdanny", blurb: "Lidarr" },
        { name: "imMike", blurb: "" },
        { name: "markus101", blurb: "Sonarr" },
        { name: "p3lim", blurb: "" },
        { name: "Qstick", blurb: "Lidarr" },
        { name: "TheOtherP", blurb: "Hydra" },
        { name: "TidusJar", blurb: "Ombi" },
        { name: "Ziggimon", blurb: "Plex" },
        { name: "Zagg", blurb: "" }
    ],
    past: [
        { name: "danioj", blurb: "" },
        { name: "lonix", blurb: "Project co-founder" },
        { name: "smdion", blurb: "" }
    ]
};

const NotFoundPage = () => (
    <div>
        <TitleAndMetaTags title="The Team - LinuxServer" />
        <Container className="the-team">
            <Row>
                <Col>
                    <h1>The Team</h1>
                </Col>
            </Row>
            <Row style={{marginBottom: '3rem'}}>
                <Col>
                    <h3>The Founders</h3>
                </Col>
            </Row>
            <Row>
                {
                    members.founders.map((founder, index) => (
                        <TeamCard member={founder} key={index}/>
                    ))
                }
            </Row>
            <Row style={{marginBottom: '3rem'}}>
                <Col>
                    <h3>The Team</h3>
                </Col>
            </Row>
            <Row>
                {
                    members.team.map((teamMember, index) => (
                        <TeamCard member={teamMember} key={index}/>
                    ))
                }
            </Row>
            <Row style={{marginBottom: '3rem'}}>
                <Col>
                    <h3>Community Developers</h3>
                </Col>
            </Row>
            <Row>
                {
                    members.community.map((teamMember, index) => (
                        <TeamCard member={teamMember} key={index}/>
                    ))
                }
            </Row>
            <Row style={{marginBottom: '3rem'}}>
                <Col>
                    <h3>Past Contributors</h3>
                </Col>
            </Row>
            <Row>
                {
                    members.past.map((teamMember, index) => (
                        <TeamCard member={teamMember} key={index}/>
                    ))
                }
            </Row>
        </Container>
    </div>
)

export default NotFoundPage
