import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const success = ['All', 'Yes', 'No', 'Pending'];
const date = [
    'All',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2010',
    '2009',
    '2008',
    '2007',
    '2006',
];
const location = [
    'All',
    'Vandenberg Air Force Base Space Launch Complex 4E',
    'Kwajalein Atoll Omelek Island',
    'Cape Canaveral Air Force Station Space Launch Complex 40',
    'Kennedy Space Center Historic Launch Complex 39A',
];

const LaunchFilter = ({ filter = 'All', handleChange }) => (
    <Container fluid>
        <Row className="m-2 p-2 text-white" xs={1} md={3}>
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
                <span>YEAR: </span>
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
                <span>LAUNCH LOCATION: </span>
                {/* eslint-disable-next-line jsx-a11y/no-onchange */}
                <select
                    style={{ width: '100px' }}
                    id="Location"
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
