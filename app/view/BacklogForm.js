/*
 * File: app/view/BacklogForm.js
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

Ext.define('ScrumApp.view.BacklogForm', {
    extend: 'Ext.form.Panel',

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Logname',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Backlog Item Settings',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name'
                    },
                    {
                        xtype: 'spinnerfield',
                        label: 'Time',
                        stepValue: 0.5
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Description'
                    },
                    {
                        xtype: 'button',
                        ui: 'confirm',
                        text: 'Apply'
                    }
                ]
            }
        ]
    }

});