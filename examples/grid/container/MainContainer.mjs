import CellColumnModel       from '../../../src/selection/grid/CellColumnModel.mjs';
import CellColumnRowModel    from '../../../src/selection/grid/CellColumnRowModel.mjs';
import CellModel             from '../../../src/selection/grid/CellModel.mjs';
import CellRowModel          from '../../../src/selection/grid/CellRowModel.mjs';
import Component             from '../../../src/component/Base.mjs';
import ConfigurationViewport from '../../ConfigurationViewport.mjs';
import Container             from '../../../src/container/Base.mjs';
import ColumnModel           from '../../../src/selection/grid/ColumnModel.mjs';
import GridContainer         from '../../../src/grid/Container.mjs';
import MainStore             from './MainStore.mjs';
import Radio                 from '../../../src/form/field/Radio.mjs';
import RowModel              from '../../../src/selection/grid/RowModel.mjs';

/**
 * A weekly staffing roster to try the grid selection models on:
 * enough rows and columns that selecting a column or a block of cells means something.
 * @class Neo.examples.grid.container.MainContainer
 * @extends Neo.examples.ConfigurationViewport
 */
class MainContainer extends ConfigurationViewport {
    static config = {
        className           : 'Neo.examples.grid.container.MainContainer',
        autoMount           : true,
        configItemLabelWidth: 130,
        configPanelFlex     : 1.5,
        exampleComponentFlex: 3,
        layout              : {ntype: 'hbox', align: 'stretch'}
    }

    createConfigurationComponents() {
        let me               = this,
            {selectionModel} = me.grid.view;

        const selectionModelRadioDefaults = {
            module        : Radio,
            hideValueLabel: false,
            labelText     : '',
            name          : 'selectionModel',
            width         : 350
        };

        return [{
            ...selectionModelRadioDefaults,
            checked   : selectionModel.ntype === 'selection-grid-cellmodel',
            labelText : 'selectionModel',
            listeners : {change: me.onRadioViewChange.bind(me, 'selectionModel', CellModel, 'Cell')},
            style     : {marginTop: '10px'},
            valueLabel: 'Cell'
        }, {
            ...selectionModelRadioDefaults,
            checked   : selectionModel.ntype === 'selection-grid-columnmodel',
            listeners : {change: me.onRadioViewChange.bind(me, 'selectionModel', ColumnModel, 'Column')},
            valueLabel: 'Column'
        }, {
            ...selectionModelRadioDefaults,
            checked   : selectionModel.ntype === 'selection-grid-rowmodel',
            listeners : {change: me.onRadioViewChange.bind(me, 'selectionModel', RowModel, 'Row')},
            valueLabel: 'Row'
        }, {
            ...selectionModelRadioDefaults,
            checked   : selectionModel.ntype === 'selection-grid-cellcolumnmodel',
            listeners : {change: me.onRadioViewChange.bind(me, 'selectionModel', CellColumnModel, 'Cell & Column')},
            valueLabel: 'Cell & Column'
        }, {
            ...selectionModelRadioDefaults,
            checked   : selectionModel.ntype === 'selection-grid-cellrowmodel',
            listeners : {change: me.onRadioViewChange.bind(me, 'selectionModel', CellRowModel, 'Cell & Row')},
            valueLabel: 'Cell & Row'
        }, {
            ...selectionModelRadioDefaults,
            checked   : selectionModel.ntype === 'selection-grid-cellcolumnrowmodel',
            listeners : {change: me.onRadioViewChange.bind(me, 'selectionModel', CellColumnRowModel, 'Cell & Column & Row')},
            valueLabel: 'Cell & Column & Row'
        }]
    }

    createExampleComponent() {
        return {
            module: Container,
            layout: {ntype: 'vbox', align: 'stretch'},
            style : {height: '100%'},

            items: [{
                module: Component,
                cls   : ['neo-selection-model-banner'],
                flag  : 'selection-model-banner',
                flex  : 'none',
                style : {padding: '8px 12px'},
                html  : this.getBannerText('Cell')
            }, {
                module: GridContainer,
                flag  : 'roster-grid',
                flex  : 1,
                store : MainStore,

                listeners: {mounted: this.onGridMounted.bind(this)},

                columnDefaults: {
                    width: 110
                },

                viewConfig: {
                    selectionModel: CellModel
                },

                columns: [
                    {dataField: 'name', text: 'Employee', width: 180},
                    {dataField: 'role', text: 'Role',      width: 150},
                    {dataField: 'site', text: 'Site',      width: 140},
                    {dataField: 'mon',  text: 'Monday'},
                    {dataField: 'tue',  text: 'Tuesday'},
                    {dataField: 'wed',  text: 'Wednesday'},
                    {dataField: 'thu',  text: 'Thursday'},
                    {dataField: 'fri',  text: 'Friday'}
                ]
            }]
        }
    }

    /**
     * Convenience shortcut
     * @returns {Neo.grid.Container}
     */
    get grid() {
        // the example component is created before this viewport's items are set,
        // so search inside it rather than using this.down()
        return this.exampleComponent?.down({flag: 'roster-grid'})
    }

    /**
     * @param {String} modelName
     * @returns {String}
     */
    getBannerText(modelName) {
        return `Selection model: <b>${modelName}</b> &mdash; click the grid, then move the selection with the arrow keys. Switch the model on the right.`
    }

    /**
     * The first frame shows a selection: the first three employees' name cells,
     * visible without scrolling at any width.
     */
    onGridMounted() {
        let me                      = this,
            grid                    = me.grid,
            {selectionModel, store} = grid.view,
            ids                     = [];

        [0, 1, 2].forEach(rowIndex => {
            ids.push(grid.view.getLogicalCellId(store.getAt(rowIndex), 'name'))
        });

        selectionModel.select(ids)
    }

    /**
     * @param {String} config
     * @param {Neo.selection.grid.BaseModel} value
     * @param {String} modelName
     * @param {Object} opts
     */
    onRadioViewChange(config, value, modelName, opts) {
        if (opts.value === true) { // we only want to listen to check events, not uncheck
            this.grid.view[config] = value;
            this.exampleComponent.down({flag: 'selection-model-banner'}).html = this.getBannerText(modelName)
        }
    }
}

export default Neo.setupClass(MainContainer);
