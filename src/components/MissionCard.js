import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MissionCard = ({ mission }) => (
    <Col>
        <Card className="text-center" style={{ width: '17rem', height: '21rem' }}>
            <Link to={`mission/${mission.flight_number}`}>
                <Button>
                    {mission.links.mission_patch_small && (
                        <Card.Img
                            variant="top"
                            src={mission.links.mission_patch_small}
                            alt={mission.mission_name}
                        />
                    )}
                    {!mission.links.mission_patch_small && (
                        <Card.Img src="rocket.png" alt={mission.mission_name} />
                    )}
                </Button>
            </Link>
            <Card.Body>
                <Card.Title>{mission.mission_name}</Card.Title>
            </Card.Body>
        </Card>
    </Col>
);

export default MissionCard;
