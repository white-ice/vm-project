Ext.define('VmApp.Application', {
    name: 'VmApp',

    extend: 'Ext.app.Application',

    views: [
        'Viewport',
        'Main'
    ],

    controllers: [
        'Main'
    ],

    stores: [
        // TODO: add stores here
    ]
});
