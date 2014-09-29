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
        xtype          : 'dataview',
        region         : 'center',
        autoScroll     : true,
        itemTpl        : [
            '<figure>',
            '<img src="{image}" />',
            '<figcaption><b>{title}</b><br/>{artist}</figcaption>',
            '</figure>'
        ].join(''),
        itemCls        : 'video',
        overItemCls    : 'overvideo',
        selectedItemCls: 'selectedvideo',
        bind           : {
            store: '{tunes}'
        }
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
