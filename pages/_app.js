'use client'
import "@/styles/globals.css";
import "../styles/Main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, zora],
  [
    alchemyProvider({ apiKey: "Nvjk-5BRH6VLoWqiFTVWzZPacNMGaHYC" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Migente",
  projectId: "d8031313a8586b34d0abcaad60cb72ea",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }) {
  return    <Component {...pageProps} />
  
  // (
  //   <WagmiConfig config={wagmiConfig}>
  //     <RainbowKitProvider chains={chains}>
     
  //     </RainbowKitProvider>
  //   </WagmiConfig>
  // );
}
