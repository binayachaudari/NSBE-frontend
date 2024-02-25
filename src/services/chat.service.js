export const fetchResponse = async (userText) => {
  const response = await fetch('https://nsbe.thedevelop3r.com/chat/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: userText,
    }),
  });

  const data = await response.json();
  return data;
};
