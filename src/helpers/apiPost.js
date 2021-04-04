import { useState } from 'react';
import { UserEndpoint, OrderEndpoint, GachaEndpoint } from './../constants/endpoint';

const useCustomPoster = () => {
  const [result, setResult] = useState({ loading: true, returnData: {} });

  const postFetcher = ({ resourceURL = {}, params = {}, contentType = `application/json` }) => {
    const headers = { 'Content-Type': contentType };

    fetch(resourceURL, { method: 'POST', headers, body: params })
      .then(res => res.json())
      .then(
        (result) => {
          setResult({ loading: false, returnData: result });
        }
      ).catch(err => {
        console.error(err);
      });
  };

  return { postFetcher, result };
};

export const usePostUpdateBalance = () => {
  const { result, postFetcher } = useCustomPoster();
  const { loading, returnData } = result;
  let isSuccess = false;
  let isError = false;
  let messageError = '';
  let balance = 0;

  const postUpdateBalance = params => {
    const resourceURL = new URL(UserEndpoint(params.userID));
    const bodyParam = {
      userID: params.userID,
      balance: params.balance,
    };

    postFetcher({ resourceURL, params: JSON.stringify(bodyParam) });
  };

  if (!loading) {
    if (!returnData?.success) {
      isError = !returnData?.success;
      messageError = "An error has occured";
    } else {
      const { data } = returnData || {};
      balance = data.balance || 0;
      isSuccess = returnData?.success;
    }
  }

  return {
    updatedBalance: balance,
    loading,
    isSuccess,
    isError,
    messageError,
    postUpdateBalance,
  };
};

export const usePostOrder = () => {
  const { result, postFetcher } = useCustomPoster();
  const { loading, returnData } = result;
  let isSuccess = false;
  let isError = false;
  let messageError = '';

  const postOrder = params => {
    const resourceURL = new URL(OrderEndpoint(params.userID));
    const bodyParam = {
      planID: params.planID,
      planType: params.planType,
      price: params.price,
    };

    postFetcher({ resourceURL, params: JSON.stringify(bodyParam) });
  };

  if (!loading) {
    if (!returnData?.success) {
      isError = !returnData?.success;
      messageError = "An error has occured";
    } else {
      isSuccess = returnData?.success;
    }
  }

  return {
    loading,
    isSuccess,
    isError,
    messageError,
    postOrder,
  };
};

export const usePostGacha = () => {
  const { result, postFetcher } = useCustomPoster();
  const { loading, returnData } = result;
  let isSuccess = false;
  let isError = false;
  let messageError = '';
  let gachaData = {};

  // const params = 1;

  const postGacha = () => {
    const resourceURL = new URL(GachaEndpoint(1));
    postFetcher({ resourceURL, params: JSON.stringify({}) });
  };

  if (!loading) {
    if (!returnData?.success) {
      isError = !returnData?.success;
      messageError = "An error has occured";
    } else {
      const { data } = returnData || {};
      gachaData = data.gachaResult || 0;
      isSuccess = returnData?.success;
    }
  }

  return {
    gachaData,
    loading,
    postGacha
  };
};
