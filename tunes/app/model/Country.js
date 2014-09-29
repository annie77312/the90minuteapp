/**
 * @class   Tunes.model.Country
 * @extends Ext.data.Model
 */
Ext.define('Tunes.model.Country', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field'
    ],

    fields: [{
        name: 'id',
        type: 'auto'
    }, {
        name: 'text',
        type: 'auto'
    }]
});
