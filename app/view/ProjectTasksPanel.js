Ext.define('ScrumApp.view.ProjectTasksPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.projecttaskspanel',

    config: {
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
                store: 'taskSyncStore',
                title: 'Open',
                itemId: 'openTaskList',
                itemTpl: [
                    '<div>{name}</div>'
                ]
            },
            {
                xtype: 'list',
                iconCls: '',
                store: 'taskSyncStore',
                title: 'In Progress',
                itemId: 'inProgressTaskList',
                itemTpl: [
                    '<div>{name}</div>'
                ]
            },
            {
                xtype: 'list',
                store: 'taskSyncStore',
                title: 'Completed',
                itemId: 'closedTaskList',
                itemTpl: [
                    '<div>{name}</div>'
                ]
            }
        ],
        listeners: [
            {
                fn: 'onItemTap',
                event: 'itemtap',
                delegate: '#openTaskList'
            },
            {
                fn: 'onItemTap',
                event: 'itemtap',
                delegate: '#inProgressTaskList'
            },
            {
                fn: 'onItemTap',
                event: 'itemtap',
                delegate: '#closedTaskList'
            },
            {
              event: 'activate',
              delegate: '#openTaskList',
              fn: function(newActiveItem, container, oldActiveItem, eOpt){ var s= Ext.getStore('taskSyncStore'); s.clearFilter();s.filter('state',  'open');}
            },
            {
              event: 'activate',
              delegate: '#inProgressTaskList',
              fn: function(newActiveItem, container, oldActiveItem, eOpt){ var s= Ext.getStore('taskSyncStore'); s.clearFilter();s.filter('state',  'in_progress');}
            },
            {
              event: 'activate',
              delegate: '#closedTaskList',
              fn: function(newActiveItem, container, oldActiveItem, eOpt){ var s= Ext.getStore('taskSyncStore'); s.clearFilter();s.filter('state',  'closed');}
            },
            {
              event: 'itemswipe',
              delegate: '#openTaskList',
              fn: function( t, index, target, record, e, eOpts ){ if(e.direction == 'right'){ record.set('state', 'in_progress'); t.getStore().sync(); }}
            },
            {
              event: 'itemswipe',
              delegate: '#inProgressTaskList',
              fn: function( t, index, target, record, e, eOpts ){ 
                record.set('state', (e.direction == 'left') ? 'open' : 'closed'); 
                t.getStore().sync();
              }
            },
            {
              event: 'itemswipe',
              delegate: '#closedTaskList',
              fn: function( t, index, target, record, e, eOpts ){ if(e.direction == 'left'){ record.set('state', 'in_progress'); t.getStore().sync(); }}
            }
        ]
    },

    onItemTap: function(dataview, index, target, record, e, options) {
        ScrumApp.app.redirectTo("tasks/"+ record.getId());
    }

});
