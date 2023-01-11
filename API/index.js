const APIURL = '';
const APIKEY = 'jqoamn0ivkxriw6dythfgba534x7zp1clp9e8u2s';
export const apiCall = async (path, method, data, sizesCheck) => {
  console.log(
    `${APIURL}${path} path ${path} method ${method} data ${JSON.stringify(
      data,
    )} DeviceId ${DeviceId}`,
  );

  var res = await axios({
    method: method,
    url: `${APIURL}${path}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Apikey: APIKEY,
    },
  })
    .then(response => {
      console.log('API Response', response);
      return response;
    })
    .catch(error => {
      console.log('API Error', error);
      return error.response;
    });

  return res;
};
