import Model from '../../../src/data/Model.mjs';

/**
 * @class Neo.examples.grid.container.MainModel
 * @extends Neo.data.Model
 */
class MainModel extends Model {
    static config = {
        className: 'Neo.examples.grid.container.MainModel',

        fields: [{
            name: 'name',
            type: 'String'
        }, {
            name: 'role',
            type: 'String'
        }, {
            name: 'site',
            type: 'String'
        }, {
            name: 'mon',
            type: 'String'
        }, {
            name: 'tue',
            type: 'String'
        }, {
            name: 'wed',
            type: 'String'
        }, {
            name: 'thu',
            type: 'String'
        }, {
            name: 'fri',
            type: 'String'
        }]
    }
}

export default Neo.setupClass(MainModel);
