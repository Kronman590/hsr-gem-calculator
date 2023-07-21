import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useSelector, useDispatch } from "react-redux";
import { setEvents, clearEvents, setGems, clearCalc } from "../actions/calcAction";

const Events = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [monthlyPass, setMonthlyPass] = useState(false)

  const handleMonthly = (e) => {
    setMonthlyPass(e.target.checked);
  }

  return (
    <div className="Calculator">
      <FormGroup style={{alignItems: "center"}}>
        <FormControlLabel onChange={handleMonthly} control={<Checkbox />} label="Express Supply Pass?" />
        <FormControlLabel control={<Checkbox />} label="Paid for Nameless Glory for current patch?" />
        <FormControlLabel control={<Checkbox />} label="Purchase Passes from Embers shop at reset?" />
        <Typography>Memory of Chaos Stars (select stars you expect to get each reset):</Typography>
        <br/>
        <Select
          value={0}
          label="Stars"
          style={{width:"10rem"}}
        >
          <MenuItem value={0}>0 Stars</MenuItem>
          <MenuItem value={3}>3 Stars</MenuItem>
          <MenuItem value={6}>6 Stars</MenuItem>
          <MenuItem value={9}>9 Stars</MenuItem>
          <MenuItem value={12}>12 Stars</MenuItem>
          <MenuItem value={15}>15 Stars</MenuItem>
          <MenuItem value={18}>18 Stars</MenuItem>
          <MenuItem value={21}>21 Stars</MenuItem>
          <MenuItem value={24}>24 Stars</MenuItem>
          <MenuItem value={27}>27 Stars</MenuItem>
          <MenuItem value={30}>30 Stars</MenuItem>
        </Select>
        <br/>
        <Typography>Select end date for calculation:</Typography>
        <br/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="End date" />
        </LocalizationProvider>
      </FormGroup>
    </div>
  );
};

export default Events;
