const API_BASE = 'https://fortune-and-cowsay-api-by-apirobots.p.rapidapi.com/v1';

export const getFortune = async () => {
  const response = await fetch(`${API_BASE}/fortune`);
  return response.json();
};

export const getCowsay = async () => {
  const response = await fetch(`${API_BASE}/cowsay`);
  return response.json();
};