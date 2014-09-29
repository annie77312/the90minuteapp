/**
 * @class   Tunes.view.main.Main
 * @extends Ext.panel.Panel
 */
Ext.define('Tunes.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype : 'main',

    requires: [
        'Ext.tree.Panel',
        'Ext.toolbar.Breadcrumb',
        'Ext.view.View',
        'Tunes.view.main.MainController',
        'Tunes.view.main.MainModel'
    ],
    mixin   : 'Ext.mixin.Responsive',

    controller: 'main',
    viewModel : {
        type: 'main'
    },

    layout: 'border',
    title : 'iTunes Music Videos',

    defaults: {
        style     : {
            background: '#ffffff'
        },
        autoScroll: true
    },
    items   : [{
        xtype          : 'dataview',
        region         : 'center',
        reference      : 'tunesView',
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
        xtype           : 'breadcrumb',
        region          : 'north',
        plugins         : ['responsive'],
        responsiveConfig: {
            wide: {
                hidden: true
            },
            tall: {
                hidden: false
            }
        },
        reference       : 'countriesBreadcrumb',
        height          : 32,
        bind            : {
            store: '{countries}'
        },
        listeners       : {
            selectionchange: 'onCountrySelect'
        }
    }, {
        xtype           : 'treepanel',
        region          : 'west',
        plugins         : ['responsive'],
        responsiveConfig: {
            wide: {
                hidden: false
            },
            tall: {
                hidden: true
            }
        },
        reference       : 'countriesTree',
        width           : 175,
        useArrows       : true,
        iconCls         : '',
        bind            : {
            store: '{countries}'
        },
        listeners       : {
            select: 'onCountrySelect'
        }
    }, {
        xtype           : 'container',
        plugins         : ['responsive'],
        responsiveConfig: {
            wide: {
                region: 'east',
                width : 380
            },
            tall: {
                region: 'south',
                height: 300
            }
        },
        reference       : 'tunesPreview',
        cls             : 'preview',
        tpl             : [
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
        bind            : {
            data: '{tune}'
        }
    }]
});
