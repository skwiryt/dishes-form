// selectors
export const getModalVisibility = ({modal}) => modal.visible;

// action name creator
const reducerName = 'modal';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SHOW_MODAL = createActionName('SHOW_MODAL');
export const HIDE_MODAL = createActionName('HIDE_MODAL');

// action creators
export const actionShowModal = () => ({ payload: {visible: true}, type: SHOW_MODAL });
export const actionHideModal = () => ({payload: {visible: false}, type: HIDE_MODAL});

// reducer
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case HIDE_MODAL:
    case SHOW_MODAL:
      return {...statePart, ...action.payload};
    default:
      return statePart;
  }
}