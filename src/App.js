import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import {Admin, fetchUtils, Resource} from 'react-admin';
import {CurrencyList} from './components/currencies';
import {CryptoCurrencySearchList} from './components/cryptocurrenciesSearch';
import {CryptoCurrencyDetailsList} from './components/cryptocurrenciesDetails';
import {CarList} from './components/cars';
import {MetalList} from './components/metals';
import {AssetList} from './components/assets';
import MoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import PaymentIcon from '@mui/icons-material/Payment';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import authProvider from "./authProvider";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({Accept: 'application/json'});
  }
  const token = localStorage.getItem('token');
  options.headers.set(`Authorization`, `JWT=${token}`);
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider('http://localhost:8080', httpClient);

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="asset" list={AssetList} options={{label: 'Akcje'}} icon={AccountBalanceIcon}/>
      <Resource name="metal" list={MetalList} options={{label: 'Metale'}} icon={FilterHdrIcon}/>
      <Resource name="currency" list={CurrencyList} options={{label: 'Waluty'}} icon={MoneyIcon}/>
      <Resource name="cryptoCurrencySearch" list={CryptoCurrencySearchList} options={{label: 'Kryptowaluty - search'}} icon={PaymentIcon}/>
      <Resource name="cryptoCurrencyDetails" list={CryptoCurrencyDetailsList} options={{label: 'Kryptowaluty - details'}} icon={PaymentIcon}/>
      <Resource name="car" list={CarList} options={{label: 'Samochody'}} icon={DriveEtaIcon}/>

    </Admin>
);
export default App;