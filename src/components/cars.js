import * as React from "react";

import {
    BulkDeleteButton,
    BulkExportButton,
    Create,
    Datagrid,
    Edit,
    Filter,
    List,
    maxValue,
    minValue,
    NumberField,
    NumberInput,
    required,
    SimpleForm,
    TextField,
    TextInput
} from 'react-admin';
import {Fragment} from "react";

const PostBulkActionButtons = () => (
    <Fragment>
        <BulkDeleteButton />
    </Fragment>
);

const CarFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Nazwa" source="name" alwaysOn name="name"/>
        <TextInput label="Marka" source="brand" alwaysOn name="brand"/>
    </Filter>
);

export const CarList = props => (
    <List {...props} title="Samochody" perPage={25} filters={<CarFilter/>}>
        <Datagrid rowClick="edit" bulkActionButtons={<PostBulkActionButtons />}>
            <TextField source="id" label="lp"/>
            <TextField source="name" label="Nazwa"/>
            <TextField source="brand" label="Marka"/>
            <TextField source="model" label="Model"/>
            <NumberField source="productionYear" label="Rocznik"/>
            <NumberField source="purchasePrice" label="Cena zakupu"/>
            <NumberField source="estimatedValue" label="Szacowana wartość"/>
        </Datagrid>
    </List>
);

export const CarCreate = () => (
    <Create mutationMode="optimistic">
        <SimpleForm>
            <TextInput source="name" label="Nazwa" validate={required("Pole wymagane")}/>
            <TextInput source="brand" label="Marka" validate={required("Pole wymagane")}/>
            <TextInput source="model" label="Model" validate={required("Pole wymagane")}/>
            <NumberInput source="productionYear" label="Rocznik" validate={validateYearNumber}/>
            <NumberInput source="purchasePrice" label="Cena zakupu" validate={validatePositiveNumber}/>
            <NumberInput source="estimatedValue" label="Szacowana wartość"/>
        </SimpleForm>
    </Create>
);

export const CarEdit = () => (
    <Edit mutationMode="optimistic">
        <SimpleForm>
            <TextInput source="name" label="Nazwa" validate={required("Pole wymagane")}/>
            <TextInput source="brand" label="Marka" validate={required("Pole wymagane")}/>
            <TextInput source="model" label="Model" validate={required("Pole wymagane")}/>
            <NumberInput source="productionYear" label="Rocznik" validate={validateYearNumber}/>
            <NumberInput source="purchasePrice" label="Cena zakupu" validate={validatePositiveNumber}/>
            <NumberInput source="estimatedValue" label="Szacowana wartość"/>
        </SimpleForm>
    </Edit>
);

const validatePositiveNumber = [minValue(0, 'Wartość musi być dodatnia')];

const validateYearNumber = [
    minValue(0, 'Rok musi być dodatni'),
    maxValue(new Date().getFullYear(), 'Niepoprawny rok')
];
