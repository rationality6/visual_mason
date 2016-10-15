import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

Template.main.onCreated(() => {

});

Template.main.helpers({
  items() {
    return Pics.find({}, {sort: {no: -1}});
  },
});

Template.main.events({
  'click button[name=add]'(e, i) {

    let random = Math.floor(Math.random() * 12);
    let created_at = new Date();

    Pics.insert({no: random, src: `image_${random}.jpg`, created_at: created_at});
  },
});

Template.item_tem.events({
  'click button[name=rm]'(e, i){
    Pics.remove({_id: this._id});
  }
});
