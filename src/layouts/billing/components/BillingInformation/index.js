/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useState, useEffect } from "react";
import ExamContext from "context/context";
import ExamList from "./ExamList";
import Add from "./add";

function BillingInformation() {
  const [exams, setExam] = useState([]);

  //  La fonction d'ajout d'examen
  const addExam = (exam) => {
    // eslint-disable-next-line no-param-reassign
    exam.id = new Date().getTime();
    exams.push(exam);
    setExam([...exams]);
  };
  //  La fonction d'update
  const editExam = (exam) => {
    const examToChange = exams.map((value) => value.id).indexOf(exam.id);
    exams[examToChange] = exam;
    setExam([...exams]);
  };

  //  La fonction delete
  const deleteExam = (exam) => {
    const examToDelete = exams.map((value) => value.id).indexOf(exam.id);
    exams.splice(examToDelete, 1);
    setExam([...exams]);
  };
  const [state, setState] = useState({ addExam, editExam, deleteExam, exams });

  useEffect(() => {
    setState({
      exams,
      addExam,
      editExam,
      deleteExam,
    });
  }, [exams]);

  const style = {
    left: "35%",
  };

  return (
    <ExamContext.Provider value={state}>
      <Card sx={style} id="delete-account">
        <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
          <MDTypography variant="h6" fontWeight="medium">
            Evaluations Information
          </MDTypography>
          <Add />
        </MDBox>
        <MDBox pt={1} pb={2} px={2}>
          <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <ExamList />
          </MDBox>
        </MDBox>
      </Card>
    </ExamContext.Provider>
  );
}

export default BillingInformation;
