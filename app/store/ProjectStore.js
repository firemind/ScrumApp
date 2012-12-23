Ext.define('ScrumApp.store.ProjectStore', {
    extend: 'Ext.ux.OfflineSyncStore',

    config: {
        storeId: 'projectSyncStore',
        model: 'ScrumApp.model.Project',
        autoServerSync: true,
        syncRemovedRecords: true,
        localProxy: {
            type: 'localstorage',
            id: 'project-offline-store'
        },
        serverProxy: {
            type: 'rest',
            url: 'http://scrum.otep.ch/projects',
            format: 'json',
            reader: {
                type: 'json',
                idProperty: 'id',
                rootProperty: 'records'
            }
        }
    }

});
