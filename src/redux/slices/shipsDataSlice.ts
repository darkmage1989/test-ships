import { createSlice } from "@reduxjs/toolkit";
import { vehicles } from "../../interface";
const shipsDataSlice = createSlice({
  name: "shipsDataSlice",
  initialState: {
    vehicles:[] as Array<vehicles>,
    isFilteredVehicles: false,
    filteredVehicles: []  as Array<vehicles>
  },
  reducers: {
    setVehicles: (state, actions) => {
        state.vehicles = actions.payload; 
    },
    setFilteredVehiclesByLevel: (state, actions) => {
      if (!actions.payload) {
        state.isFilteredVehicles = false
        return
      }
      state.isFilteredVehicles = true
      state.filteredVehicles = state.vehicles.filter((vehicle) => vehicle.level === Number(actions.payload))
    },
    setFilteredVehiclesByNation: (state, actions) => {
      if (!actions.payload) {
        state.isFilteredVehicles = false
        return
      }
      state.isFilteredVehicles = true
      state.filteredVehicles = state.vehicles.filter((vehicle) => vehicle.nation.name === actions.payload)
    },
    setFilteredVehiclesByShipClass: (state, actions) => {
      if (!actions.payload) {
        state.isFilteredVehicles = false
        return
      }
      state.isFilteredVehicles = true
      state.filteredVehicles = state.vehicles.filter((vehicle) => vehicle.type.name === actions.payload)
    }
  },
});
export const { setVehicles, setFilteredVehiclesByLevel, setFilteredVehiclesByNation, setFilteredVehiclesByShipClass} = shipsDataSlice.actions;
export default shipsDataSlice.reducer;
