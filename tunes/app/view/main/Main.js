/**
 * @class   Tunes.view.main.Main
 * @extends Ext.container.Container
 */
Ext.define('Tunes.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype : 'main',

    requires: [
        'Tunes.view.main.MainController',
        'Tunes.view.main.MainModel'
    ],

    controller: 'main',
    viewModel : {
        type: 'main'
    },

    layout: 'fit',

    items: []
});
