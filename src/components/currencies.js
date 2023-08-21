import * as React from "react";

import {Datagrid, List, TextField, Filter, TextInput, DateField, DateInput} from 'react-admin';

const CurrencyFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Nazwa" source="name" alwaysOn/>
        <TextInput label="Kod" source="code" alwaysOn/>
        <DateInput label="Data od" source="dateFrom" alwaysOn/>
        <DateInput label="Data do" source="dateTo" alwaysOn/>
    </Filter>
);

export const CurrencyList = (props) => (
    <List {...props} title="Waluty" perPage={25} filters={<CurrencyFilter/>}>
        <Datagrid rowClick="edit">

            <TextField source="id" label="Lp"/>
            <TextField source="name" label="Nazwa"/>
            <TextField source="code" label="Identfikator"/>
            <TextField source="rate" label="Kurs"/>
            <DateField source="date" label="Data"/>
        </Datagrid>
    </List>
);

