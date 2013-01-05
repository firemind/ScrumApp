Ext.define('ScrumApp.store.TaskStore', {
    extend: 'Ext.ux.OfflineSyncStore',

    config: {
        storeId: 'taskSyncStore',
        model: 'ScrumApp.model.Task',
        autoServerSync: true,
        remoteFilter: false,
        syncRemovedRecords: true,
        localProxy: {
            type: 'localstorage',
            id: 'task-offline-store',
            reader: {
                idProperty: 'id',
            }
        },
        serverProxy: {
            type: 'rest',
            url: 'http://scrum.otep.ch/tasks',
            format: 'json',
            reader: {
                type: 'json',
                idProperty: 'id',
                rootProperty: 'records'
            }
        }
    }

});
