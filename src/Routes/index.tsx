import React, { useCallback, useMemo } from "react";
import {
  BrowserRouter,
  Route,
  Routes as Rota,
  Navigate,
} from "react-router-dom";
import useAuthStore from "../Store/authStore";
import { PrivateRoute } from "./PrivateRoute";
import { RegularRoute } from "./RegularRoute";

import Login from "../Screens/Login";
import ForgotPassword from "../Screens/ForgotPassword";
import AuthLayout from "../_layout/AuthLayout";
import LoggedLayout from "../_layout/LoggedLayout";
import CreateNewPassword from "../Screens/CreateNewPassword";
import SendCode from "../Screens/SendCode";
import TokenVerification from "../Screens/TokenVerification";
import BearExample from "../Screens/BearExample";
import ProductRegistration from "../Screens/ProductRegistration";
import PageNotFound from "../Screens/PageNotFound";
import DashboardScreen from "../Screens/DashboardScreen";
import ListOfProducts from "../Screens/ListOfProducts";
import PersonalDetails from "../Screens/PersonalDetails";
import ListBrands from "../Screens/ListBrands";
import ListTypeOfFixing from "../Screens/ListTypeOfFixing";
import ListTMonitoringType from "../Screens/ListMonitoringType";
import UserPermissions from "../Screens/UserPermissions";
import KitRegistration from "../Screens/KitRegistration";
import ListPhaseType from "../Screens/ListPhaseTypes";
import KitList from "../Screens/KitList";
import RegisterClient from "../Screens/RegisterClient";
import ProductPrice from "../Screens/ProductPrice";
import ClientsList from "../Screens/ClientsLIst";
import EnergyProviderList from "../Screens/EnergyProviderList";
import Concessionaire from "../Screens/Concessionaire";
import ProposalList from "../Screens/ProposalList";
import AccessDenied from "../Screens/AccessDenied";
import Proposal from "../Screens/Proposal";
import LoggedChangePassword from "../Screens/LoggedChangePassword";
import APIError from "../Screens/APIError";
import CompanyData from "../Screens/CompanyData";

interface PrivateRouteProps {
  element: React.ReactNode;
  path: string;
}

function Routes() {
  const token = useAuthStore.getState().token;

  const Layout = useMemo(() => {
    return token ? LoggedLayout : AuthLayout;
  }, [token]);

  //const Layout = token ? LoggedLayout : AuthLayout;
  return (
    <BrowserRouter>
      <Layout>
        <Rota>
          <Route path="/" element={<RegularRoute component={Login} />} />
          <Route
            path="/forgot-password"
            element={<RegularRoute component={ForgotPassword} />}
          />
          <Route
            path="/create-new-password"
            element={<RegularRoute component={CreateNewPassword} />}
          />
          <Route
            path="/send-code"
            element={<RegularRoute component={SendCode} />}
          />
          <Route
            path="/token-verification"
            element={<RegularRoute component={TokenVerification} />}
          />
          <Route
            path="/dashboard"
            element={<PrivateRoute component={DashboardScreen} />}
          />
          <Route
            path="/product-registration"
            element={<PrivateRoute component={ProductRegistration} />}
          />
          <Route
            path="/product-list"
            element={<PrivateRoute component={ListOfProducts} />}
          />
          <Route
            path="/personal-details"
            element={<PrivateRoute component={PersonalDetails} />}
          />
          <Route
            path="/user-permissions"
            element={<PrivateRoute component={UserPermissions} />}
          />
          <Route
            path="/list-of-brands"
            element={<PrivateRoute component={ListBrands} />}
          />
          <Route
            path="/list-fixing-type"
            element={<PrivateRoute component={ListTypeOfFixing} />}
          />
          <Route
            path="/kit-registration"
            element={<PrivateRoute component={KitRegistration} />}
          />
          <Route
            path="/kit-list"
            element={<PrivateRoute component={KitList} />}
          />
          <Route
            path="/product-price"
            element={<PrivateRoute component={ProductPrice} />}
          />
          <Route
            path="/clients-list"
            element={<PrivateRoute component={ClientsList} />}
          />
          <Route
            path="/list-monitoring-type"
            element={<PrivateRoute component={ListTMonitoringType} />}
          />
          <Route
            path="/register-client"
            element={<PrivateRoute component={RegisterClient} />}
          />
          <Route
            path="/list-phase-type"
            element={<PrivateRoute component={ListPhaseType} />}
          />
          <Route
            path="/energy-provider-list"
            element={<PrivateRoute component={EnergyProviderList} />}
          />
          <Route
            path="/concessionaire"
            element={<PrivateRoute component={Concessionaire} />}
          />
          <Route
            path="/proposal-list"
            element={<PrivateRoute component={ProposalList} />}
          />
          <Route
            path="/proposal"
            element={<PrivateRoute component={Proposal} />}
          />

          <Route
            path="/logged-change-password"
            element={<PrivateRoute component={LoggedChangePassword} />}
          />

          <Route
            path="/access-denied"
            element={<PrivateRoute component={AccessDenied} />}
          />

          <Route
            path="/api-error"
            element={<PrivateRoute component={APIError} />}
          />
          <Route
            path="/company-data"
            element={<PrivateRoute component={CompanyData} />}
          />
          <Route path="/bear-example" element={<BearExample />} />

          <Route path="*" element={<PageNotFound />} />
        </Rota>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
