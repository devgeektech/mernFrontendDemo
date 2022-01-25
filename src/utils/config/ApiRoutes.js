/** @format */

const ApiRoutes = {
  LOGIN: {
    service: "/auth",
    url: "/login",
    method: "POST",
    authenticate: false,
  },
  PASSWORD_FORGOT: {
    service: "/auth",
    url: "/forget-password",
    method: "POST",
    authenticate: false,
  },
  RESET_PASSWORD: {
    service: "/auth",
    url: "/reset-password/:id",
    method: "PUT",
    authenticate: true,
  },
  SET_PASSWORD: {
    service: "/auth",
    url: "/set-password/:id",
    method: "PUT",
    authenticate: true,
  },
  ADD_USER: {
    service: "/user",
    url: "",
    method: "POST",
    authenticate: true,
  },
  USERS_LIST: {
    service: "/user",
    url: "",
    method: "GET",
    authenticate: true,
  },
  USER_INFO: {
    service: "/user",
    url: "/:id",
    method: "GET",
    authenticate: true,
  },
  USER_OVERVIEW_INFO: {
    service: "/user",
    url: "/overview/:id",
    method: "GET",
    authenticate: true,
  },
  
  EDIT_USER: {
    service: "/user",
    url: "/:id",
    method: "PUT",
    authenticate: true,
  },
  DELETE_USER: {
    service: "/user",
    url: "/:id",
    method: "DELETE",
    authenticate: true,
  },
  ADMIN_INFO: {
    service: "/auth",
    url: "/me",
    method: "GET",
    authenticate: true,
  },
  EDIT_ADMIN: {
    service: "/auth",
    url: "",
    method: "PUT",
    authenticate: true,
  },
  CHANGE_PASSWORD: {
    service: "/auth",
    url: "/change-password",
    method: "POST",
    authenticate: true,
  },
};

export default ApiRoutes;
