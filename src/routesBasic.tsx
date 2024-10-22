//ルーティングテーブルはこちら
import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";

import NavigationMenus from "./NavigationMenus";
import TopPage from "./components/TopPage";
import CompanyProfilePage from "./components/CompanyProfilePage";
import ContactPage from "./components/ContactPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import ProductListPage from "./components/ProductListPage";
import ShoppingCartPage from "./components/ShoppingCartPage";
import LikeListPage from "./components/LikeListPage";
import LoginPage from "./components/LoginPage";
import UserGuidePage from "./components/UserGuidePage";
import UserPage from "./components/UserPage";
import NotFoundPage from "./components/NotFoundPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<NavigationMenus/>}>
      <Route path="" element={<TopPage />}/>
      <Route path="CompanyProfile" element={<CompanyProfilePage />}/>
      <Route path="Contact" element={<ContactPage />}/>
      <Route path="LikeList" element={<LikeListPage />}/>
      <Route path="Login" element={<LoginPage />}/>
      <Route path="PrivacyPolicy" element={<PrivacyPolicyPage />}/>
      <Route path="ProductsList" element={<ProductListPage />}/>
      <Route path="ShoppingCart" element={<ShoppingCartPage />}/>
      <Route path="UserGuide" element={<UserGuidePage />}/>
      <Route path="UserPage" element={<UserPage />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Route>
    </>
  )
  );


export default router;