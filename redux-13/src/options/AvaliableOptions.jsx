import {connect} from 'react-redux'
import Options from "./Options";
import { avaliableOptionsSelector } from "../options.selectors";
import { toogleOption } from '../options.actions';



const mapState = state =>{
    return{
      options:avaliableOptionsSelector(state),
    }
  }
  
  const mapDispatch = {
    moveOption:toogleOption
  }
  
  export default connect(mapState,mapDispatch)(Options);
