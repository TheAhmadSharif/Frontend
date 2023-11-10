/** @format
 * @description
 * Student instructions:
 * Copy paste your code from the RequestStatus.jsx file here from the previous week. Implement redux logic to fetch the status from the redux store.
 * BEWARE: No props are passed to this component from now on. Instead, all the data is fetched and updated in the redux store.
 */
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from '../redux/actionCreators/statusActions.js';
import { REQ_STATUS  } from '../redux/constants.js';

export const RequestStatus = () => {
	const dispatch = useDispatch();


	// dispatch(setStatus(REQ_STATUS.loading))


	
	const set_status = useSelector((state) => state.status);

	return (
		<div>
			<h3>Request status</h3>
			<span id="request-status">{set_status}</span>
		</div>
	);
};

