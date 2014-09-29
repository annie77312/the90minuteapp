/**
 * @class   Tunes.view.main.Main
 * @extends Ext.panel.Panel
 */
Ext.define('Tunes.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype : 'main',

    requires: [
        'Ext.tree.Panel',
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
        reference      : 'tunesView',
        autoScroll     : true,
        itemTpl        : [
            '<figure>',
            '<img src="{image}" />',
            '<figcaption>',
            '<p class="title">{title}</p>',
            '<p class="artist">{artist}</p>',
            '</figcaption>',
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
            itemdblclick: 'onVideoDblClick',
            select      : 'onVideoSelect',
            deselect    : 'onVideoDeselect'
        }
    }, {
        xtype    : 'treepanel',
        region   : 'west',
        reference: 'countriesTree',
        width    : 250,
        useArrows: true,
        iconCls  : '',
        bind     : {
            store: '{countries}'
        },
        listeners: {
            select: 'onCountrySelect'
        }
    }, {
        xtype    : 'container',
        region   : 'east',
        reference: 'tunesPreview',
        width    : 550,
        cls      : 'preview',
        tpl      : [
            '<tpl if="this.isData(values)">',
            '<h1>{title}</h1>',
            '<h2>{artist}</h2>',
            '<video autoplay controls preload="auto">',
            '<source src="{preview}" type="{codex}">',
            '</video>',
            '</tpl>', {
                isData: function (data) {
                    return !Ext.Object.isEmpty(data);
                }
            }
        ],
        bind     : {
            data: '{tune}'
        }
    }]
});
