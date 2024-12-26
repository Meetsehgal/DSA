// var urlString = "http://208.109.244.236/dsalert-api/";
var urlString = "http://localhost:3309/dsalert-api/";
var access = sessionStorage.getItem("access");
const GetApiCall = {
  getRequest(url) {
    return fetch(urlString + url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
        auth: access,
      },
    });
  },
};

export default GetApiCall;
