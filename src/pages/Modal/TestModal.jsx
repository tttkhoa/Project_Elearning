import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

export default function TestModal() {
  const { isModalOpen,ContentModal,callbackSubmit} = useSelector((state) => state.TestModalReducer);
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch({type: "OPEN_MODAL",});
  };
  const handleOk = () => {
    dispatch({type: "CLOSE_MODAL",});
  };
  const handleCancel = () => {
    dispatch({type: "CLOSE_MODAL",});
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {ContentModal}
        <Button type="primary" htmlType="submit" onClick={callbackSubmit}>Submit</Button>
      </Modal>
    </>
  );
}
