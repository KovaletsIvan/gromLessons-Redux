import React from "react";
import SelectedOptions from "./SelectedOptions";
import AvaliableOptions from "./AvaliableOptions";


const TransferList = () => {
  
  return (
    <div className="transfer-list">
      <AvaliableOptions title='Available options' />
      <SelectedOptions title='Selected options'/>
    </div>
  );
};



export default (TransferList);
