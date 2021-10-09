import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMissionAction } from '../actions/actions';
import './Mission.css';

const Mission = () => {
    const mission = useSelector((state) => state.mission);
    const dispatch = useDispatch();
    // const ID = mission.match.params.id;
    const ID = 3;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchOneMission = (id) => {
        const apiUrl = 'https://api.spacexdata.com/v3/launches';
        axios
            .get(`${apiUrl}/${id}`)
            .then((response) => response.data)
            .then((data) => {
                dispatch(setMissionAction(data));
            })
            .catch((error) => {
                throw error;
            });
    };

    useEffect(() => {
        fetchOneMission(ID);
    }, [ID, fetchOneMission]);

    const convertUrl = () => {
        let urlVideo;

        if (mission.links) {
            urlVideo = mission.links.youtube_id;
        }
        return urlVideo;
    };

    return (
        <div className="mission-div">
            {mission.mission_name && <h2>{mission.mission_name.toUpperCase()}</h2>}
            <div className="mission-info-div">
                <ul className="mission-data">
                    {mission.details && (
                        <li>
                            {' '}
                            <span>Details:</span> {mission.details}{' '}
                        </li>
                    )}

                    <li>
                        <span>Launch Year:</span>
                        {mission.launch_year}
                    </li>

                    {mission.launch_date_utc && (
                        <li>
                            <span>Launch Date:</span>
                            {mission.launch_date_utc.slice(0, mission.launch_date_utc.indexOf('T'))}
                        </li>
                    )}
                    {mission.launch_site && (
                        <li>
                            <span>Launch site:</span>
                            {mission.launch_site.site_name_long}
                        </li>
                    )}

                    {mission.rocket && (
                        <li>
                            <span>Rocket name:</span>
                            {mission.rocket.rocket_name}
                        </li>
                    )}
                    {mission.rocket && (
                        <li>
                            <span>Rocket type:</span>
                            {mission.rocket.rocket_type}
                        </li>
                    )}
                    {mission.launch_success && (
                        <li>
                            <span>Launch success:</span> yes
                        </li>
                    )}
                    {mission.launch_success === false && (
                        <li>
                            <span>Launch sucess:</span> no
                        </li>
                    )}
                    {mission.launch_success === null && (
                        <li>
                            <span>Launch sucess:</span> Pending
                        </li>
                    )}

                    {mission.launch_failure_details && (
                        <li>
                            <span>Reasons of failure:</span>
                            {mission.launch_failure_details.reason}
                        </li>
                    )}

                    {mission.links && (
                        <li>
                            <span>More information:</span>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={mission.links.wikipedia}
                            >
                                {mission.links.wikipedia}
                            </a>
                        </li>
                    )}
                </ul>
                <div className="video-div">
                    {mission.links && (
                        <iframe
                            id="SpaceX Video"
                            title="Inline Frame Example"
                            width="426px"
                            height="240px"
                            src={
                                convertUrl() === undefined || convertUrl() === null
                                    ? 'https://www.youtube.com/embed/_yDZY5_u8FQ'
                                    : `https://www.youtube.com/embed/${convertUrl()}`
                            }
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

Mission.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    fetchOneMission: PropTypes.func,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.node,
        }).isRequired,
    }).isRequired,
    mission: PropTypes.shape({
        details: PropTypes.string,
        launch_year: PropTypes.string,
        launch_date_utc: PropTypes.string,
        mission_name: PropTypes.string,
        launch_success: PropTypes.bool,
        links: PropTypes.shape({
            youtube_id: PropTypes.string,
            wikipedia: PropTypes.string,
        }),
        launch_site: PropTypes.shape({
            site_name_long: PropTypes.string,
        }),
        rocket: PropTypes.shape({
            rocket_name: PropTypes.string,
            rocket_type: PropTypes.string,
        }),
        launch_failure_details: PropTypes.shape({
            reason: PropTypes.string,
        }),
    }),
};

Mission.defaultProps = {
    fetchOneMission: () => {},
    mission: {},
};

export default Mission;
