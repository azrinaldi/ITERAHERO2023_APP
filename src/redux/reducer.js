import {
    CHOICE_MENU_BERANDA,
    CHOICE_MENU_SCREEN,
    CHOICE_DETAIL,
    CHOICE_MENU_TANDON,
    GET_API_LIST_GREENHOUSE,
    GET_API_DASHBOARD,
    GET_API_GREENHOUSE_BY_ID,
    GET_API_MONITORING_BY_ID,
    GET_API_CONTROLLING_BY_ID,
    GET_FIRST_DASHBOARD,
    GET_FIRST_GREENHOUSE,
} from "./action";

const initialState = {
    menuMoCon: 'monitoring',
    menuGraRi: 'graphic',
    menuGreTa: 'greenhouse',
    menuTandon: 'peracikan',
    dataListGreenHouse: [],
    dataDashboard: [],
    dataGreenhouseById: [],
    dataMonitoringByid: [],
    dataControllingByid: [],
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case CHOICE_MENU_BERANDA:
            return {...state, menuGreTa: action.data};
        case CHOICE_MENU_SCREEN:
            return { ...state, menuMoCon: action.data};
        case CHOICE_MENU_TANDON:
            return { ...state, menuTandon: action.data};
        case CHOICE_DETAIL:
            return { ...state, menuGraRi: action.data };
        case GET_API_LIST_GREENHOUSE:
            return { ...state, dataListGreenHouse: action.data };
        case GET_API_DASHBOARD:
            return { ...state, dataDashboard: action.data };
        case GET_API_GREENHOUSE_BY_ID:
            return { ...state, dataGreenhouseById: action.payload };
        case GET_API_MONITORING_BY_ID:
            return { ...state, dataMonitoringByid: action.payload };
        case GET_API_CONTROLLING_BY_ID:
            return { ...state, dataControllingByid: action.payload };
        case GET_FIRST_GREENHOUSE:
            return { ...state, dataListGreenHouse: action.payload };
        case GET_FIRST_DASHBOARD:
            return { ...state, dataDashboard: action.payload };
        default:
            return state;
    }
}

export default userReducer;