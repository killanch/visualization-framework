import { Map } from "immutable";
import { ActionTypes, ActionKeyStore } from "./actions";

let initialState = Map() // eslint-disable-line
                    .set(ActionKeyStore.TOKEN, null)
                    .set(ActionKeyStore.API, null);

function setSettings(state, token, API) {
    if (!token && !API)
        return state;

    return state.set(ActionKeyStore.TOKEN, token)
                .set(ActionKeyStore.API, API);
}


function VSDReducer(state = initialState, action) {

    switch (action.type) {
        case ActionTypes.VSD_ACTION_SET_SETTINGS:
            return setSettings(state, action.token, action.API);

        default:
            return state;
    }
};


export default VSDReducer;
