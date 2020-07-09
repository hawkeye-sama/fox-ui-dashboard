import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
import Input from "@material-ui/core/Input";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/customSelectStyle";

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(styles);

export default function CustomSelect(props) {
    const classes = useStyles();
    const {
        formControlProps,
        labelText,
        id,
        labelProps,
        inputProps,
        error,
        success,
        value,
        handleChange,
        menuItems,
    } = props;

    const labelClasses = classNames({
        [" " + classes.labelRootError]: error,
        [" " + classes.labelRootSuccess]: success && !error
    });
    const underlineClasses = classNames({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true
    });
    const marginTop = classNames({
        [classes.marginTop]: labelText === undefined
    });
    return (
        <FormControl
            {...formControlProps}
            className={formControlProps.className + " " + classes.formControl}
        >
            {labelText !== undefined ? (
                <InputLabel
                    className={classes.labelRoot + labelClasses}
                    htmlFor={id}
                    {...labelProps}
                >
                    {labelText}
                </InputLabel>
            ) : null}
            {/* <Input

                type={type}
                classes={{
                    root: marginTop,
                    disabled: classes.disabled,
                    underline: underlineClasses
                }}
                id={id}
                {...inputProps}
            /> */}
            <Select
                id={id}
                value={value}
                input={
                    <Input classes={{
                        underline:underlineClasses,
                        disabled: classes.disabled,
                    }}
                    />
                }
                classes={{
                    root: marginTop,
                }}
                onChange={handleChange}
                {...inputProps}
            >  
                {menuItems.map((item,i)=>(
                    <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
                ))}
            </Select>
            {error ? (
                <Clear className={classes.feedback + " " + classes.labelRootError} />
            ) : success ? (
                <Check className={classes.feedback + " " + classes.labelRootSuccess} />
            ) : null}
        </FormControl>
    );
}

CustomSelect.propTypes = {
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    error: PropTypes.bool,
    success: PropTypes.bool,
    type: PropTypes.string,
    handleChange: PropTypes.func,
    menuItems: PropTypes.array,
};
