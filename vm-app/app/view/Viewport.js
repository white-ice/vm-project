Ext.define('VmApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'VmApp.view.Header',
        'VmApp.view.Main'
    ],

    layout: {
        type: 'vbox',
        align: 'center'
    },
    style: {
        backgroundColor: '#ccc' 
    },
    items: [
        {
            xtype: 'appmain',
            items: [
                {
                    xtype: 'appheader',
                    region: 'north'
                }
            ]
        }
    ]
});
