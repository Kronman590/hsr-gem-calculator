import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useSelector, useDispatch } from "react-redux";
import { setMonthlyPass, setBattlePass, setShopPulls, setAbyssStars, setEndDate } from "../actions/calcAction";
import { calcGems } from "./helpers";

const Calculator = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [gems, setGemsState] = useState("");
  const [bplvl, setBPLevel] = useState("");
  const [displayPulls, setPullsDisplay] = useState("");

  const handleMonthly = (e) => {
    dispatch(setMonthlyPass(e.target.checked));
  };

  const handleBattlePass = (e) => {
    dispatch(setBattlePass(e.target.checked));
  };

  const handleShop = (e) => {
    dispatch(setShopPulls(e.target.checked));
  };

  const handleStars = (e) => {
    dispatch(setAbyssStars(e.target.value));
  };

  const handleEndDate = (e) => {
    dispatch(setEndDate(e.$d));
  };

  const onCalculate = () => {
    setPullsDisplay(calcGems(gems, bplvl, state));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ minWidth: '100%' }}>
          <FormGroup style={{alignItems: "center"}}>
            <FormControlLabel onChange={handleMonthly} control={<Checkbox checked={state.monthlyPass} />} label="Express Supply Pass?" />
            <FormControlLabel onChange={handleBattlePass} control={<Checkbox checked={state.battlePass} />} label="Paid for Nameless Glory for current patch?" />
            {state.battlePass && <>
              <Typography>Nameless Honor current Level:</Typography>
              <br/>
              <TextField
                id="outlined-number"
                label="BP Level"
                type="number"
                size="small"
                value={bplvl}
                onChange={(e) => {
                  setBPLevel(e.target.value);
                }}
              />
              <br/>
            </>}
            <FormControlLabel onChange={handleShop} control={<Checkbox checked={state.shopPulls} />} label="Purchase Passes from Embers shop at reset?" />
            <Typography>Memory of Chaos Stars (select stars you expect to get each reset):</Typography>
            <br/>
            <Select
              value={state.abyssStars}
              label="Stars"
              onChange={handleStars}
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
                <DatePicker 
                  label="End date"
                  onChange={handleEndDate}
                  value={state.endDate} />
            </LocalizationProvider>
            <br/>
            <Typography>Starting Stellar Jade Count:</Typography>
            <br/>
            <TextField
              id="outlined-number"
              label="Stellar Jades"
              type="number"
              value={gems}
              onChange={(e) => {
                setGemsState(e.target.value);
              }}
            />
            <br/>
            <Button variant="contained" onClick={onCalculate}>Calculate</Button>
          </FormGroup>
        </Card>
      </Grid>
      {displayPulls && <Grid item xs={12}>
        <Card sx={{ minWidth: '100%' }} style={{padding: "100px 0px", background: "pink", border: "2px solid cyan", color: "black"}}>
          <Typography style={{whiteSpace: 'pre-line'}}>{displayPulls}</Typography>
        </Card>
      </Grid>}
    </Grid>
  );
};

export default Calculator;
