const getToken = () => {
  try {
    const userData = JSON.parse(localStorage.getItem("wyredUserData"));
    const token = userData ? userData.token : null;
    return token;
  } catch (error) {
    return "";
  }
};

const setCheck = (email, password) => {
  try {
    const obj = { email, password };
    const data = JSON.stringify(obj);
    localStorage.setItem("staybaselog", data);
    return "";
  } catch (error) {
    return "";
  }
};
const getCheck = () => {
  try {
    const data = JSON.parse(localStorage.getItem("staybaselog"));
    return data;
  } catch (error) {
    return "";
  }
};
const clearCheck = () => {
  try {
    localStorage.removeItem("staybaselog");
    return "";
  } catch (error) {
    return "";
  }
};

const setUserData = async (data) => {
  try {
    const userData = JSON.stringify(data);
    localStorage.setItem("wyredUserData", userData);
    return "";
  } catch (error) {
    return "";
  }
};

const isLogin = () => {
  try {
    const data = JSON.parse(localStorage.getItem("wyredUserData"));
    if (data) {
      return true;
    }
    return false;
  } catch (error) {
    return "";
  }
};

const logout = () => {
  try {
    localStorage.removeItem("wyredUserData");
    window.location.href = "/login";
    return "";
  } catch (error) {
    return "";
  }
};

// eslint-disable-next-line
export default { getToken };
export {
  getToken,
  setCheck,
  getCheck,
  clearCheck,
  setUserData,
  isLogin,
  logout,
};
