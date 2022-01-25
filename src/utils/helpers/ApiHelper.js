import Axios from 'axios';
import ErrorHandlerHelper from './ErrorHandlerHelper';
import SuccessHandlerHelper from './SuccessHandlerHelper';
import { getToken } from './userData';
import { AppConfig } from '../config';

// const [CancelToken] = Axios.CancelToken;
// let cancel;
let cancelToken;
// const cancelTokenSource = Axios.CancelToken.source();

const FetchFromServer = async (
  service,
  endpoint,
  method,
  authenticated = false,
  queryOptions = undefined,
  body = undefined,
  responseType
) => {
  const url = AppConfig.API_ENDPOINT + service + endpoint;
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };
  if (typeof authenticated === 'boolean' && authenticated) {
    const getTokenName = getToken();
    const storageSession = `${getTokenName}`;
    headers.Authorization = storageSession;
  }
  if (typeof authenticated === 'string' && authenticated) {
    headers.Authorization = authenticated;
  }
  const options = {};
  if (responseType === 'blob') {
    options.responseType = 'blob';
  }

  try {
    // cancelToken = Axios.CancelToken.source();
    // console.log('cancelToken', cancelToken)
    const response = await Axios.request({
      ...options,
      method: method.toLowerCase(),
      url,
      data: body,
      headers,
      params: queryOptions,
      // cancelToken: cancelTokenSource.token,
      cancelToken: new Axios.CancelToken(function executor(c) {
        // An executor function receives a cancel function as a parameter
        cancelToken = c;
      }),
    });
    if (
      response.ok === false ||
      response.status < 200 ||
      response.status > 300
    ) {
      const errorObject = {
        code: response.status,
        data: response.data,
      };

      throw errorObject;
    }
    const data = new SuccessHandlerHelper(response.data);
    return data.data;
  } catch (err) {
    let returnData;
    if (Axios.isCancel(err) || !err.response) {
      returnData = {
        isError: true,
        error: 'Request cancelled',
        messages: err.message === 'cancel' ? [] : ['Request cancelled'],
      };
    } else {
      const errorHelper = new ErrorHandlerHelper(err.response);
      returnData = errorHelper.error;
    }
    return returnData;
  }
};

const cancelRequest = () => {
  if (cancelToken) cancelToken.cancel('Operation canceled due to new request.');
};

// export default { FetchFromServer };
export { FetchFromServer, cancelRequest };
