const API_BASE = 'https://fortune-and-cowsay-api-by-apirobots.p.rapidapi.com/v1';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST || ''
  }
};

export const getFortune = async () => {
  const response = await fetch(`${API_BASE}/fortune/plain`, options);
  return response.json();
};

export const getCowsay = async () => {
  const response = await fetch(`${API_BASE}/fortune/cowsay`, options);
  return response.json();
};

export const getRandomCow = async () => {
  const response = await fetch(`${API_BASE}/fortune/random-cow`, options);
  return response.json();
};