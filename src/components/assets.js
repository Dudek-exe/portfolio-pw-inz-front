import * as React from "react";

import {Datagrid, Filter, List, TextField, TextInput} from 'react-admin';

const AssetFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Nazwa" source="name" alwaysOn/>
    </Filter>
);


export const AssetList = props => (
    <List {...props} title="Akcje" filters={<AssetFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="price"/>
        </Datagrid>
    </List>
);

