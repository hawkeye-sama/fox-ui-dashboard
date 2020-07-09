import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "assets/jss/material-dashboard-react/components/materialTableStyle.js";
import MaterialTable from 'material-table';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


// CSS styles
import {
  warningColor,
  // primaryColor,
  // dangerColor,
  // successColor,
  // infoColor,
  roseColor,
  // grayColor,
  // defaultFont
} from "assets/jss/material-dashboard-react.js";

const useStyles = makeStyles(styles);

export default function MyCustomTable(props) {
  const classes = useStyles();
  const { useState } = React;
  const [selectedRow, setSelectedRow] = useState(null);
  const { tableHead, tableData, tableHeaderColor } = props;

  const theme = createMuiTheme({
    overrides: {

      MuiTableRow: {
        root: {
          color: '#555555',
          '&:hover': {
            color: '#bbdefb',
          },
        },
        active: {
          color: '#bbdefb',
        },
      }
    },
  });

  return (
    <div className={classes.tableResponsive}>
      {/* <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table> */}
      <ThemeProvider theme={theme}>
        <MaterialTable
          title=""
          className={classes[tableHeaderColor + "TableHeader"]}
          columns={[

            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
              title: 'Birth Place',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
          ]}
          data={[
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
          ]}
          onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
          options={{
            rowStyle: rowData => ({
              backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF',
              cursor: 'pointer',
            }),

            headerStyle: {
              color: roseColor[0],
            },


          }}
        />
      </ThemeProvider>

    </div>
  );
}

// MyCustomTable.defaultProps = {
//   tableHeaderColor: "gray"
// };

// MyCustomTable.propTypes = {
//   tableHeaderColor: PropTypes.oneOf([
//     "warning",
//     "primary",
//     "danger",
//     "success",
//     "info",
//     "rose",
//     "gray"
//   ]),
//   tableHead: PropTypes.arrayOf(PropTypes.string),
//   tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
// };
