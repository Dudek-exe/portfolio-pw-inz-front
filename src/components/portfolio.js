import * as React from "react";

import {Create, Datagrid, Edit, Filter, List, NumberInput, required, SelectInput, SimpleForm, TextField, TextInput} from 'react-admin';

const choices = [
    {id: 'currency', name: 'Waluta'},
    {id: 'cryptoCurrency', name: 'Kryptowaluta'},
    {id: 'asset', name: 'Akcje'},
    {id: 'others', name: 'Inne'},
];

const PortfolioFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Nazwa" source="name" alwaysOn name="name"/>
        <NumberInput label="Wartość całkowita" source="totalPrice" alwaysOn name="Wartość całkowita"/>
    </Filter>
);

export const PortfolioList = props => (
    <List {...props} title="Akcje" filters={<PortfolioFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="Lp"/>
            <TextField source="name" label="Nazwa"/>
            <TextField source="type" label="Typ"/>
            <TextField source="quantity" label="Ilość"/>
            <TextField source="price" label="Wartość jednostki"/>
            <TextField source="totalPrice" label="Wartość całkowita"/>
        </Datagrid>
    </List>
);

export const PortfolioCreate = () => (
    <Create mutationMode="optimistic">
        <SimpleForm>
            <TextInput source="name" label="Nazwa" validate={required("Pole wymagane")}/>
            <SelectInput source="type" label="Typ" choices={choices} validate={required("Pole wymagane")}/>
            <NumberInput source="quantity" label="Ilość" validate={required("Pole wymagane")}/>
            <NumberInput source="price" label="Wartość jednostki"/>
            <NumberInput source="totalPrice" label="Wartość całkowita"/>
        </SimpleForm>
    </Create>
);

export const PortfolioEdit = () => (
    <Edit mutationMode="optimistic">
        <SimpleForm>
            <TextInput source="name" label="Nazwa" validate={required("Pole wymagane")}/>
            <TextInput source="type" label="Typ" validate={required("Pole wymagane")}/>
            <NumberInput source="quantity" label="Ilość" validate={required("Pole wymagane")}/>
            <NumberInput source="price" label="Wartość jednostki"/>
            <NumberInput source="totalPrice" label="Wartość całkowita"/>
        </SimpleForm>
    </Edit>
);

