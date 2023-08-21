import * as React from "react";

import { Datagrid, List, TextField } from 'react-admin';

export const CarList = props => (
    <List {...props} title="Samochody">
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="brand" />
            <TextField source="model" />
            <TextField source="bodyType" />
            <TextField source="productionYear" />
        </Datagrid>
    </List>
);
