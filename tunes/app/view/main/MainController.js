/**
 * @class   Tunes.view.main.MainController
 * @extends Ext.app.ViewController
 */
Ext.define('Tunes.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.main',

    requires: [],

    /**
     * @param {Ext.view.View}       view
     * @param {Tunes.model.Tune}    record
     * @param {HTMLElement}         item
     * @param {Number}              index
     * @param {Ext.event.Event}     e
     * @param {Object}              eOpts
     */
    onItemDblClick: function (view, record, item, index, e, eOpts) {
        // <debug>
        console.log('dblclick', view, record, item, index, e, eOpts);
        // </debug>

        // TODO
    },

    /**
     * @param {Ext.view.View}       view
     * @param {Tunes.model.Tune}    record
     * @param {Object}              eOpts
     */
    onItemSelect: function (view, record, eOpts) {
        // <debug>
        console.log('select', view, record, eOpts);
        // </debug>

        this.getViewModel().set('tune', record);
    },

    /**
     * @param {Ext.view.View}       view
     * @param {Tunes.model.Tune}    record
     * @param {Object}              eOpts
     */
    onItemDeselect: function (view, record, eOpts) {
        // <debug>
        console.log('deselect', view, record, eOpts);
        // </debug>

        this.getViewModel().set('tune', null);
    }
});
