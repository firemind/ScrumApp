/*
 * File: app/view/TaskForm.js
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

Ext.define('ScrumApp.view.TaskForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.taskform',

    config: {
        id: 'TaskForm',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Taskname',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        itemId: 'backButton',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Task Settings',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        label: 'Name'
                    },
                    {
                        xtype: 'spinnerfield',
                        label: 'Time',
                        name: 'estimated_time',
                        stepValue: 0.5
                    },
                    {
                        xtype: 'selectfield',
                        name: 'state',
                        label: 'State',
                        options: [
                          {text: 'Open',  value: 'open'},
                          {text: 'In Progress', value: 'in_progress'},
                          {text: 'Closed',  value: 'closed'}
                      ]
                    },
                    {
                        xtype: 'textareafield',
                        name: 'description',
                        label: 'Description'
                    },
                    {
                        xtype: 'button',
                        ui: 'confirm',
                        itemId: 'saveButton',
                        text: 'Apply'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onBackButtonRelease',
                event: 'release',
                delegate: '#backButton'
            },
            {
                fn: 'onSaveButtonRelease',
                event: 'release',
                delegate: '#saveButton'
            }
        ]

    },
    onBackButtonRelease: function(button, e, options) {
       history.back();
    },
    onSaveButtonRelease: function(button, e, options) {
        r = this.getRecord();
        vals = this.getValues();
        ScrumApp.app.getController('MegaMind').updateTaskRecord(r, vals);
    },
});
