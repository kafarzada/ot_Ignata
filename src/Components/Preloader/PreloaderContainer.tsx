
import Preloader from "./Preloader";
import { AppStateType } from "../../redux/stateRedux";
import { setLoadingActionCreator } from "../../redux/Junior_reducer";
import { connect } from "react-redux";

const mapStateToProps = (state:AppStateType) => {
    return {
        isLoading: state.juniorPage.isLoading
    }
}


export const PreloaderComponent =  connect(mapStateToProps, {
    setLoading: setLoadingActionCreator
})(Preloader)