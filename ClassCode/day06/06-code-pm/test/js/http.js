let http = axios.create({
  baseURL: "http://localhost:8888",
  headers: {
    // "content-type": "application/x-www-form-urlencoded",
    // Authorization: localStorage.getItem("token"),
  },
});

// http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
