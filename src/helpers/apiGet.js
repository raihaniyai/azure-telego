import { useState, useEffect } from 'react';
import { ServiceEndpoint, CompanyEndpoint, ProductEndpoint, UserEndpoint, NewsEndpoint, OrderEndpoint, CouponEndpoint, CouponPlanEndpoint } from './../constants/endpoint'

const useCustomFetcher = ({ resourceURL = {}, header = {} }) => {
  const [result, setResult] = useState({ loading: true, returnData: null });
  const options = {
    headers: header
  }

  useEffect(() => {
    if (!result.returnData) {
      fetch(resourceURL, options)
      .then(res => res.json())
      .then(
        (result) => {
          setResult({ loading: false, returnData: result });
        }
      )
    }
    // dependency list eslint is being disabled to prevent recalling the same API
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result.returnData]);

  const refetch = () => {
    setResult({ loading: true, returnData: null });
  };

  return { loading: result.loading, returnData: result.returnData, refetch };
};

export const useFetchNews = searchQuery => {
  const resourceURL = new URL(NewsEndpoint(searchQuery));
  const { returnData = {}, loading } = useCustomFetcher({ resourceURL });

  if (!loading) { const success = returnData.success || [];
    if (!success) {
      const errorAPI = returnData.messageError[0] || ``;
      console.error(errorAPI);

      return {
        loading,
        isError: true,
        messageError: errorAPI,
      };
    }

    const { data } = returnData || {};
    // const { service } = data || {};

    return {
      response: data,
      loading,
    };
  }

  return {
    loading,
  };
};


export const useFetchServiceData = service => {
  const resourceURL = new URL(ServiceEndpoint(service));
  const { returnData = {}, loading } = useCustomFetcher({ resourceURL });

  if (!loading) { const success = returnData.success || [];
    if (!success) {
      const errorAPI = returnData.messageError[0] || ``;
      console.error(errorAPI);

      return {
        loading,
        isError: true,
        messageError: errorAPI,
      };
    }

    const { data } = returnData || {};
    const { service } = data || {};

    return {
      response: service,
      loading,
    };
  }

  return {
    loading,
  };
};

export const useFetchCompanyData = company => {
  const resourceURL = new URL(CompanyEndpoint(company));
  const { returnData = {}, loading } = useCustomFetcher({ resourceURL });

  if (!loading) { const success = returnData.success || [];
    if (!success) {
      const errorAPI = returnData.messageError[0] || ``;
      console.error(errorAPI);

      return {
        loading,
        isError: true,
        messageError: errorAPI,
      };
    }

    const { data } = returnData || {};
    const { company } = data || {};

    return {
      response: company,
      loading,
    };
  }

  return {
    loading,
  };
};

export const useFetchProductData = product => {
  const resourceURL = new URL(ProductEndpoint(product));
  const { returnData = {}, loading } = useCustomFetcher({ resourceURL });

  if (!loading) { const success = returnData.success || [];
    if (!success) {
      const errorAPI = returnData.messageError[0] || ``;
      console.error(errorAPI);

      return {
        loading,
        isError: true,
        messageError: errorAPI,
      };
    }

    const { data } = returnData || {};
    const { plan } = data || {};

    return {
      response: plan,
      loading,
    };
  }

  return {
    loading,
  };
};

export const useFetchUserData = userID => {
  const resourceURL = new URL(UserEndpoint(userID));
  const { returnData = {}, loading } = useCustomFetcher({ resourceURL });

  if (!loading) { const success = returnData.success || [];
    if (!success) {
      const errorAPI = returnData.messageError[0] || ``;
      console.error(errorAPI);

      return {
        loading,
        isError: true,
        messageError: errorAPI,
      };
    }

    const { data } = returnData || {};
    const { user } = data || {};

    return {
      response: user[0],
      loading,
    };
  }

  return {
    loading,
  };
};

export const useFetchOrderData = userID => {
  const resourceURL = new URL(OrderEndpoint(userID));
  const { returnData = {}, loading } = useCustomFetcher({ resourceURL });

  if (!loading) { const success = returnData.success || [];
    if (!success) {
      const errorAPI = returnData.messageError[0] || ``;
      console.error(errorAPI);

      return {
        loading,
        isError: true,
        messageError: errorAPI,
      };
    }

    const { data } = returnData || {};
    const { order } = data || {};

    return {
      response: order,
      loading,
    };
  }

  return {
    loading,
  };
};

export const useFetchCouponData = userID => {
  const resourceURL = new URL(CouponEndpoint(userID));
  const { returnData = {}, loading } = useCustomFetcher({ resourceURL });

  if (!loading) { const success = returnData.success || [];
    if (!success) {
      const errorAPI = returnData.messageError[0] || ``;
      console.error(errorAPI);

      return {
        loading,
        isError: true,
        messageError: errorAPI,
      };
    }

    const { data } = returnData || {};
    const { coupons } = data || {};

    return {
      response: coupons,
      loading,
    };
  }

  return {
    loading,
  };
};

export const useFetchCouponPlan = (userID, planID) => {
  const resourceURL = new URL(CouponPlanEndpoint(userID, planID));
  const { returnData = {}, loading } = useCustomFetcher({ resourceURL });

  if (!loading) { const success = returnData.success || [];
    if (!success) {
      const errorAPI = returnData.messageError[0] || ``;
      console.error(errorAPI);

      return {
        loading,
        isError: true,
        messageError: errorAPI,
      };
    }

    const { data } = returnData || {};
    const { coupons } = data || {};

    return {
      coupons,
      loading,
    };
  }

  return {
    loading,
  };
};
