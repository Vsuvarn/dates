import axios from "axios";
const APIURL = 'http://www.raincoastvictoriascreenprinting.com/';
const APIKEY = '4xrkpneu6a735ami1wbhdyo2jg08ql9xtszcvipf';
export const apiCall = async (path, method, data, sizesCheck) => {
  console.log(
    `${APIURL}${path} path ${path} method ${method} data ${JSON.stringify(
      data,
    )}`,
  );
  var formData = new FormData();

  formData.append('email', 'doggydates@gmail.com');
  formData.append('password', '123');
  formData.append('deviceToken', '123');

  var res = await axios({
    method: method,
    url: `${APIURL}${path}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Apikey: APIKEY,
    },
    data: formData,
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
