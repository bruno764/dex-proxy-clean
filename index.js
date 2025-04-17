<<<<<<< HEAD
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/top-wallets", async (req, res) => {
  try {
    const response = await fetch("https://api.dexscreener.com/latest/dex/pairs/solana");
    const data = await response.json();
    res.json(data.pairs.slice(0, 6));
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar Dexscreener" });
  }
});

app.listen(PORT, () => {
  console.log("✅ Proxy rodando na porta " + PORT);
});
=======
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/top-wallets", async (req, res) => {
  try {
    const response = await fetch("https://api.dexscreener.com/latest/dex/pairs/solana");
    const data = await response.json();
    res.json(data.pairs.slice(0, 6));
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar Dexscreener" });
  }
});

app.listen(PORT, () => {
  console.log("✅ Proxy rodando na porta " + PORT);
});
>>>>>>> 5621200 (deploy: proxy limpo para Dexscreener)
