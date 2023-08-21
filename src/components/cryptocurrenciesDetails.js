import * as React from "react";

import {Datagrid, DateField, Filter, List, TextField, TextInput, useRecordContext} from 'react-admin';

const PositiveNegativeNumberField = (props) => {
    const record = useRecordContext();
    const value = record[props.source];

    const numberValue = parseFloat(value);
    const textColor = numberValue >= 0 ? 'green' : 'red';

    return <span style={{color: textColor}}>{value}</span>;
};

const CryptoCurrencyFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Nazwa" source="name" alwaysOn name="name"/>
        <TextInput label="Kod" source="code" alwaysOn name="code"/>

    </Filter>
);

export const CryptoCurrencyDetailsList = (props) => (
    <List {...props} title="Kryptowaluty - szczegoly" perPage={25} filters={<CryptoCurrencyFilter/>}>
        <Datagrid rowClick="edit" bulkActionButtons={false}>

            <TextField source="id" label="Lp"/>
            <TextField source="name" label="Nazwa"/>
            <TextField source="code" label="Identfikator"/>
            <TextField source="rate" label="Kurs[$]"/>
            <PositiveNegativeNumberField source="pc15m" label="15m[%]"/>
            <PositiveNegativeNumberField source="pc30m" label="30m[%]"/>
            <PositiveNegativeNumberField source="pc1h" label="1h[%]"/>
            <PositiveNegativeNumberField source="pc6h" label="6h[%]"/>
            <PositiveNegativeNumberField source="pc12h" label="12h[%]"/>
            <PositiveNegativeNumberField source="pc1d" label="1d[%]"/>
            <DateField source="date"
                       label="Data"
                       showTime/>

        </Datagrid>
    </List>
);