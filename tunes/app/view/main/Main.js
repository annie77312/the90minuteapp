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

    defaults: {
        style: {
            background: '#ffffff'
        }
    },
    items   : [{
        xtype          : 'dataview',
        region         : 'center',
        autoScroll     : true,
        itemTpl        : [
            '<figure>',
            '<img src="{image}" />',
            '<figcaption><b>{title}</b><br/>{artist}</figcaption>',
            '</figure>'
        ],
        itemCls        : 'video',
        overItemCls    : 'overvideo',
        selectedItemCls: 'selectedvideo',
        emptyTex       : 'No Videos.',
        bind           : {
            store: '{tunes}'
        },
        listeners      : {
            itemdblclick: 'onItemDblClick',
            select      : 'onItemSelect',
            deselect    : 'onItemDeselect'
        }
    }, {
        region: 'west',
        width : 200,
        html  : 'country list'
    }, {
        xtype : 'container',
        region: 'east',
        width : 425,
        cls   : 'preview',
        tpl   : [
            '<tpl if="this.isData(values)">',
            '<h1>{title}</h1>',
            '<h2>{artist}</h2>',
            '<video autoplay controls muted preload="auto">',
            '<source src="{preview}" type="{codex}">',
            '</video>',
            '</tpl>', {
                isData: function (data) {
                    return !Ext.Object.isEmpty(data);
                }
            }
        ],
        bind  : {
            data: '{tune}'
        }
    }]
});
