/**
 * @class   Tunes.view.main.Main
 * @extends Ext.panel.Panel
 */
Ext.define('Tunes.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype : 'main',

    requires: [
        'Ext.view.View',
        'Tunes.view.main.MainController',
        'Tunes.view.main.MainModel'
    ],

    controller: 'main',
    viewModel : {
        type: 'main'
    },

    layout: 'border',
    title : 'iTunes Music Videos',

    items: [{
        xtype : 'container',
        region: 'center',
        html  : 'videos'
    }, {
        xtype : 'container',
        region: 'west',
        width : 175,
        html  : 'country list'
    }, {
        xtype : 'container',
        region: 'east',
        width : 400,
        html  : 'video preview'
    }]
});
