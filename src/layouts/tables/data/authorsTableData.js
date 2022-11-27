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
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Prog = ({ note }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography variant="caption" fontWeight="medium">
        {note}
      </MDTypography>
    </MDBox>
  );

  const Ref = ({ STD }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography variant="button" fontWeight="medium">
        {STD}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "reference", accessor: "reference", align: "left" },
      { Header: "name and lastname", accessor: "student", width: "45%", align: "left" },
      { Header: "prog", accessor: "prog", align: "center" },
      { Header: "sys", accessor: "sys", align: "center" },
      { Header: "web", accessor: "web", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
    ],

    rows: [
      {
        reference: <Ref STD="STD21017" />,
        student: <Author image={team2} name="John Michael" />,
        prog: <Prog note="20" />,
        sys: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
        web: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="ADMIT" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        reference: <Ref STD="STD21017" />,
        student: <Author image={team3} name="Alexa Liras" />,
        prog: <Prog note="20" />,
        sys: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
        web: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="EXPELED" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        reference: <Ref STD="STD21017" />,
        student: <Author image={team4} name="Laurent Perrier" />,
        prog: <Prog note="20" />,
        sys: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
        web: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="ADMIT" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        reference: <Ref STD="STD21017" />,
        student: <Author image={team3} name="Michael Levi" />,
        prog: <Prog note="20" />,
        sys: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
        web: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="EXPELED" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        reference: <Ref STD="STD21017" />,
        student: <Author image={team3} name="Richard Gran" />,
        prog: <Prog note="20" />,
        sys: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
        web: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="ADMIT" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        reference: <Ref STD="STD21017" />,
        student: <Author image={team4} name="Miriam Eric" />,
        prog: <Prog note="20" />,
        sys: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
        web: (
          <MDTypography variant="caption" fontWeight="medium">
            13
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="expeled" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
    ],
  };
}
