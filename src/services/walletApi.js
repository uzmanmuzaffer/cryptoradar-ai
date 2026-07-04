const BASE_URL = "https://deep-index.moralis.io/api/v2.2";

const API_KEY = import.meta.env.VITE_MORALIS_API_KEY;

// ERC20 tokenlar
export async function getWalletTokens(address, chain = "eth") {
  try {
    const res = await fetch(
      `${BASE_URL}/${address}/erc20?chain=${chain}`,
      {
        headers: {
          "X-API-Key": API_KEY,
        },
      }
    );

    if (!res.ok) throw new Error("Wallet tokens error");

    return await res.json();
  } catch (err) {
    console.error("Tokens error:", err);
    return [];
  }
}

// Native coin (ETH vb.)
export async function getWalletBalance(address, chain = "eth") {
  try {
    const res = await fetch(
      `${BASE_URL}/${address}/balance?chain=${chain}`,
      {
        headers: {
          "X-API-Key": API_KEY,
        },
      }
    );

    if (!res.ok) throw new Error("Balance error");

    return await res.json();
  } catch (err) {
    console.error("Balance error:", err);
    return null;
  }
}