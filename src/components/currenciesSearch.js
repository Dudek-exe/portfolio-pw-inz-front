import * as React from "react";

import {Datagrid, List, TextField, Filter, TextInput, DateField, DateInput} from 'react-admin';

const CurrencyFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Nazwa" source="name" alwaysOn name="name"/>
        <TextInput label="Kod" source="code" alwaysOn name="code"/>
        <DateInput label="Data od" source="dateFrom" alwaysOn name="dateFrom"/>
        <DateInput label="Data do" source="dateTo" alwaysOn name="dateTo"/>
    </Filter>
);

export const CurrencySearchList = (props) => (
    <List {...props} title="Waluty - wyszukiwarka" perPage={25} filters={<CurrencyFilter/>}>
        <Datagrid rowClick="edit" bulkActionButtons={false}>

            <TextField source="id" label="Lp"/>
            <TextField source="name" label="Nazwa"/>
            <TextField source="code" label="Identfikator"/>
            <TextField source="rate" label="Kurs"/>
            <DateField source="date" label="Data"/>
        </Datagrid>
    </List>
);

