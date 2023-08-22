import * as React from "react";

import {Datagrid, DateField, DateInput, Filter, List, ListBase, TextField, TextInput, WithListContext} from 'react-admin';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const CryptoCurrencyFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Nazwa" source="name" alwaysOn name="name"/>
        <TextInput label="Kod" source="code" alwaysOn name="code"/>
        <DateInput label="Data od" source="dateFrom" alwaysOn name="dateFrom"/>
        <DateInput label="Data do" source="dateTo" alwaysOn name="dateTo"/>
    </Filter>
);

export const CryptoCurrencySearchList = (props) => (
    <List {...props} title="Kryptowaluty - wyszukiwarka" perPage={25} filters={<CryptoCurrencyFilter/>}>
        <Datagrid rowClick="edit" bulkActionButtons={false}>

            <TextField source="id" label="Lp"/>
            <TextField source="name" label="Nazwa"/>
            <TextField source="code" label="Identfikator"/>
            <TextField source="rate" label="Kurs[$]"/>
            <DateField source="date"
                       label="Data"
                       showTime/>
        </Datagrid>
        <div style={{ width: '100%', height: '300px' }}>
            <CryptoCurrencyChart width={1500} height={300}/>
        </div>
    </List>
);

const CryptoCurrencyChart = ({ width, height}) => (
    <ListBase resource="cryptoCurrencySearch" disableSyncWithLocation perPage={100}>
        <WithListContext
            render={({ data }) => (
                <LineChart width={width} height={height} data={data}>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line dataKey="rate" type="monotone" stroke="#8884d8" />
                </LineChart>
            )}
        />
    </ListBase>
);