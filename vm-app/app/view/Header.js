Ext.define('VmApp.view.Header', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.appheader',

	layout: 'hbox',

	cls: 'header',
	items: [
		{
			xtype: 'label',
			html: '<div id="titleHeader" class="logo-header"></div>'
		},
		{
			xtype: 'label',
			html: ['<div class="header-nav">'
						+'<ul>'
							+'<li class="action">Клиенты</li>'
							+'<li>Деньги</li>'
							+'<li>Учет</li>'
							+'<li>Сотрудники</li>'
						+'</ul>'
					+'</div>']
		}
	]
});