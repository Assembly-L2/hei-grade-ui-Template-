import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import Modal from "@mui/material/Modal";
import MDBox from "components/MDBox";
import Popup from "layouts/notifications/Popup";

import { useState } from "react";
import ExamContext from "context/context";

function Add() {
  const [isOpen, setOpen] = useState(false);
  const onBtnClick = () => {
    setOpen(!isOpen);
  };

  const style = {
    position: "absolute",
    top: "20%",
    left: "35%",
    width: 700,
  };
  return (
    <ExamContext.Consumer>
      {({ addExam }) => {
        const createExam = (values) => {
          onBtnClick();
          addExam(values);
        };
        return (
          <>
            <MDButton onClick={onBtnClick} variant="gradient" color="dark">
              <Icon sx={{ fontWeight: "bold" }}>add</Icon>
              &nbsp;add new evaluation
            </MDButton>
            <Modal
              sx={style}
              open={isOpen}
              onClose={onBtnClick}
              aria-labelledby="modal-title"
              aria-describedby="modal-body"
            >
              <MDBox>
                <MDBox id="modal-body">
                  <Popup trigger={createExam} />
                </MDBox>
              </MDBox>
            </Modal>
          </>
        );
      }}
    </ExamContext.Consumer>
  );
}

export default Add;
