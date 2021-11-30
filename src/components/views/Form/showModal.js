import {actionShowModal} from '../../../redux/modalRedux';


const showModal = (result, dispatch) => {
  dispatch(actionShowModal());
};
export default showModal;