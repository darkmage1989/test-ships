import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setFilteredVehiclesByValue } from "../../redux/slices/shipsDataSlice";
export default function FilterByShipClass() {
  const dispatch = useDispatch();
  const [filterByShipClass, setFilterByShipClass] = useState("");
  const isFiltered = useSelector(
    (state: RootState) => state.shipsDataSlice.isFilteredVehicles
  );
  const defaultVehicles = useSelector(
    (state: RootState) => state.shipsDataSlice.vehicles
  );
  const filteredVehicles = useSelector(
    (state: RootState) => state.shipsDataSlice.filteredVehicles
  );
  const vehicles = isFiltered ? filteredVehicles : defaultVehicles;
  const handleChangeFilteredVehiclesByShipClass = (event: SelectChangeEvent) => {
    setFilterByShipClass(event.target.value);
    dispatch(setFilteredVehiclesByValue({valueFilter: event.target.value, nameFilter: 'byClassShip'}))
  };
  const shipClass = vehicles
    .map((vehicle) => vehicle.type.name)
    .filter(function (item, position, array) {
      return array.lastIndexOf(item) === position;
    });
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80, backgroundColor: 'white',borderRadius: '20px', width: '110px'}}>
        <InputLabel id="demo-simple-select-autowidth-label">Класс</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={filterByShipClass}
          onChange={handleChangeFilteredVehiclesByShipClass}
          autoWidth
          label="Класс"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {shipClass.map((ship) => (
            <MenuItem key={ship} value={ship}>
              <em>{ship}</em>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </div>
  );
}
