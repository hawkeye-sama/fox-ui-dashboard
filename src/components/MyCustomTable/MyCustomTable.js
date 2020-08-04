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
import { Fade, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function MyCustomTable(props) {
  const classes = useStyles();
  const { useState } = React;
  const [selectedRow, setSelectedRow] = useState(null);
  const { tableHead, tableData, tableHeaderColor, handleRowSelection, filtering } = props;
  const { isDelete, isEditable } = props;
  const [data, setData] = useState(tableData);
  const [showRowDelIcon, setRowDelIcon] = React.useState(true);
  const [showLoadAnimation, setLoadAnimation] = React.useState(false);

  const theme = createMuiTheme({
    overrides: {

      MuiTableRow: {
        root: {
          color: '#555555',
        },

        footer: {
          '&:hover,&:focus': {
            color: '',
            backgroundColor: "#FFF",
          },
        },
      },
      MuiInput: {
        underline: {
          "&:hover:not($disabled):before,&:before": {
            borderColor: grayColor[4] + " !important",
            borderWidth: "1px !important"
          },
          "&:after": {
            borderBottom: " 2px solid " + ({
              warning: warningColor[0],
              primary: primaryColor[0],
              danger: dangerColor[0],
              success: successColor[0],
              info: infoColor[0],
              rose: roseColor[0],
              gray: grayColor[0],
            }[tableHeaderColor])
          }
        },

      }
    },
  });

  function selectionHandler(evt, selectedRow) {
    if (isDelete) {
      let myData = [...data];
      const index = myData.indexOf(selectedRow);
      myData[index].tableData.checked = !myData[index].tableData.checked;
      var checker = false;
      for (let i = 0; i < myData.length; i++) {
        if (myData[i].tableData.checked) {
          checker = true
          break;
        } else {
          checker = false;
          continue;
        }
      }
      if (checker) {
        setRowDelIcon(false);
      } else {
        setRowDelIcon(true);
      }
      setData(myData);

    } else {
      setSelectedRow(selectedRow.tableData.id);
      handleRowSelection(selectedRow.tableData.id)

    }
  }
  function handleChange(evt, rowData) {
    var checker = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].tableData.checked) {
        checker = true
        break;
      } else {
        checker = false;
        continue;
      }
    }
    if (checker) {
      setRowDelIcon(false);
    } else {
      setRowDelIcon(true);
    }
  }

  function handleRowDeletion(evt, rowData) {
    setLoadAnimation(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let _data = [...data];
        rowData.forEach(rd => {
          _data = _data.filter(t => t.tableData.id !== rd.tableData.id);
        });
        setData(_data);
        setRowDelIcon(true);
        setLoadAnimation(false);
        resolve();

      }, 1500)
    })
  }



  return (
    <div className={classes.tableResponsive}>
      <div style={{opacity:(showLoadAnimation)?0.5:1}} >
        <ThemeProvider theme={theme}>
          <div>
            <Fade in={!showLoadAnimation} timeout={{enter:400,exit:1000}} >
              <MaterialTable
                title=""
                editable={(isDelete && showRowDelIcon) ? {
                  onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const dataDelete = [...data];
                        const index = oldData.tableData.id;
                        dataDelete.splice(index, 1);
                        setData([...dataDelete]);
                        resolve();
                      }, 1000)
                    }),
                  ...(isEditable)? {
                    onRowUpdate: (newData, oldData) =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          const dataUpdate = [...data];
                          const index = oldData.tableData.id;
                          dataUpdate[index] = newData;
                          setData([...dataUpdate]);

                          resolve();
                        }, 1000)
                      }),
                  } : {}
                } :
                  {}
                }

                //  bug when you sort it using column header and then select the row, it changes states which then leads to reset of table
                // need to figure out a way in future

                columns={tableHead}
                data={data}
                onSelectionChange={handleChange}
                onRowClick={((evt, selectedRow) => { selectionHandler(evt, selectedRow) })}

                actions={(isDelete) ? [{
                  tooltip: 'Remove All Selected Users',
                  icon: 'delete',
                  onClick: handleRowDeletion,
                }] : []
                }
                options={{
                  ...(isDelete) ? { selection: true } : { selection: false },
                  filtering: filtering,
                  sorting: true,
                  rowStyle: rowData => ({
                    backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '',
                    color: (selectedRow === rowData.tableData.id) ?
                      {
                        warning: warningColor[0],
                        primary: primaryColor[0],
                        danger: dangerColor[0],
                        success: successColor[0],
                        info: infoColor[0],
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
                      info: infoColor[0],
                      rose: roseColor[0],
                      gray: grayColor[0],

                    }[tableHeaderColor])
                  },


                }}
              />
            </Fade>
          </div>


        </ThemeProvider>
      </div>
      <div style={{ position: "absolute", top: "30%", left: "50%" }}>
        <Fade in={showLoadAnimation} timeout={10} unmountOnExit >
          <CircularProgress color="secondary"   />
        </Fade>
      </div>

    </div>
  );
}

MyCustomTable.defaultProps = {
  tableHeaderColor: "gray",
  handleRowSelection: () => { },
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
