import React from 'react';
import { PropTypes } from 'prop-types';
import {connect} from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { getModalVisibility, actionHideModal } from '../../redux/modalRedux';
import style from './FormModal.module.scss';

function FormModal(props) {
  const {visible, hideModal} = props;
  const handleClose = () => hideModal();

  return (
    <div>      
      <Modal
        open={visible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={style.modalBox}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Form submit status:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your dishes-form was successfully submited to server.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

FormModal.propTypes = {
  visible: PropTypes.bool,
  hideModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  visible: getModalVisibility(state),
});
const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(actionHideModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormModal);