import axios from 'axios';
import {number} from 'yup';
// import { useNavigation } from "@react-navigation/native"
export const CHOICE_MENU_GH = 'CHOICE_MENU_GH';
export const CHOICE_MENU_BERANDA = 'CHOICE_MENU_BERANDA';
export const CHOICE_DETAIL = 'CHOICE_DETAIL';
export const CHOICE_MENU_TANDON = 'CHOICE_MENU_TANDON';
export const GET_API_LIST_GREENHOUSE = 'GET_API_LIST_GREENHOUSE';

export const GET_API_DASHBOARD = 'GET_API_DASHBOARD';
export const GET_API_GREENHOUSE_BY_ID = 'GET_API_GREENHOUSE_BY_ID';
export const GET_API_MONITORING_BY_ID = 'GET_API_MONITORING_BY_ID';
export const GET_API_CONTROLLING_BY_ID = 'GET_API_CONTROLLING_BY_ID';
export const GET_FIRST_GREENHOUSE = 'GET_FIRST_GREENHOUSE';
export const GET_FIRST_DASHBOARD = 'GET_FIRST_DASHBOARD';

export const GET_API_LIST_TANDON = 'GET_API_LIST_TANDON';
export const GET_FIRST_TANDON = 'GET_FIRST_TANDON';
export const GET_AKTUATOR_TANDON_BY_ID = 'GET_AKTUATOR_TANDON_BY_ID';

import {
  dashboardApi,
  listGreenHouse,
  greenhouseByUserId,
  monitoringApi,
  controllingApi,
  listTandon,
  AktuatorTandon,
} from '../utils/api_link';

// const navigate = useNavigation()

export const setMenuMonotoringControlling = data => ({
  type: CHOICE_MENU_GH,
  data: data,
});

export const setMenuTandon = data => ({
  type: CHOICE_MENU_TANDON,
  data: data,
});

export const setMenuBeranda = data => ({
  type: CHOICE_MENU_BERANDA,
  data: data,
});

export const setGraphicAndHistory = data => ({
  type: CHOICE_DETAIL,
  data: data,
});

export const getApiListGreenHouse = data => ({
  type: GET_API_LIST_GREENHOUSE,
  data: data,
});
export const getApiListTandon = data => ({
  type: GET_API_LIST_TANDON,
  data: data,
});

export const getApiDashboard = data => ({
  type: GET_API_DASHBOARD,
  data: data,
});

export const firstListGreenHouse = token => {
  return async dispatch => {
    return await axios
      .get(listGreenHouse, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(({data}) => {
        dispatch({
          type: GET_FIRST_GREENHOUSE,
          payload: data,
        });
      });
  };
};

export const firstListTandon = token => {
  return async dispatch => {
    return await axios
      .get(listTandon, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(({data}) => {
        dispatch({
          type: GET_FIRST_TANDON,
          payload: data,
        });
      });
  };
};

export const firstDashboard = token => {
  return async dispatch => {
    return await axios
      .get(dashboardApi, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(({data}) => {
        dispatch({
          type: GET_FIRST_DASHBOARD,
          payload: data,
        });
      });
  };
};

export const getApiGreenHouseById = (id, token) => {
  return async dispatch => {
    return await axios
      .get(greenhouseByUserId + id, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(({data}) => {
        dispatch({
          type: GET_API_GREENHOUSE_BY_ID,
          payload: data,
        });
      });
  };
};

export const getMonitoringById = (id, token) => {
  return async dispatch => {
    return await axios
      .get(monitoringApi + id + '&&size=100', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(({data}) => {
        dispatch({
          type: GET_API_MONITORING_BY_ID,
          payload: data.data,
        });
      });
  };
};

export const getControllingById = (id, token) => {
  return async dispatch => {
    return await axios
      .get(controllingApi + id, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(({data}) => {
        dispatch({
          type: GET_API_CONTROLLING_BY_ID,
          payload: data.data,
        });
      });
  };
};

export const getAktuatorTandonById = (id, token) => {
  return async dispatch => {
    return await axios
      .get(AktuatorTandon + id + '/actuator', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(({data}) => {
        dispatch({
          type: GET_AKTUATOR_TANDON_BY_ID,
          payload: data.data,
        });
      });
  };
};
