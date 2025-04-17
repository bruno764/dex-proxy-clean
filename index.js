const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/top-wallets", async (req, res) => {
  try {
    const response = await fetch("https://api.dexscreener.com/latest/dex/pairs/solana");
    const data = await response.json();
    res.json(data.pairs);
  } catch (error) {
    console.error("Erro ao buscar Dexscreener:", error);
    res.status(500).json({ error: "Erro ao buscar Dexscreener" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Proxy rodando na porta ${PORT}`);
});
