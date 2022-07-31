import {getDb, putDb} from './database';
import {header} from './header';

export default class {
    constructor() {
        const localData = localStorage.getItem('content');

        if (typeof CodeMirror === 'undefined') {
            throw new error('CodeMirror was not loaded');
        }

        this.editor = CodeMirror(document.querySelector('#main'), {
            value: '',
            mode: 'javascript',
            theme: 'monokai',
            lineNumbers: true,
            lineWrapping: true,
            autoFocus: true,
            indentUnit: 2,
            tabSize: 2,
        });

        getDb().then((data) => {
            console.info('loaded data from indexed database, injecting into editor');
            this.editor.setValue(data || localData || header);
        });

        this.editor.on('change', () => {
            localStorage.setItem('content', this.editor.getValue());
        });

        this.editor.on('blur', () => {
            console.log('the editor has lost focus');
            putDb(localStorage.getItem('content'));
        });
    }
}