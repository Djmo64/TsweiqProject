import React, {useState, useEffect} from 'react';
import SearchData from '../industries.json'
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AutoCompleteText from './AutoCompleteText';
import locationdata from "../components/countries";
import TextField from '@material-ui/core/TextField';
import ReactStars from "react-rating-stars-component";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Datechoice from './Datechoice';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import countries from './countries'
import NumPad from 'react-numpad';





const theme = createMuiTheme({
    palette: {
      primary: {
        
        main: '#1b3258',
      },
      secondary: {
        // This is green.A700 as hex.
        main: 'rgb(255, 131, 79)',
      },
    },
  });

 
 function SearchBox() {

    // const [display, setDisplay] = useState(false);
    // const [options, setOptions] = useState([]);
    // const [search,setSearch] = useState("");

    // useEffect(()=> {
    //     const companyNames = []
    //     const companyData = 

    // })

    // onTextChange = (e) => {
    //         const value = e.target.vale;
    //         if (value.length === 0){

    //         }
    // }

    return(
        <div className= "searchAndTab">
            <input className="inputbar"  type="text"/> 
            {/* <ul> goes in input tag >> onChange={this.onTextChange}
                {SearchData.map((SearchResult, index) => {
                     return <li>{SearchResult.CompanyAccount} -- {SearchResult.Industry} </li>})}
            </ul> */}
        </div> 
    );
    }
    function ModalSearchBox(){
        return (
            <div className='simpletabs'>
            <SimpleTabs/>
            </div>
        )
    }


   

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState('');

  const handleChange2 = (value2) => {
    setValue2(Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( value2));
  };
  const handleChange = (value) => {
    setValue(value);
  };
  const categories = [
    "TV",
    "Cinema",
    "Radio",
    "Print",
    "Out Of Home",
    "Digital",
    "Production",
  ];
  function getUnique(arr, comp) {
    // store the comparison  values in array
    const unique = arr
      .map((e) => e[comp])

      // store the indexes of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the false indexes & return unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }
  const uniqueIndustryData = getUnique(SearchData, "Industry");
  const unique = uniqueIndustryData.map((SearchResult, index) => {
    return SearchResult.Industry})

  const indytype = SearchData.map((item,index) => {
    return item.CompanyAccount
    })
  const countrylist = countries.map((items,index) => {
  return <li>{items}</li>
  })

  return (
      <div>
    <div className={classes.root}>
    <ThemeProvider theme={theme}>
        <TabPanel value={value} index={0} className= 'tab-panel-zero'><h1>Let Us Do The Work For You...</h1>
                                                                        <h2>and filter through all categories to build your optimal campaign.</h2></TabPanel>
        
      <AppBar className="btn-appbar-top" color="primary" position="static">
          
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {/* <Tab label="" {...a11yProps(0)} /> */}
          {/* <Tab label="TV" {...a11yProps(1)} />
          <Tab label="Cinema" {...a11yProps(2)} />
          <Tab label="Radio" {...a11yProps(3)} />
          <Tab label="Print" {...a11yProps(4)} />
          <Tab label="Out of Home" {...a11yProps(5)} />
          <Tab label="Digital" {...a11yProps(6)} />
          <Tab label="Production" {...a11yProps(7)} /> */}
        </Tabs>
      </AppBar>
      </ThemeProvider>
      <TabPanel value={value} index={0}>
      <ThemeProvider theme={theme}>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div">
                  <div className='location'>
                <FormLabel component="legend">location:</FormLabel>
                <Autocomplete
        multiple
        id="tags-outlined"
        options={countries}
        filterSelectedOptions = {false}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"/>
        )}
      /></div>
      <div className='date-div'>
            <FormLabel component="legend">Duration:</FormLabel>
             <Datechoice/></div>
                </div>
            </form>
            <div className="calendar-div">
            
             <div className='industry-div'>
             <FormLabel component="legend">Industry:</FormLabel>
            <div className='Industry-div'>
            <Autocomplete
        multiple
        id="tags-outlined"
        options={unique}
        filterSelectedOptions = {false}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"/>
        )}
      /></div>
      </div> 
      <div className='budget-div'>
      <FormLabel component="legend">Budget:</FormLabel>
      <div className='priceFilter'>
      <NumPad.Number
    onChange={ handleChange2}
    placeholder={''}
    value={ value2}
    decimal={2}
/>
      </div>
      </div>
            </div>
            {/* <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-and-star">
                    <div className="Radio-select">
                <RadioButtonsGroup/>
                <SimpleSelect />
                </div>
                <div className='budget-select'>
            <div>
            <FormLabel component="legend">Rating:</FormLabel>
            </div>
                <div className='star-row'>
                <h3>Minimum Rating:</h3>
                <ReactStars  count= {5} value={1} size={40} activeColor="#ffd700"/>
                </div>
                </div>
                <div className="simple-select-2">
                <SimpleSelect2 />
                </div>
                </div> 
                <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div2">
                <TextField className="section-tab-text-search2" id="outlined-basic" label="Industry" variant="outlined" />
                
                </div>
                
            </form>
            </form> */}
            <div className="button-class-select">
                <Button variant="contained" size="large" color="secondary">
                     Search
                </Button>
                </div>
        </ThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ThemeProvider theme={theme}>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div">
                <TextField className="section-tab-text-search" id="outlined-basic" label="Location" variant="outlined" />
                </div>
            </form>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-and-star">
                    <div className="Radio-select">
                {/* <RadioButtonsGroup/> */}
                <div>
            <FormLabel component="legend">Duration:</FormLabel>
            </div>
                <SimpleSelect />
                <SimpleSelect3/>
                </div>
                <div className='budget-select'>
            <div>
            <FormLabel component="legend">Rating:</FormLabel>
            </div>
                <div className='star-row'>
                <h3>Minimum Rating:</h3>
                <ReactStars  count= {5} value={1} size={40} activeColor="#ffd700"/>
                </div>
                </div>
                <div className="simple-select-2">
                <SimpleSelect2 />
                </div>
                </div> 
                <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div2">
                <TextField className="section-tab-text-search2" id="outlined-basic" label="Industry" variant="outlined" />
                <div className="button-class-select">
                <Button variant="contained" size="large" color="secondary">
                     Search
                </Button>
                </div>
                </div>
                
            </form>
            </form>
        </ThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <ThemeProvider theme={theme}>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div">
                <TextField className="section-tab-text-search" id="outlined-basic" label="Location" variant="outlined" />
                </div>
            </form>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-and-star">
                    <div className="Radio-select">
                <RadioButtonsGroup/>
                <SimpleSelect />
                </div>
                <div className='budget-select'>
            <div>
            <FormLabel component="legend">Rating:</FormLabel>
            </div>
                <div className='star-row'>
                <h3>Minimum Rating:</h3>
                <ReactStars  count= {5} value={1} size={40} activeColor="#ffd700"/>
                </div>
                </div>
                <div className="simple-select-2">
                <SimpleSelect2 />
                </div>
                </div> 
                <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div2">
                <TextField className="section-tab-text-search2" id="outlined-basic" label="Industry" variant="outlined" />
                <div className="button-class-select">
                <Button variant="contained" size="large" color="secondary">
                     Search
                </Button>
                </div>
                </div>
                
            </form>
            </form>
        </ThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <ThemeProvider theme={theme}>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div">
                <TextField className="section-tab-text-search" id="outlined-basic" label="Location" variant="outlined" />
                </div>
            </form>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-and-star">
                    <div className="Radio-select">
                <RadioButtonsGroup/>
                <SimpleSelect />
                </div>
                <div className='budget-select'>
            <div>
            <FormLabel component="legend">Rating:</FormLabel>
            </div>
                <div className='star-row'>
                <h3>Minimum Rating:</h3>
                <ReactStars  count= {5} value={1} size={40} activeColor="#ffd700"/>
                </div>
                </div>
                <div className="simple-select-2">
                <SimpleSelect2 />
                </div>
                </div> 
                <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div2">
                <TextField className="section-tab-text-search2" id="outlined-basic" label="Industry" variant="outlined" />
                <div className="button-class-select">
                <Button variant="contained" size="large" color="secondary">
                     Search
                </Button>
                </div>
                </div>
                
            </form>
            </form>
        </ThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <ThemeProvider theme={theme}>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div">
                <TextField className="section-tab-text-search" id="outlined-basic" label="Location" variant="outlined" />
                </div>
            </form>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-and-star">
                    <div className="Radio-select">
                <RadioButtonsGroup/>
                <SimpleSelect />
                </div>
                <div className='budget-select'>
            <div>
            <FormLabel component="legend">Rating:</FormLabel>
            </div>
                <div className='star-row'>
                <h3>Minimum Rating:</h3>
                <ReactStars  count= {5} value={1} size={40} activeColor="#ffd700"/>
                </div>
                </div>
                <div className="simple-select-2">
                <SimpleSelect2 />
                </div>
                </div> 
                <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div2">
                <TextField className="section-tab-text-search2" id="outlined-basic" label="Industry" variant="outlined" />
                <div className="button-class-select">
                <Button variant="contained" size="large" color="secondary">
                     Search
                </Button>
                </div>
                </div>
                
            </form>
            </form>
        </ThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <ThemeProvider theme={theme}>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div">
                <TextField className="section-tab-text-search" id="outlined-basic" label="Location" variant="outlined" />
                </div>
            </form>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-and-star">
                    <div className="Radio-select">
                <RadioButtonsGroup/>
                <SimpleSelect />
                </div>
                <div className='budget-select'>
            <div>
            <FormLabel component="legend">Rating:</FormLabel>
            </div>
                <div className='star-row'>
                <h3>Minimum Rating:</h3>
                <ReactStars  count= {5} value={1} size={40} activeColor="#ffd700"/>
                </div>
                </div>
                <div className="simple-select-2">
                <SimpleSelect2 />
                </div>
                </div> 
                <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div2">
                <TextField className="section-tab-text-search2" id="outlined-basic" label="Industry" variant="outlined" />
                <div className="button-class-select">
                <Button variant="contained" size="large" color="secondary">
                     Search
                </Button>
                </div>
                </div>
                
            </form>
            </form>
        </ThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <ThemeProvider theme={theme}>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div">
                <TextField className="section-tab-text-search" id="outlined-basic" label="Location" variant="outlined" />
                </div>
            </form>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-and-star">
                    <div className="Radio-select">
                <RadioButtonsGroup/>
                <SimpleSelect />
                </div>
                <div className='budget-select'>
            <div>
            <FormLabel component="legend">Rating:</FormLabel>
            </div>
                <div className='star-row'>
                <h3>Minimum Rating:</h3>
                <ReactStars  count= {5} value={1} size={40} activeColor="#ffd700"/>
                </div>
                </div>
                <div className="simple-select-2">
                <SimpleSelect2 />
                </div>
                </div> 
                <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div2">
                <TextField className="section-tab-text-search2" id="outlined-basic" label="Industry" variant="outlined" />
                <div className="button-class-select">
                <Button variant="contained" size="large" color="secondary">
                     Search
                </Button>
                </div>
                </div>
                
            </form>
            </form>
        </ThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <ThemeProvider theme={theme}>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div">
                <TextField className="section-tab-text-search" id="outlined-basic" label="Location" variant="outlined" />
                </div>
            </form>
            <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-and-star">
                    <div className="Radio-select">
                <RadioButtonsGroup/>
                <SimpleSelect />
                </div>
                <div className='budget-select'>
            <div>
            <FormLabel component="legend">Rating:</FormLabel>
            </div>
                <div className='star-row'>
                <h3>Minimum Rating:</h3>
                <ReactStars  count= {5} value={1} size={40} activeColor="#ffd700"/>
                </div>
                </div>
                <div className="simple-select-2">
                <SimpleSelect2 />
                </div>
                </div> 
                <form className={classes.root} noValidate autoComplete="on">
                <div className="text-field-search-div2">
                <TextField className="section-tab-text-search2" id="outlined-basic" label="Industry" variant="outlined" />
                <div className="button-class-select">
                <Button variant="contained" size="large" color="secondary">
                     Search
                </Button>
                </div>
                </div>
                
            </form>
            </form>
        </ThemeProvider>
      </TabPanel>
      
    </div>
    
    </div>
  );
}

function RadioButtonsGroup() {
    const [value, setValue] = React.useState('Time');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Time By:</FormLabel>
        <RadioGroup aria-label="Time" name="Time1" value={value} onChange={handleChange} row>
          <FormControlLabel value="Seconds" control={<Radio />} label="Seconds" />
          <FormControlLabel value="Days" control={<Radio />} label="Days" />
          <FormControlLabel value="Weeks" control={<Radio />} label="Weeks" />
          <FormControlLabel value="Months" control={<Radio />} label="Months" />
        </RadioGroup>
      </FormControl>
    );
  }
  function SimpleSelect() {
    const classes = useStyles();
    const [time, setTime] = React.useState('');
  
    const handleChange = (event) => {
      setTime(event.target.value);
    };
    return(
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel  id="demo-simple-select-outlined-label">Duration</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={time}
          onChange={handleChange}
          label="Duration"
          className="input-select-form"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={15}>15 seconds</MenuItem>
          <MenuItem value={30}>30 seconds</MenuItem>
          <MenuItem value={60}>60 seconds</MenuItem>
        </Select>
      </FormControl>
        </div>
    )
}
function SimpleSelect2() {
    const classes = useStyles();
    const [amount, setAmount] = React.useState('');
  
    const handleChange = (event) => {
      setAmount(event.target.value);
    };
    return(
        <div className='budget-select'>
            <div>
            <FormLabel component="legend">Budget:</FormLabel>
            </div>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Amount</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={amount}
          onChange={handleChange}
          label="Amount"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={500}>less than 500 AED</MenuItem>
          <MenuItem value={700}>500 AED to 700 AED</MenuItem>
          <MenuItem value={1000}>700 AED to 1000 AED</MenuItem>
          <MenuItem value={3000}>1000 AED to 3000 AED</MenuItem>
          <MenuItem value={5000}>3000 AED or more</MenuItem>
        </Select>
      </FormControl>
        </div>
    )
}
function SimpleSelect3() {
    const classes = useStyles();
    const [slot, setSlot] = React.useState('');
  
    const handleChange = (event) => {
      setSlot(event.target.value);
    };
    return(
        <div className='budget-select'>
            <div>
            <FormLabel component="legend">Time slot:</FormLabel>
            </div>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Hour</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={slot}
          onChange={handleChange}
          label="Amount"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={5}>5:00</MenuItem>
          <MenuItem value={6}>6:00</MenuItem>
          <MenuItem value={7}>7:00</MenuItem>
          <MenuItem value={8}>8:00</MenuItem>
          <MenuItem value={9}>9:00</MenuItem>
        </Select>
      </FormControl>
        </div>
    )
}

 export {SearchBox , ModalSearchBox}