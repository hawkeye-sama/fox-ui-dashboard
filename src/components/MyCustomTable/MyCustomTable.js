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
  const {isDelete} = props;
  const [data,setData] = useState(tableData);


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
            borderBottom:" 2px solid " + ({
              warning: warningColor[0],
              primary: primaryColor[0],
              danger: dangerColor[0],
              success: successColor[0],
              info:  infoColor[0],
              rose: roseColor[0],
              gray: grayColor[0],
            }[tableHeaderColor])
          }
        },

      }
    },
  });

  function selectionHandler(evt,selectedRow){
    setSelectedRow(selectedRow.tableData.id);
    handleRowSelection(selectedRow.tableData.id)
  }
  return (
    <div className={classes.tableResponsive}>
      <ThemeProvider theme={theme}>
        <MaterialTable
          title=""
          editable={(isDelete)?{
              onRowDelete: oldData=>
                new Promise((resolve,reject)=>{
                  setTimeout(()=>{
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);
                    resolve()
                  },1000)
                })
                
            }:
            {}
          }
          // TODO - apply style on multiple rows. 2) multiple selection. 3) multiple deletion 


          columns={tableHead}
          data={data}
          onRowClick={((evt, selectedRow) => {selectionHandler(evt,selectedRow)})}
          // onSelectionChange={(event,rowData)=>{console.log(rowData)}}
          actions={(isDelete)?[{
            tooltip: 'Remove All Selected Users',
            icon: 'delete',
            onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
          }]:[]
        }
          options={{
            ...(isDelete)? {selection:true} : {selection:false},
            
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
  tableHeaderColor: "gray",
  handleRowSelection:()=>{},
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
