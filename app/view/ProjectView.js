Ext.define('ScrumApp.view.ProjectView', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.projectview',

    config: {
        id: 'projectView',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Web Project',
                items: [
                    {
                        itemId: 'backButton',
                        xtype: 'button',
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                title: 'Backlog',
                iconCls: 'organize',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                ui: 'action',
                                iconAlign: 'bottom',
                                iconMask: true,
                                text: 'Add'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        iconCls: '',
                        title: 'Open',
                        itemTpl: [
                            '<div>List Item {string}</div>'
                        ]
                    },
                    {
                        xtype: 'list',
                        iconCls: '',
                        title: 'In Progress',
                        itemTpl: [
                            '<div>List Item {string}</div>'
                        ]
                    },
                    {
                        xtype: 'list',
                        title: 'Completed',
                        itemTpl: [
                            '<div>List Item {string}</div>'
                        ]
                    }
                ]
            },{
                xtype: 'projecttaskspanel',
                title: 'Tasks',
                iconCls: 'compose',
            }
        ],
        tabBar: {
            docked: 'bottom'
        },
        listeners: [
            {
                fn: 'onBackButtonRelease',
                event: 'release',
                delegate: '#backButton'
            }
        ]
    },
    onBackButtonRelease: function(button, e, options) {
       // TODO release filter on task store by project
       history.back();
    }

});
