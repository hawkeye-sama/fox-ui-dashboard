import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-dashboard-react/components/materialTableStyle.js";
import MaterialTable from 'material-table';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


// CSS styles
import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  // defaultFont
} from "assets/jss/material-dashboard-react.js";

const useStyles = makeStyles(styles);

export default function MyCustomTable(props) {
  const classes = useStyles();
  const { useState } = React;
  const [selectedRow, setSelectedRow] = useState(null);
  const { tableHead, tableData, tableHeaderColor, handleRowSelection } = props;

  const theme = createMuiTheme({
    overrides: {

      MuiTableRow: {
        root: {
          color: '#555555',
        },

        footer:{
          '&:hover,&:focus': {
            color: '',
            backgroundColor:"#FFF",
          },
        },
      },
      MuiInput:{
        underline: {
          "&:hover:not($disabled):before,&:before": {
            borderColor: grayColor[4] + " !important",
            borderWidth: "1px !important"
          },
          "&:after": {
            borderColor: "#ff9800",
            borderBottom:" 2px solid #ff9800"
          }
        },

      }
    },
  });

  return (
    <div className={classes.tableResponsive}>
      <ThemeProvider theme={theme}>
        <MaterialTable
          title=""
         
          columns={tableHead}
          data={tableData}
          onRowClick={((evt, selectedRow) => {setSelectedRow(selectedRow.tableData.id);handleRowSelection(selectedRow.tableData.id)})}
          options={{
            rowStyle: rowData => ({
              backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '',
              color : (selectedRow === rowData.tableData.id) ? 
                { 
                  warning: warningColor[0],
                  primary: primaryColor[0],
                  danger: dangerColor[0],
                  success: successColor[0],
                  info:  infoColor[0],
                  rose: roseColor[0],
                  gray: grayColor[0],
                }[tableHeaderColor]
              : '',
              cursor: 'pointer',
            }),
            // switching color according to props
            headerStyle: {
              color: ({
                warning: warningColor[0],
                primary: primaryColor[0],
                danger: dangerColor[0],
                success: successColor[0],
                info:  infoColor[0],
                rose: roseColor[0],
                gray: grayColor[0],
                
              }[tableHeaderColor])
            },


          }}
        />
      </ThemeProvider>

    </div>
  );
}

MyCustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

MyCustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  handleRowSelection: PropTypes.func,
  tableHead: PropTypes.arrayOf(PropTypes.object),
  tableData: PropTypes.arrayOf(PropTypes.object)
};
