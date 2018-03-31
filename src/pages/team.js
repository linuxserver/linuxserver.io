import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import TitleAndMetaTags from '../components/TitleAndMetaTags'
import TeamCard from '../components/TeamCard'

const members = {

    founders: [
        { name: "IronicBadger", gravatar: "fe787a6cc9815aba6f8d6fc22471f238", irl: { url: "https://blog.ktz.me", name: "Alex Kretzschmar" }, blurb: "Project co-founder, Red Hatter, Container Evangelist, Drone Racer and tinkerer extraordinaire." },
        { name: "j0nnymoe", gravatar: "56783d65ac1011a1c612dcf15d469e19", blurb: "Project co-founder and coffee fueled SysAdmin." }
    ],
    team: [
        { name: "aptalca", blurb: "Of House Aptalca, Third of His Name, Knower of Nothings, The Sunburnt, Breaker of Scripts, Sitter on the Ceramic Throne" },
        { name: "chbmb", gravatar: "26c29553980d7aeb8833070290688090", blurb: "Accidental Linux convert. DVB driver builder extraordinaire. Now single-boots Linux." },
        { name: "Kode", gravatar: "ea0163baa79c87f2332b383930284fa7", irl: { url: "https://medium.com/@kodestar", name: "Chris Hunt" }, blurb: "fanart.tv creator, Web Developer, DevOps, not enough fingers for all the pies." },
        { name: "nicjo814", irl: { name: "Niclas Berglind" }, blurb: "OMV docker plugin creator and docker enthusiast" },
        { name: "phendryx", irl: { name: "Paul Hendryx" }, blurb: "Automation lover, developer, devops, drone / quadcopter nut and efficiently lazy." },
        { name: "saarg", irl: { name: "Torbjørn Brekke" }, blurb: "Dockerizer, Home Cinema enthusiast, Jazz Fusion lover and Pour Over Coffee Brewer." },
        { name: "sparklyballs", gravatar: "78f90955de2d57d2d0764eff0058b47b", blurb: "Guardian of the biscuits, Docker Dude, Old, Blind-ish and Deaf-ish" },
        { name: "Squid" },
        { name: "Stark", gravatar: "93c8297ad39bdd7b65e3faef60f73aee", irl: { name: "Josh Stark" }, blurb: "Full-stack Software Engineer; Biker; Full-time grammar police." },
        { name: "TheLamer", blurb: "Taisun.io creator, lives in CLI, professional Googler, got 99 problems but Windows ain't one." },
        { name: "xe", blurb: "Some say he is made of exotic alien materials. All we know is, he exists somewhere." }
    ],
    community: [
        { name: "hackerman", gravatar: "5a59a839efe5bca4d6bffc8474ea2119", blurb: "" },
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
        { name: "lonix", gravatar: "fa813f5017f0c827e0e8005c5b290d77", blurb: "Project co-founder" },
        { name: "smdion", blurb: "" }
    ]
};

const TeamPage = () => (
    <div>
        <TitleAndMetaTags title="The Team - LinuxServer" />
        <Container className="the-team">
            <Row style={{marginBottom: '5rem'}}>
                <Col>
                    <h2>The Founders</h2>
                    <h3>
                        Since day-zero, these are the guys that sowed the seed which eventually became LinuxServer.io.
                    </h3>
                </Col>
            </Row>
            <Row style={{marginBottom: '2rem'}}>
                {
                    members.founders.map((founder, index) => (
                        <TeamCard member={founder} key={index}/>
                    ))
                }
            </Row>
            <Row style={{marginBottom: '5rem'}}>
                <Col>
                    <h2>The Team</h2>
                    <h3>
                        A diverse group of people dedicating their spare time to help LinuxServer improve. With skills ranging from shell scripting, web development, Docker management, and writing, the mainstay team are the guys behind the name.
                    </h3>
                </Col>
            </Row>
            <Row style={{marginBottom: '2rem'}}>
                {
                    members.team.map((teamMember, index) => (
                        <TeamCard member={teamMember} key={index}/>
                    ))
                }
            </Row>
            <Row style={{marginBottom: '5rem'}}>
                <Col>
                    <h2>Community Developers</h2>
                    <h3>
                        Ambassadors for the very applications LinuxServer distributes via its images - these guys help us ensure our images are the best they can be by providing much needed insight into each application's needs.
                    </h3>
                </Col>
            </Row>
            <Row style={{marginBottom: '2rem'}}>
                {
                    members.community.map((teamMember, index) => (
                        <TeamCard member={teamMember} key={index}/>
                    ))
                }
            </Row>
            <Row style={{marginBottom: '5rem'}}>
                <Col>
                    <h2>Past Contributors</h2>
                    <h3>
                        Those who have since left us, but whose work in the past has helped bolster LinuxServer.io.
                    </h3>
                </Col>
            </Row>
            <Row style={{marginBottom: '2rem'}}>
                {
                    members.past.map((teamMember, index) => (
                        <TeamCard member={teamMember} key={index}/>
                    ))
                }
            </Row>
        </Container>
    </div>
)

export default TeamPage
