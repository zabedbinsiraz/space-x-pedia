import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import setDataAction, { setFilterAction } from '../actions/actions';
import LaunchFilter from './LaunchFilter';
import './MissionList.css';

let targetId;

// class MissionList extends Component {
//     constructor(props) {
//         super(props);

//         this.handleChange = this.handleChange.bind(this);
//     }

//     componentDidMount() {
//         const { fetchData } = this.props;

//         fetchData();
//     }

//     handleChange(e) {
//         const { filterSuccess } = this.props;
//         targetId = e.target.id;
//         const filter = e.target.value;
//         filterSuccess(filter);
//     }

//     // eslint-disable-next-line class-methods-use-this
//     filterDefine(mission, parameter) {
//         let total;
//         switch (parameter) {
//             case mission.launch_success:
//                 if (mission.launch_success === false) {
//                     total = 'No';
//                 } else if (mission.launch_success === true) {
//                     total = 'Yes';
//                 } else {
//                     total = 'Pending';
//                 }
//                 return total;
//             case mission.launch_year:
//                 total = mission.launch_year;
//                 return total;
//             case mission.launch_site.site_name_long:
//                 total = mission.launch_site.site_name_long;
//                 return total;
//             default:
//                 total = 'All';
//                 return total;
//         }
//     }

//     render() {
//         const { missions } = this.props;
//         const { filter } = this.props;
//         let total;
//         let filtered = [];
//         if (filter === 'All') {
//             filtered = missions;
//         } else {
//             filtered = missions.filter((mission) => {
//                 if (targetId === 'sucess') {
//                     total = this.filterDefine(mission, mission.launch_success);
//                 } else if (targetId === 'Date') {
//                     total = this.filterDefine(mission, mission.launch_year);
//                 } else {
//                     total = this.filterDefine(mission, mission.launch_site.site_name_long);
//                 }
//                 return total === filter;
//             });
//         }

//         return (
//             <div className="launches-div">
//                 <LaunchFilter filter={filter} handleChange={this.handleChange} />
//                 <ul className="launches-list">
//                     {filtered.map((mission) => (
//                         <li key={mission.mission_name} className="launch">
//                             <div className="launch-buttondiv">
//                                 <Link to={`mission/${mission.flight_number}`}>
//                                     <button type="button">
//                                         {mission.links.mission_patch_small && (
//                                             <img
//                                                 src={mission.links.mission_patch_small}
//                                                 alt={mission.mission_name}
//                                             />
//                                         )}
//                                         {!mission.links.mission_patch_small && (
//                                             <img src="rocket.png" alt={mission.mission_name} />
//                                         )}
//                                     </button>
//                                 </Link>
//                             </div>
//                             <div className="launch-title">{mission.mission_name}</div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => ({
//     missions: state.launches,
//     filter: state.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//     filterSuccess: (success) => dispatch(filterSuccess(success)),
//     fetchData: () => dispatch(fetchData()),
// });

// MissionList.propTypes = {
//     fetchData: PropTypes.func,
//     filterSuccess: PropTypes.func,
//     missions: PropTypes.arrayOf(PropTypes.object),
//     filter: PropTypes.string,
// };

// MissionList.defaultProps = {
//     fetchData: () => {},
//     filterSuccess: () => {},
//     missions: {},
//     filter: '',
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MissionList);

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
        // eslint-disable-next-line no-shadow
        const filter = e.target.value;
        filterSuccess(filter);
    };

    // eslint-disable-next-line class-methods-use-this
    const filterDefine = (mission, parameter) => {
        let total;
        switch (parameter) {
            case mission.launch_success:
                if (mission.launch_success === false) {
                    total = 'No';
                } else if (mission.launch_success === true) {
                    total = 'Yes';
                } else {
                    total = 'Pending';
                }
                return total;
            case mission.launch_year:
                total = mission.launch_year;
                return total;
            case mission.launch_site.site_name_long:
                total = mission.launch_site.site_name_long;
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
            if (targetId === 'sucess') {
                total = filterDefine(mission, mission.launch_success);
            } else if (targetId === 'Date') {
                total = filterDefine(mission, mission.launch_year);
            } else {
                total = filterDefine(mission, mission.launch_site.site_name_long);
            }
            return total === filter;
        });
    }
    console.log(filtered);
    return (
        <div className="launches-div">
            <LaunchFilter filter={filter} handleChange={handleChange} />
            <ul className="launches-list">
                {filtered?.map((mission) => (
                    <li key={mission.mission_name} className="launch">
                        <div className="launch-buttondiv">
                            <Link to={`mission/${mission.flight_number}`}>
                                <button type="button">
                                    {mission.links.mission_patch_small && (
                                        <img
                                            src={mission.links.mission_patch_small}
                                            alt={mission.mission_name}
                                        />
                                    )}
                                    {!mission.links.mission_patch_small && (
                                        <img src="rocket.png" alt={mission.mission_name} />
                                    )}
                                </button>
                            </Link>
                        </div>
                        <div className="launch-title">{mission.mission_name}</div>
                    </li>
                ))}
            </ul>
        </div>
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
