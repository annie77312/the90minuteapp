/**
 * @class   Tunes.view.main.MainModel
 * @extends Ext.app.ViewModel
 */
Ext.define('Tunes.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias : 'viewmodel.main',

    requires: [
        'Tunes.model.Tune',
        'Tunes.model.Country'
    ],

    data: {
        tune: null
    },

    formulas: {},

    stores: {
        tunes    : {
            model    : 'Tunes.model.Tune',
            autoLoad : true,
            sorters  : ['artist'],
            listeners: {
                beforeload: 'onBeforeTunesStoreLoad',
                load      : 'onTunesStoreLoad'
            }
        },
        countries: {
            type   : 'tree',
            model  : 'Tunes.model.Country',
            root   : {
                expanded: true,
                children: [{
                    id  : 'ar',
                    text: 'Argentina',
                    leaf: true
                }, {
                    id  : 'br',
                    text: 'Brazil',
                    leaf: true
                }, {
                    id  : 'us',
                    text: 'United States',
                    leaf: true
                }, {
                    id  : 'de',
                    text: 'Germany',
                    leaf: true
                }, {
                    id  : 'nl',
                    text: 'Netherlands',
                    leaf: true
                }, {
                    id  : 'it',
                    text: 'Italy',
                    leaf: true
                }, {
                    id  : 'gb',
                    text: 'United Kingdom',
                    leaf: true
                }, {
                    id  : 'ja',
                    text: 'Japan',
                    leaf: true
                }, {
                    id  : 'kt',
                    text: 'Korea, Republic of',
                    leaf: true
                }, {
                    id  : 'tw',
                    text: 'Taiwan',
                    leaf: true
                }, {
                    id  : 'au',
                    text: 'Australia',
                    leaf: true
                }, {
                    id  : 'nz',
                    text: 'New Zealand',
                    leaf: true
                }]
            },
            sorters: ['text']
        }
    }
});
