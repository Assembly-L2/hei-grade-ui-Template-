// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useState } from "react";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import ExamContext from "context/context";
import Popup from "layouts/notifications/Popup";
import Modal from "@mui/material/Modal";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";

function Bill({ nb, titre, semestre, date, statut, noGutter }) {
  const style = {
    position: "absolute",
    top: "20%",
    left: "35%",
    width: 700,
  };
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [isOpen, setOpen] = useState(false);
  const onBtnClick = () => {
    setOpen(!isOpen);
  };
  return (
    <ExamContext.Consumer>
      {({ deleteExam, editExam }) => {
        const effacer = () => {
          deleteExam({ id: nb });
        };
        const update = (exam) => {
          editExam(exam);
          onBtnClick();
        };
        return (
          <MDBox
            component="li"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            bgColor={darkMode ? "transparent" : "grey-100"}
            borderRadius="lg"
            p={3}
            mb={noGutter ? 0 : 1}
            mt={2}
          >
            <MDBox width="100%" display="flex" flexDirection="column">
              <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                flexDirection={{ xs: "column", sm: "row" }}
                mb={2}
              >
                <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                  {titre}
                </MDTypography>

                <MDBox
                  display="flex"
                  alignItems="center"
                  mt={{ xs: 2, sm: 0 }}
                  ml={{ xs: -1.5, sm: 0 }}
                >
                  <MDBox mr={1}>
                    <MDButton onClick={effacer} variant="text" color="error">
                      <Icon>delete</Icon>&nbsp;delete
                    </MDButton>
                  </MDBox>
                  <MDButton onClick={onBtnClick} variant="text" color={darkMode ? "white" : "dark"}>
                    <Icon>edit</Icon>&nbsp;edit
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
                        <Popup trigger={update} exam={{ id: nb, titre, statut, semestre, date }} />
                      </MDBox>
                    </MDBox>
                  </Modal>
                </MDBox>
              </MDBox>
              <MDBox mb={1} lineHeight={0}>
                <MDTypography variant="caption" color="text">
                  Semestre : &nbsp;&nbsp;&nbsp;
                  <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                    {semestre}
                  </MDTypography>
                </MDTypography>
              </MDBox>
              <MDBox mb={1} lineHeight={0}>
                <MDTypography variant="caption" color="text">
                  Date : &nbsp;&nbsp;&nbsp;
                  <MDTypography variant="caption" fontWeight="medium">
                    {date}
                  </MDTypography>
                </MDTypography>
              </MDBox>
              <MDTypography variant="caption" color="text">
                Statut : &nbsp;&nbsp;&nbsp;
                <MDTypography variant="caption" fontWeight="medium">
                  {statut}
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        );
      }}
    </ExamContext.Consumer>
  );
}

// Setting default values for the props of Bill
Bill.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Bill.propTypes = {
  nb: PropTypes.number.isRequired,
  titre: PropTypes.string.isRequired,
  semestre: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  statut: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Bill;
