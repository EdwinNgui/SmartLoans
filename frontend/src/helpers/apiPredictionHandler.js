// Function to make API call to Flask backend
export async function getPrediction(data) {
  const response = await fetch('https://smartloans-w01a.onrender.com/api/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  const result = await response.json();
  return result;
}
