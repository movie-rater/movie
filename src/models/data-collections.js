'use strict';

class DataCollection {

  constructor(model) {
    this.model = model;
  }

  get(id) {
    try{
      if (id) {
        return this.model.findOne({ where: { id } });
      }
      else {
        return this.model.findAll({});
      }

    } catch(e){
      console.error(e);
    }
  }

  create(record) {
    try{
    return this.model.create(record);
  } catch(e){
    console.error(e);
  }
  }

  update(id, data) {
    try{
    return this.model.findOne({ where: { id } })
      .then(record => record.update(data));
    } catch(e){
      console.error(e);
    }
  }

  delete(id) {
    try{
    return this.model.destroy({ where: { id }});
  } catch(e){
    console.error(e);
  }
  }
  patch(id){
    try{
    return this.model.findOne({ where: { id } })
    .then(record => record.update(data));
  } catch(e){
    console.error(e);
  }
  }
}

module.exports = DataCollection;
