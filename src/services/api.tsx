const API_BASE = 'https://fortune-and-cowsay-api-by-apirobots.p.rapidapi.com/v1';

export const getFortune = async () => {
  const response = await fetch(`${API_BASE}/fortune/plain`);
  return response.json();
};

export const getCowsay = async () => {
  const response = await fetch(`${API_BASE}/fortune/cowsay`);
  return response.json();
};

export const getRandomCow = async () => {
  const response = await fetch(`${API_BASE}/fortune/random-cow`);
  return response.json();
};