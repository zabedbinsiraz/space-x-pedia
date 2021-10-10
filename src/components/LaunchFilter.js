import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const success = ['All', 'Success', 'Failure'];
const date = ['All', 'Last Week', 'Last Month', 'Last Year'];
const location = ['All', 'Upcoming', 'Launched'];

const LaunchFilter = ({ filter = 'All', handleChange }) => (
    <Container fluid>
        <Row className="m-2 p-2" xs={1} md={3}>
            <Col>
                <span>LAUNCH SUCCESS: </span>
                {/* eslint-disable-next-line jsx-a11y/no-onchange */}
                <select
                    style={{ width: '100px' }}
                    id="success"
                    onChange={handleChange}
                    value={filter}
                >
                    {success.map((x) => (
                        <option key={Math.random()} value={x}>
                            {x}
                        </option>
                    ))}
                </select>
            </Col>
            <Col>
                <span>Duration: </span>
                {/* eslint-disable-next-line jsx-a11y/no-onchange */}
                <select style={{ width: '100px' }} id="Date" onChange={handleChange} value={filter}>
                    {date.map((x) => (
                        <option key={Math.random()} value={x}>
                            {x}
                        </option>
                    ))}
                </select>
            </Col>
            <Col>
                <span>WHAT IS UPCOMING: </span>
                {/* eslint-disable-next-line jsx-a11y/no-onchange */}
                <select
                    style={{ width: '100px' }}
                    id="Upcoming"
                    onChange={handleChange}
                    value={filter}
                >
                    {location.map((x) => (
                        <option key={Math.random()} value={x}>
                            {x}
                        </option>
                    ))}
                </select>
            </Col>
        </Row>
    </Container>
);

LaunchFilter.propTypes = {
    handleChange: PropTypes.func,
    filter: PropTypes.string,
};

LaunchFilter.defaultProps = {
    handleChange: () => {},
    filter: '',
};

export default LaunchFilter;
