import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import ERC20Transfers from "components/ERC20Transfers";
import NFTBalance from "components/NFTBalance";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import MenuItems from "./components/MenuItems";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    console.log("connectorId", connectorId);
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <MenuItems />
          <div style={styles.headerRight}>
            <Chains />
            <NativeBalance />
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>
          ⭐️ Please star this{" "}
          <a href="https://github.com/ethereum-boilerplate/ethereum-boilerplate/" target="_blank" rel="noopener noreferrer">
            boilerplate
          </a>
          , every star makes us very happy!
        </Text>

        <Text style={{ display: "block" }}>
          🙋 You have questions? Ask them on the {""}
          <a target="_blank" rel="noopener noreferrer" href="https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29">
            Moralis forum
          </a>
        </Text>

        <Text style={{ display: "block" }}>
          📖 Read more about{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
          >
            Moralis
          </a>
        </Text>
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
    <svg width="56.74" height="15.28" viewBox="0 0 56.74 15.28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0.25mm">
      <path
        d="M 7.76 0.66 L 7.22 2.18 A 7.792 7.792 0 0 0 6.498 1.849 A 8.778 8.778 0 0 0 6.32 1.78 A 2.834 2.834 0 0 0 5.596 1.616 A 3.471 3.471 0 0 0 5.26 1.6 A 2.16 2.16 0 0 0 4.654 1.681 A 1.658 1.658 0 0 0 3.91 2.13 A 1.692 1.692 0 0 0 3.521 2.804 Q 3.438 3.065 3.412 3.381 A 3.658 3.658 0 0 0 3.4 3.68 L 3.4 5.02 L 6.48 5.02 L 6.48 6.58 L 3.4 6.58 L 3.4 15.04 L 1.6 15.04 L 1.6 6.58 L 0 6.58 L 0 5.02 L 1.6 5.02 L 1.6 3.8 A 5.119 5.119 0 0 1 1.669 2.94 A 3.987 3.987 0 0 1 1.86 2.22 A 3.79 3.79 0 0 1 2.287 1.387 A 3.325 3.325 0 0 1 2.58 1.02 Q 3.04 0.52 3.7 0.26 A 3.778 3.778 0 0 1 4.828 0.011 A 4.473 4.473 0 0 1 5.14 0 Q 5.855 0 6.404 0.138 A 3.462 3.462 0 0 1 6.59 0.19 Q 7.2 0.38 7.76 0.66 Z M 49.06 10.58 L 41.78 10.58 A 4.818 4.818 0 0 0 42.008 11.585 Q 42.246 12.264 42.688 12.745 A 2.996 2.996 0 0 0 42.8 12.86 A 2.829 2.829 0 0 0 44.325 13.622 A 4.004 4.004 0 0 0 45.02 13.68 Q 45.92 13.68 46.64 13.49 Q 47.36 13.3 48.02 13 L 48.44 14.54 A 7.081 7.081 0 0 1 47.476 14.908 A 8.853 8.853 0 0 1 46.82 15.08 A 8.142 8.142 0 0 1 45.802 15.236 A 10.921 10.921 0 0 1 44.8 15.28 A 5.836 5.836 0 0 1 43.641 15.169 A 4.722 4.722 0 0 1 42.78 14.91 Q 41.88 14.54 41.25 13.85 A 4.425 4.425 0 0 1 40.521 12.75 A 5.515 5.515 0 0 1 40.28 12.15 Q 39.94 11.14 39.94 9.84 A 6.976 6.976 0 0 1 40.101 8.321 A 6.119 6.119 0 0 1 40.28 7.68 Q 40.62 6.68 41.24 5.95 Q 41.86 5.22 42.72 4.81 A 4.241 4.241 0 0 1 44.178 4.42 A 5.16 5.16 0 0 1 44.64 4.4 A 5.582 5.582 0 0 1 45.621 4.482 A 4.124 4.124 0 0 1 46.6 4.78 A 4.01 4.01 0 0 1 47.742 5.545 A 3.767 3.767 0 0 1 48 5.82 A 4.389 4.389 0 0 1 48.799 7.237 A 5.042 5.042 0 0 1 48.84 7.36 A 6.07 6.07 0 0 1 49.119 9.128 A 6.812 6.812 0 0 1 49.12 9.22 A 15.041 15.041 0 0 1 49.062 10.559 A 14.117 14.117 0 0 1 49.06 10.58 Z M 23.46 5.48 L 23.46 4.64 L 25.1 4.64 L 25.1 12.52 A 2.43 2.43 0 0 0 25.12 12.847 Q 25.187 13.334 25.47 13.51 Q 25.84 13.74 26.28 13.74 L 25.9 15.14 A 4.683 4.683 0 0 1 25.87 15.14 Q 23.999 15.128 23.589 13.616 A 2.755 2.755 0 0 1 23.58 13.58 Q 23.34 13.9 23.03 14.21 A 3.641 3.641 0 0 1 22.371 14.729 A 4.058 4.058 0 0 1 22.32 14.76 A 3.492 3.492 0 0 1 21.693 15.053 A 4.141 4.141 0 0 1 21.42 15.14 A 3.753 3.753 0 0 1 20.756 15.26 A 4.691 4.691 0 0 1 20.32 15.28 Q 19.34 15.28 18.49 14.9 Q 17.64 14.52 17.01 13.82 A 4.978 4.978 0 0 1 16.239 12.664 A 6.041 6.041 0 0 1 16.01 12.13 Q 15.64 11.14 15.64 9.9 A 6.611 6.611 0 0 1 15.841 8.248 A 5.968 5.968 0 0 1 16 7.73 Q 16.36 6.72 17.01 5.98 Q 17.66 5.24 18.57 4.82 A 4.625 4.625 0 0 1 20.326 4.405 A 5.416 5.416 0 0 1 20.56 4.4 A 4.517 4.517 0 0 1 21.519 4.498 A 3.741 3.741 0 0 1 22.19 4.71 A 5.2 5.2 0 0 1 23.047 5.169 A 4.421 4.421 0 0 1 23.46 5.48 Z M 53.22 0.24 L 53.22 11.6 Q 53.22 12.68 53.67 13.2 A 1.473 1.473 0 0 0 54.587 13.695 A 2.145 2.145 0 0 0 54.92 13.72 Q 55.3 13.72 55.66 13.63 Q 56.02 13.54 56.3 13.42 L 56.74 14.88 Q 56.46 15.004 56.078 15.105 A 6.996 6.996 0 0 1 55.85 15.16 A 4.763 4.763 0 0 1 55.219 15.257 A 6.103 6.103 0 0 1 54.68 15.28 A 4.284 4.284 0 0 1 53.858 15.204 A 3.612 3.612 0 0 1 53.39 15.08 Q 52.8 14.88 52.36 14.46 A 2.656 2.656 0 0 1 51.864 13.805 A 3.399 3.399 0 0 1 51.67 13.38 A 3.578 3.578 0 0 1 51.495 12.724 Q 51.42 12.294 51.42 11.78 L 51.42 0.24 L 53.22 0.24 Z M 14.54 4.52 L 14 6.38 Q 13.637 6.227 13.147 6.22 A 3.318 3.318 0 0 0 13.1 6.22 Q 12.54 6.22 12.01 6.46 A 2.64 2.64 0 0 0 11.188 7.05 A 3.118 3.118 0 0 0 11.07 7.18 A 3.107 3.107 0 0 0 10.685 7.757 Q 10.539 8.034 10.425 8.366 A 5.208 5.208 0 0 0 10.41 8.41 Q 10.185 9.085 10.162 9.98 A 8 8 0 0 0 10.16 10.18 L 10.16 15.04 L 8.36 15.04 L 8.36 4.64 L 10.1 4.64 L 10.1 6.9 Q 10.28 6.42 10.58 5.96 Q 10.88 5.5 11.29 5.16 A 3.335 3.335 0 0 1 12.058 4.686 A 3.864 3.864 0 0 1 12.24 4.61 A 3.089 3.089 0 0 1 13.039 4.421 A 3.822 3.822 0 0 1 13.44 4.4 Q 13.74 4.4 14.03 4.43 Q 14.289 4.457 14.493 4.508 A 2.289 2.289 0 0 1 14.54 4.52 Z M 27.993 8.572 A 6.839 6.839 0 0 0 27.88 9.84 A 6.941 6.941 0 0 0 27.906 10.445 A 5.744 5.744 0 0 0 28.27 12.04 A 5.89 5.89 0 0 0 28.372 12.286 A 5.087 5.087 0 0 0 29.35 13.76 Q 30.04 14.48 30.99 14.88 A 4.93 4.93 0 0 0 31.6 15.091 A 5.498 5.498 0 0 0 33.06 15.28 A 6.09 6.09 0 0 0 33.265 15.277 A 5.286 5.286 0 0 0 35.11 14.89 Q 36.06 14.5 36.76 13.78 A 4.765 4.765 0 0 0 37.129 13.352 A 5.232 5.232 0 0 0 37.85 12.05 A 5.563 5.563 0 0 0 38.117 11.122 A 6.815 6.815 0 0 0 38.24 9.8 Q 38.24 8.56 37.84 7.56 A 5.743 5.743 0 0 0 37.708 7.255 A 4.884 4.884 0 0 0 36.74 5.86 Q 36.04 5.16 35.09 4.78 A 5.212 5.212 0 0 0 34.971 4.734 A 5.438 5.438 0 0 0 33.06 4.4 A 6.231 6.231 0 0 0 32.821 4.405 A 5.396 5.396 0 0 0 31.01 4.78 Q 30.06 5.16 29.37 5.86 A 4.653 4.653 0 0 0 28.893 6.429 A 5.361 5.361 0 0 0 28.28 7.57 A 5.462 5.462 0 0 0 27.993 8.572 Z M 36.4 9.84 Q 36.4 9.06 36.15 8.36 A 3.913 3.913 0 0 0 35.675 7.429 A 3.543 3.543 0 0 0 35.45 7.14 Q 35 6.62 34.39 6.31 Q 33.78 6 33.06 6 A 3.85 3.85 0 0 0 32.015 6.134 A 2.807 2.807 0 0 0 30.6 7.04 A 3.576 3.576 0 0 0 29.865 8.515 Q 29.734 9.046 29.721 9.67 A 6.574 6.574 0 0 0 29.72 9.8 Q 29.72 10.58 29.97 11.29 A 4.026 4.026 0 0 0 30.433 12.218 A 3.63 3.63 0 0 0 30.67 12.53 Q 31.12 13.06 31.73 13.37 Q 32.34 13.68 33.06 13.68 Q 33.84 13.68 34.46 13.4 Q 35.08 13.12 35.51 12.61 A 3.473 3.473 0 0 0 36.06 11.697 A 4.14 4.14 0 0 0 36.17 11.4 A 4.56 4.56 0 0 0 36.367 10.469 A 5.801 5.801 0 0 0 36.4 9.84 Z M 23.3 12.38 L 23.3 6.8 Q 22.76 6.42 22.11 6.19 Q 21.46 5.96 20.74 5.96 A 3.228 3.228 0 0 0 19.847 6.081 A 2.89 2.89 0 0 0 19.42 6.24 Q 18.82 6.52 18.39 7.03 A 3.479 3.479 0 0 0 17.889 7.831 A 4.3 4.3 0 0 0 17.72 8.26 A 4.685 4.685 0 0 0 17.503 9.316 A 5.724 5.724 0 0 0 17.48 9.84 A 5.145 5.145 0 0 0 17.574 10.839 A 4.356 4.356 0 0 0 17.72 11.39 A 3.857 3.857 0 0 0 18.095 12.195 A 3.309 3.309 0 0 0 18.4 12.61 Q 18.84 13.12 19.43 13.4 A 2.936 2.936 0 0 0 20.59 13.678 A 3.425 3.425 0 0 0 20.72 13.68 Q 21.48 13.68 22.16 13.32 Q 22.84 12.96 23.3 12.38 Z M 41.76 9.12 L 47.46 9.12 Q 47.46 8.016 47.059 7.281 A 2.484 2.484 0 0 0 46.7 6.78 A 2.498 2.498 0 0 0 45.308 6.025 A 3.679 3.679 0 0 0 44.6 5.96 A 2.838 2.838 0 0 0 43.65 6.113 A 2.444 2.444 0 0 0 42.67 6.76 A 2.948 2.948 0 0 0 42.111 7.641 Q 41.946 8.032 41.85 8.512 A 6.457 6.457 0 0 0 41.76 9.12 Z" vector-effect="non-scaling-stroke"
        fill="#1e1e1e"
      />
    </svg>
  </div>
);

export default App;
