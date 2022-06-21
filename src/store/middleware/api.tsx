import axios from "axios";
import * as actions from "../api";

const api:any = ({ dispatch }:any) => (next:any) => async (action:any) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  try {
    const response = await axios.request({
      baseURL: "http://localhost:8000/data",
      url,
      method,
      data
    });
    // General
    await dispatch(actions.apiCallSuccess(response.data));
    // Specific
    if (onSuccess) await dispatch({ type: onSuccess, payload: response.data });
    
  } catch (error:any) {
    // General
    await dispatch(actions.apiCallFailed(error.message));
    // Specific
    if (onError) await dispatch({ type: onError, payload: error.message });
  }

  next(action)
};

export default api;
