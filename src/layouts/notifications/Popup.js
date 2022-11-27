import { React, useState, useEffect } from "react";
import { useFormik } from "formik";
//  import { Moment } from "react-moment";
//  import "moment-timezone";
import { Input, TextField } from "@mui/material";

// @mui material components
import Card from "@mui/material/Card";
//  import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import breakpoints from "assets/theme/base/breakpoints";

/*      <div>
        <div className="masc-form-group">
          <Input label="Title" />
        </div>
      </div>
      <div className="mbsc-form-group">
        <Switch label="All-day" />
        <Input label="Starts" />
        <Input label="Ends" />
      </div>    */

function Popup(props) {
  const { exam, trigger } = props;

  const getExam = () => {
    if (exam) {
      return exam;
    }
    return {
      titre: "",
      semestre: 1,
      date: "",
      statut: "A venir",
    };
  };
  //  On appelle la fonction getExam on a l'exam en question
  const formHandler = useFormik({
    initialValues: getExam(),
    onSubmit: trigger,
  });

  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(formHandler.values.statut === "A venir" ? 0 : 1);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
       The event listener that's calling the handleTabsOrientation function when resizing the window.
      */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => {
    const values = ["A venir", "Terminé"];
    formHandler.setFieldValue("statut", values[newValue]);
    setTabValue(newValue);
  };

  const [count, setCount] = useState(formHandler.values.semestre);
  const incrementCount = () => {
    if (count + 1 > 6) return;
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count - 1 < 1) return;
    setCount(count - 1);
  };
  useEffect(() => {
    formHandler.setFieldValue("semestre", count);
  }, [count]);

  return (
    <form onSubmit={formHandler.handleSubmit}>
      <Card>
        <Typography id="modal-modal-title" variant="h6" component="h2" ml={3} mt={2}>
          <h1>Evaluation</h1>
        </Typography>
        <MDBox pt={2} px={2} display="flex" justifyContent="center" alignItems="center">
          <MDTypography variant="h6" fontWeight="medium">
            Examen :
          </MDTypography>
          <TextField
            id="titre"
            name="titre"
            label="titre"
            onChange={formHandler.handleChange}
            value={formHandler.values.titre}
          />
        </MDBox>
        <MDBox pt={2} px={2} display="flex" justifyContent="center" alignItems="center">
          <MDTypography variant="h6" fontWeight="medium">
            Semestre :
          </MDTypography>
          <Button onClick={decrementCount}>-</Button>
          <p>{count}</p>
          <Button onClick={incrementCount}>+</Button>
        </MDBox>
        <MDBox pt={2} px={2} display="flex" justifyContent="center" alignItems="center">
          <MDTypography variant="h6" fontWeight="medium">
            Date :
          </MDTypography>
          <Input
            type="datetime-local"
            id="date"
            name="date"
            label="date"
            onChange={formHandler.handleChange}
            value={formHandler.values.date}
          />
        </MDBox>
        <MDBox
          pt={2}
          px={2}
          display="column"
          justifyContent="center"
          alignItems="center"
          width="45%"
        >
          <AppBar position="static" sx={{ ml: "70%", mr: "5%", mb: "2%", mt: "2%" }}>
            <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
              <Tab
                label="A venir"
                icon={
                  <Icon fontSize="small" sx={{ mt: -0.25 }}>
                    arrow_upward
                  </Icon>
                }
              />
              <Tab
                label="Terminé"
                icon={
                  <Icon fontSize="small" sx={{ mt: -0.25 }}>
                    done
                  </Icon>
                }
              />
            </Tabs>
          </AppBar>
        </MDBox>
        <MDButton
          type="submit"
          variant="gradient"
          color="dark"
          size="small"
          pt={2}
          px={2}
          sx={{ ml: "70%", mr: "5%", mb: "2%", mt: "2%" }}
        >
          Enregister
        </MDButton>
      </Card>
    </form>
  );
}
export default Popup;
