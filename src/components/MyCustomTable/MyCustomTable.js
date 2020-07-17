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
  const { tableHead, tableData, tableHeaderColor, handleRowSelection, filtering } = props;
  const {isDelete} = props;
  const [data,setData] = useState(tableData);
  const [showRowDelIcon,setRowDelIcon] = React.useState(true);

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
    if(isDelete){
      let myData =[...data];
      const index = myData.indexOf(selectedRow);
      myData[index].tableData.checked= !myData[index].tableData.checked;
      var checker= false;
      for(let i =0 ; i<myData.length;i++){
        if(myData[i].tableData.checked){
          checker = true
          break;
        }else{
          checker = false;
          continue;
        }
      }
      if(checker){
        setRowDelIcon(false);
      }else{
        setRowDelIcon(true);
      }
      setData(myData);

    }else
      {
        setSelectedRow(selectedRow.tableData.id);
        handleRowSelection(selectedRow.tableData.id)
    
      }
  }
  function handleChange(evt,rowData){
    var checker= false;
    for(let i =0 ; i<data.length;i++){
      if(data[i].tableData.checked){
        checker = true
        break;
      }else{
        checker = false;
        continue;
      }
    }
    if(checker){
      setRowDelIcon(false);
    }else{
      setRowDelIcon(true);
    }    
  }

 

  return (
    <div className={classes.tableResponsive}>
      <ThemeProvider theme={theme}>
        <MaterialTable
          title=""
          editable={(isDelete && showRowDelIcon)?{
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
        
          //  bug when you sort it using column header and then select the row, it changes states which then leads to reset of table
          // need to figure out a way in future

          columns={tableHead}
          data={data}
          onSelectionChange={handleChange}
          onRowClick={((evt, selectedRow) => {selectionHandler(evt,selectedRow)})}
      
          actions={(isDelete)?[{
            tooltip: 'Remove All Selected Users',
            icon: 'delete',
            onClick: (evt, data) => {alert('You want to delete ' + data.length + ' rows'); console.log(data)}
          }]:[]
        }
          options={{
            ...(isDelete)? {selection:true} : {selection:false},
            filtering: filtering,
            sorting: true,
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
  filtering: false,
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
  tableData: PropTypes.arrayOf(PropTypes.object),
  filtering: PropTypes.bool,
};
