angular.module('starter.services', [])

.factory('Foods', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var foods = [{
      id: 1,
      name: "水煮牛肉",
      price: 6.90,
      cooker: {
        name:'Lu Chen',
        avater:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },
      image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
      score: 5,
      like: 100,
      description: ' This is a "Facebook" styled Card. The header is created from a Thumbnail List item, \
      the content is from a card-body consisting of an image and paragraph text. The footer \
      consists of tabs, icons aligned left, within the card-footer.'
    },
    {
      id: 2,
      name: "ABCD",
      price: 6.90,
      cooker: {
        name:'Lu Chen',
        avater:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },
      image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
      score: 5,
      like: 100,
      description:' This is a "Facebook" styled Card. The header is created from a Thumbnail List item, \
      the content is from a card-body consisting of an image and paragraph text. The footer \
      consists of tabs, icons aligned left, within the card-footer.'
    },
    {
      id: 3,
      name: "水煮牛肉",
      price: 6.90,
      cooker: {
        name:'Lu Chen',
        avater:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },
      image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
      score: 5,
      like: 100,
      description:' This is a "Facebook" styled Card. The header is created from a Thumbnail List item, \
      the content is from a card-body consisting of an image and paragraph text. The footer \
      consists of tabs, icons aligned left, within the card-footer.'
    },
    {
      id: 4,
      name: "水煮牛肉",
      price: 6.90,
      cooker: {
        name:'Lu Chen',
        avater:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },
      image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
      score: 5,
      like: 100,
      description:' This is a "Facebook" styled Card. The header is created from a Thumbnail List item, \
      the content is from a card-body consisting of an image and paragraph text. The footer \
      consists of tabs, icons aligned left, within the card-footer.'
    },
    {
      id: 5,
      name: "水煮牛肉",
      price: 6.90,
      cooker: {
        name:'Lu Chen',
        avater:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      },
      image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
      score: 5,
      like: 100,
      description:' This is a "Facebook" styled Card. The header is created from a Thumbnail List item, \
      the content is from a card-body consisting of an image and paragraph text. The footer \
      consists of tabs, icons aligned left, within the card-footer.'
    }];

  return {
    all: function() {
      return foods;
    },
    remove: function(chat) {
      foods.splice(foods.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < foods.length; i++) {
        if (foods[i].id === parseInt(chatId)) {
          return foods[i];
        }
      }
      return null;
    }
  };
});
