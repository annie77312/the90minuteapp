/**
 * @class   Tunes.view.main.MainController
 * @extends Ext.app.ViewController
 */
Ext.define('Tunes.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias : 'controller.main',

    requires: [],

    onBeforeTunesStoreLoad: function () {
        var tunesView = this.lookupReference('tunesView');

        tunesView.setLoading(true);
    },

    onTunesStoreLoad: function () {
        var tunesView = this.lookupReference('tunesView');

        tunesView.setLoading(false);
    },

    /**
     * @param {Ext.view.View}       view
     * @param {Tunes.model.Tune}    record
     * @param {HTMLElement}         item
     * @param {Number}              index
     * @param {Ext.event.Event}     e
     * @param {Object}              eOpts
     */
    onVideoDblClick: function (view, record, item, index, e, eOpts) {
        // <debug>
        console.log('onVideoDblClick', view, record, item, index, e, eOpts);
        // </debug>

        // TODO
    },

    /**
     * @param {Ext.view.View}       view
     * @param {Tunes.model.Tune}    record
     * @param {Object}              eOpts
     */
    onVideoSelect: function (view, record, eOpts) {
        // <debug>
        console.log('onVideoSelect', view, record, eOpts);
        // </debug>

        this.getViewModel().set('tune', record);
    },

    /**
     * @param {Ext.view.View}       view
     * @param {Tunes.model.Tune}    record
     * @param {Object}              eOpts
     */
    onVideoDeselect: function (view, record, eOpts) {
        // <debug>
        console.log('onVideoDeselect', view, record, eOpts);
        // </debug>

        this.getViewModel().set('tune', null);
    },

    /**
     * @param {Ext.selection.RowModel}  selModel
     * @param {Ext.data.Model}          record
     * @param {Number}                  index
     * @param {Object}                  eOpts
     */
    onCountrySelect: function (selModel, record, index, eOpts) {
        // abort for groups
        if (!record.isLeaf()) {
            return;
        }

        // <debug>
        console.log('onCountrySelect', selModel, record, index, eOpts);
        // </debug>

        var me = this,
            country = record.get('id'),
            tunesView = me.lookupReference('tunesView'),
            tunesStore = tunesView.getStore(),
            tunesProxy = tunesStore.getProxy();

        tunesProxy.setUrl('https://itunes.apple.com/' + country + '/rss/topmusicvideos/limit=100/explicit=true/json');

        tunesStore.load();
    }
});
