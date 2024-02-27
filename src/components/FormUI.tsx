import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import data from "../data/data.json";
import propsData from "../data/propsData.json";
import ButtonUI from "./Button";
import SelectUI from "./SelectUI";

function FormUI() {
  type TProps = {
    id: string;
    value: string;
    options: string[];
  };

  type TOptions = {
    area: TProps;
    state: TProps;
    "type of work": TProps;
  };
  type TworkType = {
    "type of work": string[];
    area: string[];
    state: string[];
  };
  type Tdata = {
    visaType: string[];
    searchType: TworkType;
  };

  // Get the data from the json
  const dataObj: Tdata = data;
  const propsObj: TOptions = propsData;

  // Turn the data into appropriate props for each components
  const searchOptions = Object.keys(dataObj.searchType);

  const areaOptions = dataObj.searchType.area;

  return (
    <div className="w-[50%]">
      <FormControl className="flex flex-col gap-4">
        <FormLabel htmlFor="visaType">Visa Type</FormLabel>
        <Select id="visaType" placeholder="Select visa type">
          <option>462 Work Holiday</option>
        </Select>

        <SelectUI
          id="searchType"
          value="Choose seach type"
          options={searchOptions}
        />
        <SelectUI id="area" options={areaOptions} value="Select area" />
        {/* <SelectUI id="state" options={stateOptions} value="Select state" />
        <SelectUI
          id="workType"
          options={workOptions}
          value="Select type of work"
  /> */}

        <ButtonUI />
      </FormControl>
    </div>
  );
}

export default FormUI;
