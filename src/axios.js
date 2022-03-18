import axios from "axios";
//https://backend-jobs-api.herokuapp.com| https://git.heroku.com/backend-jobs-api.git
axios.defaults.baseURL = "https://backend-jobs-api.herokuapp.com/api/v1";

axios.interceptors.request.use(function (req) {
  const user = localStorage.getItem("user");

  if (user) {
    const { token } = JSON.parse(localStorage.getItem("user"));
    req.headers.authorization = `Bearer ${token}`;
    return req;
  }
  return req;
});
