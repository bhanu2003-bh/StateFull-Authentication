const AuthGet = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
      headers :{
        cookie: document.cookie
      }
    });
    return response;
  } catch (error) {
    console.error("Error in AuthGET:", error);
    throw error;
  }
};

export default AuthGet;
