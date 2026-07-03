import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

// Ana sayfadaki coin listesi
export async function getMarketData() {
  try {
    const response = await axios.get(`${BASE_URL}/coins/markets`, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        sparkline: false,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Coin detayı
export async function getCoinDetail(id) {
  try {
    const response = await axios.get(`${BASE_URL}/coins/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}