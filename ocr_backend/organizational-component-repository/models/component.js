
const db = require('../config/db');

class Component {
    static getAllComponents() {
        return db.execute('SELECT * FROM components WHERE disabled = 0');
    }

    static getComponentById(id) {
        return db.execute('SELECT * FROM components WHERE id = ? AND disabled = 0', [id]);
    }

    static addComponent(name, use, technologies, tags) {
        return db.execute(
            'INSERT INTO components (name, use, technologies, tags) VALUES (?, ?, ?, ?)',
            [name, use, technologies, tags]
        );
    }

    static updateComponent(id, name, use, technologies, tags) {
        return db.execute(
            'UPDATE components SET name = ?, use = ?, technologies = ?, tags = ? WHERE id = ?',
            [name, use, technologies, tags, id]
        );
    }

    static disableComponent(id) {
        return db.execute('UPDATE components SET disabled = 1 WHERE id = ?', [id]);
    }
}

module.exports = Component;
