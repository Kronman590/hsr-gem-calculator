import React, { useState } from "react";
import Box from '@mui/material/Box'
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
import { setMonthlyPass, setBattlePass, setSimUniverse, setShopPulls, setAbyssStars, setEndDate } from "../actions/calcAction";
import { calcGems } from "./helpers";

const Calculator = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [gems, setGemsState] = useState("");
  const [bplvl, setBPLevel] = useState("");
  const [eqlvl, setEqLevel] = useState(0);
  const [displayPulls, setPullsDisplay] = useState("");

  const handleMonthly = (e) => {
    dispatch(setMonthlyPass(e.target.checked));
  };

  const handleBattlePass = (e) => {
    dispatch(setBattlePass(e.target.checked));
  };

  const handleSimUniverse = (e) => {
    dispatch(setSimUniverse(e.target.checked));
  };

  const handleShop = (e) => {
    dispatch(setShopPulls(e.target.checked));
  };

  const handleStars = (e) => {
    dispatch(setAbyssStars(e));
  };

  const handleEndDate = (e) => {
    dispatch(setEndDate(e.$d));
  };

  const onCalculate = () => {
    setPullsDisplay(calcGems(gems, bplvl, eqlvl, state));
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
            <FormControlLabel onChange={handleSimUniverse} control={<Checkbox checked={state.simUniverse} />} label="Collecting Simulated Universe rewards?" />
            {state.simUniverse && <>
              <Typography>Current Equilibrium Level:</Typography>
              <br/>
              <Select
              value={eqlvl}
              label="Stars"
              onChange={(e) => {
                setEqLevel(e.target.value);
              }}
              size="small"
              style={{width:"10rem"}}
              >
                <MenuItem value={0}>Equilibrium 0</MenuItem>
                <MenuItem value={1}>Equilibrium 1</MenuItem>
                <MenuItem value={2}>Equilibrium 2</MenuItem>
                <MenuItem value={3}>Equilibrium 3</MenuItem>
                <MenuItem value={4}>Equilibrium 4</MenuItem>
                <MenuItem value={5}>Equilibrium 5</MenuItem>
                <MenuItem value={6}>Equilibrium 6</MenuItem>
              </Select>
              <br/>
            </>}
            <FormControlLabel onChange={handleShop} control={<Checkbox checked={state.shopPulls} />} label="Purchase Passes from Embers shop at reset?" />
            <Grid container>
              <Box style={{width:"12%"}}/>
              <Grid item xs={3}>
                <Typography>Memory of Chaos Stars (select stars you expect to get each reset):</Typography>
                <br/>
                <Select
                  value={state.abyssStars[0]}
                  label="Stars"
                  onChange={(e) => handleStars([e.target.value, state.abyssStars[1], state.abyssStars[2]])}
                  size="small"
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
                  <MenuItem value={33}>33 Stars</MenuItem>
                  <MenuItem value={36}>36 Stars</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={3}>
                <Typography>Pure Fiction Stars (select stars you expect to get each reset):</Typography>
                <br/>
                <Select
                  value={state.abyssStars[1]}
                  label="Stars"
                  onChange={(e) => handleStars([state.abyssStars[0], e.target.value, state.abyssStars[2]])}
                  size="small"
                  style={{width:"10rem"}}
                >
                  <MenuItem value={0}>0 Stars</MenuItem>
                  <MenuItem value={1}>1 Stars</MenuItem>
                  <MenuItem value={2}>2 Stars</MenuItem>
                  <MenuItem value={3}>3 Stars</MenuItem>
                  <MenuItem value={4}>4 Stars</MenuItem>
                  <MenuItem value={5}>5 Stars</MenuItem>
                  <MenuItem value={6}>6 Stars</MenuItem>
                  <MenuItem value={7}>7 Stars</MenuItem>
                  <MenuItem value={8}>8 Stars</MenuItem>
                  <MenuItem value={9}>9 Stars</MenuItem>
                  <MenuItem value={10}>10 Stars</MenuItem>
                  <MenuItem value={11}>11 Stars</MenuItem>
                  <MenuItem value={12}>12 Stars</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={3}>
                <Typography>Apocolyptic Shadow Stars (select stars you expect to get each reset):</Typography>
                <br/>
                <Select
                  value={state.abyssStars[2]}
                  label="Stars"
                  onChange={(e) => handleStars([state.abyssStars[0], state.abyssStars[1], e.target.value])}
                  size="small"
                  style={{width:"10rem"}}
                >
                  <MenuItem value={0}>0 Stars</MenuItem>
                  <MenuItem value={1}>1 Stars</MenuItem>
                  <MenuItem value={2}>2 Stars</MenuItem>
                  <MenuItem value={3}>3 Stars</MenuItem>
                  <MenuItem value={4}>4 Stars</MenuItem>
                  <MenuItem value={5}>5 Stars</MenuItem>
                  <MenuItem value={6}>6 Stars</MenuItem>
                  <MenuItem value={7}>7 Stars</MenuItem>
                  <MenuItem value={8}>8 Stars</MenuItem>
                  <MenuItem value={9}>9 Stars</MenuItem>
                  <MenuItem value={10}>10 Stars</MenuItem>
                  <MenuItem value={11}>11 Stars</MenuItem>
                  <MenuItem value={12}>12 Stars</MenuItem>
                </Select>
              </Grid>
            </Grid>
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
