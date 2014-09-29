/**
 * @class   Tunes.model.Tune
 * @extends Ext.data.Model
 *
 * generated via Sencha CMD:
 * <cmd>sencha generate model Tune id,artist,title,image,link,preview,codex</cmd>
 */
Ext.define('Tunes.model.Tune', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    fields: [
        {
            name   : 'id',
            mapping: 'id.attributes["im:id"]',
            type   : 'auto'
        }, {
            name   : 'artist',
            mapping: '["im:artist"].label',
            type   : 'auto'
        }, {
            name   : 'title',
            mapping: '["im:name"].label',
            type   : 'auto'
        }, {
            name   : 'image',
            mapping: '["im:image"][2].label',
            type   : 'auto'
        }, {
            name   : 'link',
            mapping: 'link[0].attributes.href',
            type   : 'auto'
        }, {
            name   : 'preview',
            mapping: 'link[1].attributes.href',
            type   : 'auto'
        },
        {
            name   : 'codex',
            mapping: 'link[1].attributes.type',
            type   : 'auto'
        }
    ],

    proxy: {
        type  : 'jsonp',
        url   : 'https://itunes.apple.com/us/rss/topmusicvideos/limit=100/json',
        reader: {
            type           : 'json',
            rootProperty   : 'feed.entry',
            preserveRawData: true   // needed so feed gets read properly
        }
    }
});
