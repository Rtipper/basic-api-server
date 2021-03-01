'use strict';

class ClothesModel {
  constructor() {
    this.id = 0;
    this.db = [];
  }

// READ
get(id) {
  if (id) {
    return this.db.find(record => record.id === id);
  } else {
    return this.db;
  }
}

// CREATE
create(obj) {
  let record = {
    id: ++this.id,
    record: obj
  }

  this.db.push(record);
  return record;
}

// UPDATE
  update(id, obj) {
    if(id) {
      return obj
    }
  }

// DELETE
  delete(id) {
    if (id) {
      return null;
    }
  }
}

module.exports = ClothesModel;