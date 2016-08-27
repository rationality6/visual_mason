import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {

  var starting_data = function (num) {
    for (var i = 0; i < num; i++) {
      var created_at = new Date();
      Pics.insert({no: i, src: `image_${i}.jpg`, created_at: created_at});
    }
  };

  if (Pics.find().count() === 0) {
    starting_data(12);
  }

  Meteor.setInterval(function () {
    var random = Math.floor(Math.random() * 12);
    var created_at = new Date();

    Pics.insert({no: random, src: `image_${random}.jpg`, created_at: created_at});
  }, 1500);

  Meteor.setInterval(function () {
    var random_pic_num = Math.floor(Math.random() * Pics.find().count());
    Pics.remove({no: random_pic_num});
  }, 600);

});
