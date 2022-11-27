/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export default function data() {
  const Title = ({ intitule }) => (
    <MDBox display="flex" lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {intitule}
      </MDTypography>
    </MDBox>
  );

  const Credit = ({ note }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography variant="caption" fontWeight="medium">
        {note}
      </MDTypography>
    </MDBox>
  );

  const Unity = ({ name }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography variant="button" fontWeight="medium">
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "UE", accessor: "name", align: "left" },
      { Header: "Intitulé", accessor: "student", width: "35%", align: "left" },
      { Header: "Crédit", accessor: "credit", align: "center" },
      { Header: "Note / 20", accessor: "note", align: "center" },
    ],

    rows: [
      {
        name: <Unity name="name21017" />,
        student: <Title intitule="John Michael" />,
        credit: <Credit note="20" />,
        note: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
      },
      {
        name: <Unity name="name21017" />,
        student: <Title intitule="Alexa Liras" />,
        credit: <Credit note="20" />,
        note: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
      },
      {
        name: <Unity name="name21017" />,
        student: <Title intitule="Laurent Perrier" />,
        credit: <Credit note="20" />,
        note: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
      },
      {
        name: <Unity name="name21017" />,
        student: <Title intitule="Michael Levi" />,
        credit: <Credit note="20" />,
        note: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
      },
      {
        name: <Unity name="name21017" />,
        student: <Title intitule="Richard Gran" />,
        credit: <Credit note="20" />,
        note: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
      },
      {
        name: <Unity name="name21017" />,
        student: <Title intitule="Miriam Eric" />,
        credit: <Credit note="20" />,
        note: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
      },
    ],
  };
}
