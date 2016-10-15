import {Meteor} from 'meteor/meteor';

const setInterval = (rand) => {
  Meteor.setInterval(() => {
    let random = ~~(rand * 12);
    let created_at = new Date();

    Pics.insert({
      no: random,
      src: `image_${random}.jpg`,
      created_at: created_at
    });
  }, 1500);
}

const removeInterval = (rand) => {
  Meteor.setInterval(() => {
    let random_pic_num = ~~(rand * Pics.find().count());
    Pics.remove({no: random_pic_num});
  }, 600);
}

const starting_data = num => {
  for (let i = 0; i < num; i++) {
    let created_at = new Date();
    Pics.insert({no: i, src: `image_${i}.jpg`, created_at: created_at});
  }
};

const rand = Math.random()

Meteor.startup(() => {

  if (Pics.find().count() === 0) {
    starting_data(12);
  }

  setInterval(rand)
  removeInterval(rand)

});
