import * as React from "react";

import {Datagrid, DateField, DateInput, Filter, List, TextField, TextInput} from 'react-admin';


const CryptoCurrencyFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Nazwa" source="name" alwaysOn name="name"/>
        <TextInput label="Kod" source="code" alwaysOn name="code"/>

    </Filter>
);

export const CryptoCurrencyDetailsList = (props) => (
    <List {...props} title="Kryptowaluty - szczegoly" perPage={25} filters={<CryptoCurrencyFilter/>}>
        <Datagrid rowClick="edit">

            <TextField source="id" label="Lp"/>
            <TextField source="name" label="Nazwa"/>
            <TextField source="code" label="Identfikator"/>
            <TextField source="rate" label="Kurs"/>
            <DateField source="date"
                       label="Data"
                       showTime/>

        </Datagrid>
    </List>
);