"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const inter = Inter({ subsets: ["latin"] });
import { store, persistor } from "./store";




export default function RootLayout({ children }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
       <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
       <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <body className={inter.className}>{children}</body>
 </PersistGate>
 </Provider>
 </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    </html>
  );
}
