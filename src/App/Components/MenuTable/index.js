import React from 'react'
import { Container, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    input: {
        display: "none"
    }
}));

let API_DATA = [
    { country: "US", capital: "DC" },
    { country: "UK", capital: "London" },
    { country: "Aus", capital: "Canberra" }
];


export default function MenuTable() {
    const classes = useStyles();
    const [tableData, setTableData] = React.useState(API_DATA);
    const [selected, setSelected] = React.useState("");

    function handleChange(event) {
        setSelected(event.target.value);
        let _vals = event.target.value
            ? API_DATA.filter(r => r.country === event.target.value)
            : API_DATA;
        setTableData(_vals);
    }
    return (
        <>
            <Select
                style={{ width: "20%" }}
                value={selected}
                onChange={handleChange}
                name="country"
                displayEmpty
                className={classes.selectEmpty}
            >
                <MenuItem value="">All nature</MenuItem>
                <MenuItem value="US">Leo</MenuItem>
                <MenuItem value="UK">Fil</MenuItem>
                <MenuItem value="Aus">Aus</MenuItem>
            </Select>
            
        </>
    )
}