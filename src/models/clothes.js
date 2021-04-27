'use strict';

class Clothes {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  //CREATE
  create(object) {
    let record = {
      id: ++this.id,
      record: object
    };
    this.db.push(record);
    console.log('Successfully Added');
    console.log(record);
    return record;
  }

  //READ
  read(id) {
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  //UPDATE
  update(id, obj) {
    if (id) {
      this.db = this.db.map(file => {
        if (file.id === id) {
          file.record = obj;
          return file;
        }
      });
      return this.db.find(record => record.id === id);
    }
  }

  //DELETE
  delete(id) {
    if (id) {
      console.log(`DELETED ID OF: ${id}`);
      this.db = this.db.filter(record => record.id !== id);
      return this.db.find(record => record.id === id);
    }
    return undefined;
  }

}

module.exports = Clothes;