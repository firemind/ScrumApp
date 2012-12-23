/*
 * File: app/view/MyTabPanel1.js
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

Ext.define('ScrumApp.view.MyTabPanel1', {
    extend: 'Ext.tab.Panel',

    config: {
        items: [
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
                iconCls: '',
                title: 'Open',
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
    }

});