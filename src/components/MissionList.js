import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import setDataAction, { setFilterAction } from '../actions/actions';
import LaunchFilter from './LaunchFilter';
import MissionCard from './MissionCard';

let targetId;
const MissionList = () => {
    const missions = useSelector((state) => state.fetched);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        const apiUrl = 'https://api.spacexdata.com/v3/launches';
        axios
            .get(apiUrl)
            .then((response) => response.data)
            .then((data) => {
                dispatch(setDataAction(data));
            })
            .catch((error) => {
                throw error;
            });
    }, [dispatch]);

    const filterSuccess = (success) => dispatch(setFilterAction(success));

    const handleChange = (e) => {
        targetId = e.target.id;

        const filterValue = e.target.value;
        filterSuccess(filterValue);
        console.log(filterValue);
    };

    // eslint-disable-next-line class-methods-use-this
    const filterDefine = (mission, parameter) => {
        let total;
        switch (parameter) {
            case mission.launch_success:
                if (mission.launch_success === false) {
                    total = 'Failure';
                } else if (mission.launch_success === true) {
                    total = 'Success';
                }
                return total;

            case mission.launch_date_local:
                if (
                    Math.round(
                        Math.abs((new Date(mission.launch_date_local) - new Date()) / 86400000)
                    ) <= 7
                ) {
                    total = 'Last Week';
                } else if (
                    Math.round(
                        Math.abs((new Date(mission.launch_date_local) - new Date()) / 86400000)
                    ) <= 30
                ) {
                    total = 'Last Month';
                } else if (
                    Math.round(
                        Math.abs((new Date(mission.launch_date_local) - new Date()) / 86400000)
                    ) <= 365
                ) {
                    total = 'Last Year';
                }
                return total;

            case mission.upcoming:
                if (mission.upcoming === true) {
                    total = 'Upcoming';
                } else if (mission.upcoming === false) {
                    total = 'Launched';
                }
                return total;

            default:
                total = 'All';
                return total;
        }
    };

    let total;
    let filtered = [];
    if (filter === 'All') {
        filtered = missions;
    } else {
        filtered = missions.filter((mission) => {
            if (targetId === 'success') {
                total = filterDefine(mission, mission.launch_success);
            } else if (targetId === 'Date') {
                total = filterDefine(mission, mission.launch_date_local);
            } else {
                total = filterDefine(mission, mission.upcoming);
            }
            return total === filter;
        });
    }
    return (
        <Container>
            <LaunchFilter filter={filter} handleChange={handleChange} />
            <Row xs={2} md={4} className="g-4">
                {filtered?.map((mission) => (
                    <MissionCard key={mission.mission_name} mission={mission} />
                ))}
            </Row>
        </Container>
    );
};

MissionList.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    fetchData: PropTypes.func,
    // eslint-disable-next-line react/no-unused-prop-types
    filterSuccess: PropTypes.func,
    // eslint-disable-next-line react/no-unused-prop-types
    missions: PropTypes.arrayOf(PropTypes.object),
    // eslint-disable-next-line react/no-unused-prop-types
    filter: PropTypes.string,
};

MissionList.defaultProps = {
    fetchData: () => {},
    filterSuccess: () => {},
    missions: {},
    filter: '',
};

export default MissionList;
