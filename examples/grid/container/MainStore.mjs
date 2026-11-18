import Model from './MainModel.mjs';
import Store from '../../../src/data/Store.mjs';

/**
 * A weekly staffing roster for a warehouse: one row per employee,
 * one column per weekday, each cell the shift that employee works.
 * @class Neo.examples.grid.container.MainStore
 * @extends Neo.data.Store
 */
class MainStore extends Store {
    static config = {
        className  : 'Neo.examples.grid.container.MainStore',
        keyProperty: 'name',
        model      : Model,

        data: [
        {name: 'Amara Okafor', role: 'Picker', site: 'North Dock', mon: '06-14', tue: '14-22', wed: '22-06', thu: 'Off', fri: '06-14'},
        {name: 'Jonas Weber', role: 'Packer', site: 'South Dock', mon: '14-22', tue: '22-06', wed: 'Off', thu: '06-14', fri: '14-22'},
        {name: 'Priya Sharma', role: 'Forklift Driver', site: 'Cold Storage', mon: '22-06', tue: 'Off', wed: '06-14', thu: '14-22', fri: '22-06'},
        {name: 'Lars Nilsson', role: 'Shift Supervisor', site: 'Returns', mon: 'Off', tue: '06-14', wed: '14-22', thu: '22-06', fri: 'Off'},
        {name: 'Fatima Al-Sayed', role: 'Shift Supervisor', site: 'Mezzanine', mon: '06-14', tue: '14-22', wed: '22-06', thu: 'Off', fri: '06-14'},
        {name: 'Diego Ramirez', role: 'Quality Checker', site: 'Overflow', mon: '22-06', tue: 'Off', wed: '06-14', thu: '14-22', fri: '22-06'},
        {name: 'Elena Petrova', role: 'Loader', site: 'North Dock', mon: 'Off', tue: '06-14', wed: '14-22', thu: '22-06', fri: 'Off'},
        {name: 'Kwame Mensah', role: 'Dispatcher', site: 'South Dock', mon: '06-14', tue: '14-22', wed: '22-06', thu: 'Off', fri: '06-14'},
        {name: 'Sofia Rossi', role: 'Picker', site: 'Cold Storage', mon: '14-22', tue: '22-06', wed: 'Off', thu: '06-14', fri: '14-22'},
        {name: 'Tomasz Kowalski', role: 'Packer', site: 'Returns', mon: '22-06', tue: 'Off', wed: '06-14', thu: '14-22', fri: '22-06'},
        {name: 'Ingrid Johansson', role: 'Shift Supervisor', site: 'Mezzanine', mon: '06-14', tue: '14-22', wed: '22-06', thu: 'Off', fri: '06-14'},
        {name: 'Mohamed Haddad', role: 'Inventory Clerk', site: 'Overflow', mon: '14-22', tue: '22-06', wed: 'Off', thu: '06-14', fri: '14-22'},
        {name: 'Yuki Tanaka', role: 'Shift Supervisor', site: 'North Dock', mon: '22-06', tue: 'Off', wed: '06-14', thu: '14-22', fri: '22-06'},
        {name: 'Claire Dubois', role: 'Quality Checker', site: 'South Dock', mon: 'Off', tue: '06-14', wed: '14-22', thu: '22-06', fri: 'Off'},
        {name: 'Andre Silva', role: 'Loader', site: 'Cold Storage', mon: '06-14', tue: '14-22', wed: '22-06', thu: 'Off', fri: '06-14'},
        {name: 'Nadia Hassan', role: 'Dispatcher', site: 'Returns', mon: '22-06', tue: 'Off', wed: '06-14', thu: '14-22', fri: '22-06'},
        {name: 'Viktor Horvat', role: 'Picker', site: 'Mezzanine', mon: 'Off', tue: '06-14', wed: '14-22', thu: '22-06', fri: 'Off'},
        {name: 'Lucia Fernandez', role: 'Shift Supervisor', site: 'Overflow', mon: '06-14', tue: '14-22', wed: '22-06', thu: 'Off', fri: '06-14'},
        {name: 'Omar Farouk', role: 'Forklift Driver', site: 'North Dock', mon: '14-22', tue: '22-06', wed: 'Off', thu: '06-14', fri: '14-22'},
        {name: 'Hanna Lindqvist', role: 'Inventory Clerk', site: 'South Dock', mon: '22-06', tue: 'Off', wed: '06-14', thu: '14-22', fri: '22-06'},
        {name: 'Mateo Gonzalez', role: 'Shift Supervisor', site: 'Cold Storage', mon: '06-14', tue: '14-22', wed: '22-06', thu: 'Off', fri: '06-14'},
        {name: 'Aisha Bello', role: 'Quality Checker', site: 'Returns', mon: '14-22', tue: '22-06', wed: 'Off', thu: '06-14', fri: '14-22'},
        {name: 'Stefan Braun', role: 'Loader', site: 'Mezzanine', mon: '22-06', tue: 'Off', wed: '06-14', thu: '14-22', fri: '22-06'},
        {name: 'Leila Ahmadi', role: 'Dispatcher', site: 'Overflow', mon: 'Off', tue: '06-14', wed: '14-22', thu: '22-06', fri: 'Off'},
        {name: 'Pavel Novak', role: 'Shift Supervisor', site: 'North Dock', mon: '06-14', tue: '14-22', wed: '22-06', thu: 'Off', fri: '06-14'},
        {name: 'Grace Mwangi', role: 'Packer', site: 'South Dock', mon: '22-06', tue: 'Off', wed: '06-14', thu: '14-22', fri: '22-06'},
        {name: 'Roberto Bianchi', role: 'Forklift Driver', site: 'Cold Storage', mon: 'Off', tue: '06-14', wed: '14-22', thu: '22-06', fri: 'Off'},
        {name: 'Anya Kowal', role: 'Inventory Clerk', site: 'Returns', mon: '06-14', tue: '14-22', wed: '22-06', thu: 'Off', fri: '06-14'},
        {name: 'Samuel Osei', role: 'Shift Supervisor', site: 'Mezzanine', mon: '14-22', tue: '22-06', wed: 'Off', thu: '06-14', fri: '14-22'},
        {name: 'Freya Andersen', role: 'Quality Checker', site: 'Overflow', mon: '22-06', tue: 'Off', wed: '06-14', thu: '14-22', fri: '22-06'},
        {name: 'Carlos Mendoza', role: 'Loader', site: 'North Dock', mon: '06-14', tue: '14-22', wed: '22-06', thu: 'Off', fri: '06-14'},
        {name: 'Zeynep Yilmaz', role: 'Shift Supervisor', site: 'South Dock', mon: '14-22', tue: '22-06', wed: 'Off', thu: '06-14', fri: '14-22'},
        {name: 'Patrick O\'Brien', role: 'Picker', site: 'Cold Storage', mon: '22-06', tue: 'Off', wed: '06-14', thu: '14-22', fri: '22-06'},
        {name: 'Mei Chen', role: 'Packer', site: 'Returns', mon: 'Off', tue: '06-14', wed: '14-22', thu: '22-06', fri: 'Off'},
        {name: 'Ibrahim Traore', role: 'Forklift Driver', site: 'Mezzanine', mon: '06-14', tue: '14-22', wed: '22-06', thu: 'Off', fri: '06-14'},
        {name: 'Katarina Novakova', role: 'Inventory Clerk', site: 'Overflow', mon: '22-06', tue: 'Off', wed: '06-14', thu: '14-22', fri: '22-06'},
        {name: 'Juan Perez', role: 'Shift Supervisor', site: 'North Dock', mon: 'Off', tue: '06-14', wed: '14-22', thu: '22-06', fri: 'Off'},
        {name: 'Astrid Larsen', role: 'Quality Checker', site: 'South Dock', mon: '06-14', tue: '14-22', wed: '22-06', thu: 'Off', fri: '06-14'},
        {name: 'Tariq Aziz', role: 'Shift Supervisor', site: 'Cold Storage', mon: '14-22', tue: '22-06', wed: 'Off', thu: '06-14', fri: '14-22'},
        {name: 'Weronika Zielinska', role: 'Dispatcher', site: 'Returns', mon: '22-06', tue: 'Off', wed: '06-14', thu: '14-22', fri: '22-06'},
        {name: 'Emeka Obi', role: 'Picker', site: 'Mezzanine', mon: '06-14', tue: '14-22', wed: '22-06', thu: 'Off', fri: '06-14'},
        {name: 'Nora Berg', role: 'Packer', site: 'Overflow', mon: '14-22', tue: '22-06', wed: 'Off', thu: '06-14', fri: '14-22'}
        ]
    }
}

export default Neo.setupClass(MainStore);
