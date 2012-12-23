/*
 * File: app/view/MainPanel.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ScrumApp.view.MainPanel', {
    extend: 'Ext.tab.Panel',

    config: {
        items: [
            {
                xtype: 'tabpanel',
                title: 'My Tasks',
                activeItem: 1,
                iconCls: 'organize',
                items: [
                    {
                        xtype: 'list',
                        id: 'myTasksOpenList',
                        iconCls: '',
                        title: 'Open',
                        store: 'taskSyncStore',
                        itemTpl: [
                            '<div>{name}</div>'
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
            },
            {
                xtype: 'tabpanel',
                title: 'Projects',
                activeItem: 1,
                iconCls: 'team',
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
                        id: 'projectsInProgress',
                        itemId: 'projectInProgress',
                        itemTpl: [
                            '<div>{name}</div>'
                        ],
                        store: 'projectStore'
                    },
                    {
                        xtype: 'list',
                        title: 'Completed',
                        itemTpl: [
                            '<div>List Item {string}</div>'
                        ]
                    }
                ]
            },
            {
                xtype: 'formpanel',
                title: 'Settings',
                iconCls: 'settings',
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'GitHub Credentials',
                        items: [
                            {
                                xtype: 'emailfield',
                                label: 'E-Mail',
                                placeHolder: 'email@example.com'
                            },
                            {
                                xtype: 'passwordfield',
                                label: 'Password'
                            },
                            {
                                xtype: 'button',
                                ui: 'confirm',
                                text: 'Apply'
                            }
                        ]
                    },
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        title: 'Settings'
                    }
                ]
            }
        ],
        tabBar: {
            docked: 'bottom'
        },
        listeners: [
            {
                fn: 'onMylist4ItemTap',
                event: 'itemtap',
                delegate: '#projectsInProgress'
            }
        ]
    },

    onMylist4ItemTap: function(dataview, index, target, record, e, options) {
        ScrumApp.app.redirectTo("projects/"+ record.getId());
    }

});
