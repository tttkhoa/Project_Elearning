const initialState = {
  isModalOpen: false,
  ContentModal: <p>dsadsa</p>,
  callbackSubmit: (props) => {
    alert("Update thành công!");
  },
};

export default function TestModalReducer(state = initialState, action) {
  switch (action.type) {
    case "OPEN_MODAL": {
      state.isModalOpen = true;
      return { ...state };
    }
    case "CLOSE_MODAL": {
      state.isModalOpen = false;
      return { ...state };
    }
    case "CONTENT_MODAL": {
      state.isModalOpen = true;
      state.ContentModal = action.Component;
      return { ...state };
    }
    default:
      return { ...state };
  }
}
