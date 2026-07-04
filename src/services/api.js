const BASE_URL = "https://api.coingecko.com/api/v3";

// Ana sayfadaki coin listesi
export async function getMarketData() {
  try {
    const response = await fetch(
      `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("getMarketData hatası:", error);
    return [];
  }
}

// Global piyasa istatistikleri
export async function getGlobalData() {
  try {
    const response = await fetch(`${BASE_URL}/global`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("getGlobalData hatası:", error);
    return null;
  }
}

// Coin detayı
export async function getCoinDetail(id) {
  try {
    const response = await fetch(`${BASE_URL}/coins/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("getCoinDetail hatası:", error);
    return null;
  }
}