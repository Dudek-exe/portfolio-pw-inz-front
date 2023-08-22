import * as React from "react";
import {Fragment} from "react";

import {
    BulkDeleteButton,
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    Filter,
    List,
    minValue,
    NumberField,
    NumberInput,
    required,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput, useRecordContext
} from 'react-admin';

const choices = [
    {id: 'apartment', name: 'Mieszkanie'},
    {id: 'house', name: 'Dom'},
    {id: 'land', name: 'Działka'},
    {id: 'service', name: 'Lokal Usługowy'},
    {id: 'others', name: 'Inne'},
];

const PostBulkActionButtons = () => (
    <Fragment>
        <BulkDeleteButton/>
    </Fragment>
);

const PropertyFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Nazwa" source="name" alwaysOn name="name"/>
        <TextInput label="Marka" source="brand" alwaysOn name="brand"/>
    </Filter>
);

export const PropertyList = props => (
    <List {...props} title="Nieruchomości" perPage={25} filters={<PropertyFilter/>}>
        <Datagrid rowClick="edit" bulkActionButtons={<PostBulkActionButtons/>}>
            <TextField source="id" label="lp"/>
            <TextField source="name" label="Nazwa"/>
            <TextField source="address" label="Adres"/>
            <TextField source="area" label="Powierzchnia"/>
            <TextField source="propertyType" label="Typ"/>
            <DateField source="purchaseDate" label="Data zakupu"/>
            <NumberField source="purchasePrice" label="Cena zakupu"/>
            <CompareNumbersField sourceA="estimatedValue" sourceB="purchasePrice" label="Szacowana wartość"/>
        </Datagrid>
    </List>
);

export const PropertyCreate = () => (
    <Create mutationMode="optimistic">
        <SimpleForm>
            <TextInput source="name" label="Nazwa" validate={required("Pole wymagane")}/>
            <TextInput source="address" label="Adres"/>
            <NumberInput source="area" label="Powierzchnia" validate={required("Pole wymagane")}/>
            <DateInput source="purchaseDate" label="Data zakupu"/>
            <NumberInput source="purchasePrice" label="Cena zakupu" validate={validatePositiveNumber}/>
            <NumberInput source="estimatedValue" label="Szacowana wartość"/>
            <SelectInput source="propertyType" label="Typ ruchomości" choices={choices} validate={required("Pole wymagane")}/>
        </SimpleForm>
    </Create>
);

export const PropertyEdit = () => (
    <Edit mutationMode="optimistic">
        <SimpleForm>
            <TextInput source="name" label="Nazwa" validate={required("Pole wymagane")}/>
            <TextInput source="address" label="Adres"/>
            <NumberInput source="area" label="Powierzchnia" validate={required("Pole wymagane")}/>
            <DateInput source="purchaseDate" label="Data zakupu"/>
            <NumberInput source="purchasePrice" label="Cena zakupu" validate={validatePositiveNumber}/>
            <NumberInput source="estimatedValue" label="Szacowana wartość"/>
            <SelectInput source="propertyType" label="Typ ruchomości" choices={choices} validate={required("Pole wymagane")}/>
        </SimpleForm>
    </Edit>
);

const validatePositiveNumber = [minValue(0, 'Wartość musi być dodatnia')];

const CompareNumbersField = (props) => {
    const record = useRecordContext();
    const valueA = parseFloat(record[props.sourceA]);
    const valueB = parseFloat(record[props.sourceB]);

    const textColor = valueA > valueB ? 'green' : 'red';

    return <span style={{color: textColor}}>{valueA}</span>;
};
