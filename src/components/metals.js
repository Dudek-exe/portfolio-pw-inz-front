import * as React from "react";

import {Datagrid, List, TextField} from 'react-admin';

export const MetalList = props => (
    <List {...props} title="Metale">
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="price"/>
        </Datagrid>
    </List>
);

