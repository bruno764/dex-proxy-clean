const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/top-wallets", async (req, res) => {
  try {
    const proxyUrl = "https://api.allorigins.win/raw?url=";
    const targetUrl = "https://api.dexscreener.com/latest/dex/pairs/solana";

    const response = await fetch(proxyUrl + encodeURIComponent(targetUrl), {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; GlobalDollarSignalsBot/1.0)"
      },
      timeout: 8000
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar via proxy");
    }

    const data = await response.json();
    return res.json(data.pairs || []);
  } catch (error) {
    console.error("❌ Erro ao buscar dados:", error.message);
    return res.status(500).json({ error: "Erro ao buscar dados externos" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Proxy rodando na porta ${PORT}`);
});
