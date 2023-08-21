import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import {Admin, fetchUtils, Resource} from 'react-admin';
import {CurrencySearchList} from './components/currenciesSearch';
import {CurrencyDetailsList} from './components/currenciesDetails';
import {CryptoCurrencySearchList} from './components/cryptocurrenciesSearch';
import {CryptoCurrencyDetailsList} from './components/cryptocurrenciesDetails';
import {MovableCreate, MovableEdit, MovableList} from './components/movables';
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
        <Resource name="currencySearch" list={CurrencySearchList} options={{label: 'Waluty - szukaj'}} icon={MoneyIcon}/>
        <Resource name="currencyDetails" list={CurrencyDetailsList} options={{label: 'Waluty - szczegoly'}} icon={MoneyIcon}/>
        <Resource name="cryptoCurrencySearch" list={CryptoCurrencySearchList} options={{label: 'Kryptowaluty - szukaj'}} icon={PaymentIcon}/>
        <Resource name="cryptoCurrencyDetails" list={CryptoCurrencyDetailsList} options={{label: 'Kryptowaluty - szczegoly'}} icon={PaymentIcon}/>
        <Resource name="movable" list={MovableList} create={MovableCreate} edit={MovableEdit} options={{label: 'Ruchomości'}} icon={DriveEtaIcon}/>

    </Admin>
);
export default App;