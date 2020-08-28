import { connect } from "react-redux";
import Range from "./Range";
import { AppStateType } from "../../../redux/stateRedux";
import { changeSoundValueActionCreator } from "../../../redux/Junior_reducer";

const mapStatetoProps = (state: AppStateType) => {
    return {
        minValue: state.juniorPage.sound.minValue,
        maxValue: state.juniorPage.sound.maxValue,
        currentValue: state.juniorPage.sound.currentValue,
    }
}


const RangeContainer = connect(mapStatetoProps, {
    changeSoundValue: changeSoundValueActionCreator
})(Range)
export default RangeContainer