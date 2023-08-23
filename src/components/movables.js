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
    maxValue,
    minValue,
    NumberField,
    NumberInput,
    required,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
    useRecordContext
} from 'react-admin';

const choices = [
    {id: 'car', name: 'Samochód'},
    {id: 'moto', name: 'Motocykl'},
    {id: 'boat', name: 'Łodź'},
    {id: 'yacht', name: 'Jacht'},
    {id: 'electronics', name: 'Elektronika'},
    {id: 'others', name: 'Inne'},
];

const PostBulkActionButtons = () => (
    <Fragment>
        <BulkDeleteButton/>
    </Fragment>
);

const MovableFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Nazwa" source="name" alwaysOn name="name"/>
        <TextInput label="Marka" source="brand" alwaysOn name="brand"/>
    </Filter>
);

export const MovableList = props => (
    <List {...props} title="Ruchomości" perPage={25} filters={<MovableFilter/>}>
        <Datagrid rowClick="edit" bulkActionButtons={<PostBulkActionButtons/>}>
            <TextField source="id" label="lp"/>
            <TextField source="name" label="Nazwa"/>
            <TextField source="brand" label="Marka"/>
            <TextField source="model" label="Model"/>
            <TextField source="movableType" label="Typ"/>
            <NumberField source="productionYear" label="Rocznik"/>
            <DateField source="purchaseDate" label="Data zakupu"/>
            <NumberField source="purchasePrice" label="Cena zakupu"/>
            <CompareNumbersField sourceA="estimatedValue" sourceB="purchasePrice" label="Szacowana wartość"/>
        </Datagrid>
    </List>
);

export const MovableCreate = () => (
    <Create mutationMode="optimistic">
        <SimpleForm>
            <TextInput source="name" label="Nazwa" validate={required("Pole wymagane")}/>
            <TextInput source="brand" label="Marka" validate={required("Pole wymagane")}/>
            <TextInput source="model" label="Model" validate={required("Pole wymagane")}/>
            <NumberInput source="productionYear" label="Rocznik" validate={validateYearNumber}/>
            <DateInput source="purchaseDate" label="Data zakupu" validate={required("Pole wymagane")}/>
            <NumberInput source="purchasePrice" label="Cena zakupu" validate={validatePositiveNumber}/>
            <NumberInput source="estimatedValue" label="Szacowana wartość"/>
            <SelectInput source="movableType" label="Typ ruchomości" choices={choices} validate={required("Pole wymagane")}/>
        </SimpleForm>
    </Create>
);

export const MovableEdit = () => (
    <Edit mutationMode="optimistic">
        <SimpleForm>
            <TextInput source="name" label="Nazwa" validate={required("Pole wymagane")}/>
            <TextInput source="brand" label="Marka" validate={required("Pole wymagane")}/>
            <TextInput source="model" label="Model" validate={required("Pole wymagane")}/>
            <NumberInput source="productionYear" label="Rocznik" validate={validateYearNumber}/>
            <DateInput source="purchaseDate" label="Data zakupu"  validate={required("Pole wymagane")}/>
            <NumberInput source="purchasePrice" label="Cena zakupu" validate={validatePositiveNumber}/>
            <NumberInput source="estimatedValue" label="Szacowana wartość"/>
            <SelectInput source="movableType" label="Typ ruchomości" choices={choices} validate={required("Pole wymagane")}/>
        </SimpleForm>
    </Edit>
);

const validatePositiveNumber = [minValue(0, 'Wartość musi być dodatnia')];

const validateYearNumber = [
    minValue(0, 'Rok musi być dodatni'),
    maxValue(new Date().getFullYear(), 'Niepoprawny rok')
];

const CompareNumbersField = (props) => {
    const record = useRecordContext();
    const valueA = parseFloat(record[props.sourceA]);
    const valueB = parseFloat(record[props.sourceB]);

    let textColor = valueA > valueB ? 'green' : 'red';
    if (valueA === valueB) {
        textColor = 'black'
    }
    return <span style={{color: textColor}}>{valueA}</span>;
};