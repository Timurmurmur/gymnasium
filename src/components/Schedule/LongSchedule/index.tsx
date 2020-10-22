import React from 'react';
import { connect } from 'react-redux';
import { PageStatus } from '../../../common/types';
import { loadLongShedule } from '../../../redux/actions/shedule';
import { State } from '../../../redux/store';


const LongSchedule: React.FC<{
    schedule: any;
    pageStatus: PageStatus;
    error: any;
    loadLongShedule: () => void;
    profilePageStatus: PageStatus;
}> = ({ schedule, pageStatus, error, loadLongShedule, profilePageStatus }) => {
    React.useEffect(
        () => {
            if (profilePageStatus === "LOADED") {
                loadLongShedule();
            }
        }, [profilePageStatus]
    )

    return (
        <div>
            
        </div>
    )
}

export default connect(
    ({ longSchedule, profile }: State) => ({ ...longSchedule, profilePageStatus: profile.pageStatus }),
    (dispatch) => ({
        loadLongShedule: () => {
            return dispatch(loadLongShedule())
        }
    })
)(LongSchedule);