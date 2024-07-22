import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { appWithTranslation } from "next-i18next";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Layout from "../Layout";
import CartProvider from "../Helper/CartContext/CartProvider";
import "../public/assets/scss/app.scss";
import AccountProvider from "../Helper/AccountContext/AccountProvider";
import SettingProvider from "../Helper/SettingContext/SettingProvider";
import BadgeProvider from "../Helper/BadgeContext/BadgeProvider";
import CategoryProvider from "../Helper/CategoryContext/CategoryProvider";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
const [queryClient] = useState(() => new QueryClient());
const getLayout = Component.getLayout || ((page) =>
    <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
            <Layout>{page}</Layout>
        </Hydrate>
    </QueryClientProvider>);
    return (
        <>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <AccountProvider>
                            <SettingProvider>
                                <BadgeProvider>
                                    <CategoryProvider>
                                        {getLayout(
                                            <CartProvider>
                                                <Component {...pageProps} />
                                            </CartProvider>
                                        )}
                                    </CategoryProvider>
                                </BadgeProvider>
                            </SettingProvider>
                        </AccountProvider>
                    </Hydrate>
                </QueryClientProvider>
                <ToastContainer theme="colored" />
            </Provider>
        </>
    );
}

export default appWithTranslation(MyApp);
