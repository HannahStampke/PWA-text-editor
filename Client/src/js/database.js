import {openDB} from 'idb';

const initdb = async () =>
    openDB('jate', 1, {
        upgrade(db) {
            if (db.objectStoreName.contains('jate')) {
                console.log('jate database already exists');
                return;
            }
            db.createObjectStore('jate', {keyPath: 'id', autoIncrement: true});
            console.log('jate database has been created');
        },
    });

    export const putDb = async (content) => console.error('putDb was not implemented');
    export const getDb = async () => console.error('getDb was not implemented');

    initdb();