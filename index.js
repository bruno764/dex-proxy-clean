const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/top-wallets", async (req, res) => {
  try {
    const response = await fetch("https://api.dexscreener.com/latest/dex/pairs/solana", {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; GlobalDollarSignalsBot/1.0)"
      }
    });

    if (!response.ok) {
      throw new Error("Resposta não OK da Dexscreener");
    }

    const data = await response.json();
    return res.json(data.pairs); // envia apenas os pares
  } catch (error) {
    console.error("Erro ao buscar Dexscreener:", error.message);
    return res.status(500).json({ error: "Erro ao buscar Dexscreener" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Proxy rodando na porta ${PORT}`);
});
