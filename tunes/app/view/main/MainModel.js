/**
 * @class   Tunes.view.main.MainModel
 * @extends Ext.app.ViewModel
 */
Ext.define('Tunes.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias : 'viewmodel.main',

    requires: [
        'Tunes.model.Tune'
    ],

    data: {
        tune: null
    },

    formulas: {},

    stores: {
        tunes: {
            model   : 'Tunes.model.Tune',
            autoLoad: true
        }
    }
});
