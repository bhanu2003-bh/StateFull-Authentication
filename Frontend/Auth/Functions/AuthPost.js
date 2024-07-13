async function AuthPost(url, data) {
  const response = await fetch(url, {
    method: "POST",
    credentials: "include", // Include credentials (cookies)
    headers: {
      "Content-Type": "application/json",
      cookie : document.cookie,
    },
    
    body: JSON.stringify(data),
  });

  return response;
}

export default AuthPost;
