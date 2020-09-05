import {
  primaryColor,
  blackColor,
  hexToRgb
} from "assets/jss/material-dashboard-react.js";

const checkboxAdnRadioStyle = {
  root: {
    padding: "13px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  labelRoot: {
    marginLeft: "-14px"
  },
  checked: {
    color:"#ff7043 !important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "2px solid rgb(67 75 101 / 45%)",
    borderRadius: "5px",
    transition: "all 0.3s ease",
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    transition: "all 0.3s ease",
    padding: "10px",
    border: "2px solid rgb(67 75 101 / 45%)",
    borderRadius: "5px"
  },
  radio: {
    color: primaryColor[0] + "!important"
  },
  radioChecked: {
    width: "20px",
    height: "20px",
    border: "1px solid #ff7043 ",
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "10px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "50%"
  }
};

export default checkboxAdnRadioStyle;
