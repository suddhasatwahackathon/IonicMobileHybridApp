angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'An average performance',
    lastText: 'A biologist, a chemist...',
    fullText: 'A biologist, a chemist, and a statistician are out hunting. The biologist shoots at a deer and misses five feet to the left. The chemist takes a shot and misses five feet to the right. The statistician yells "We got em',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Computer Science 101',
    lastText: 'How easy is it to count...',
    fullText: 'How easy is it to count in binary? It’s as easy as 01 10 11',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Caesar on the rocks',
    lastText: 'and says Five beers, please...',
    fullText: 'A Roman walks into a bar and asks for a martinus. “You mean a martini?” the bartender asks. The Roman replies, “If I wanted a double, I would have asked for it!” Another Roman walks into the bar, holds up two fingers, and says, “Five beers, please.”',    
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Not to mention trempé',
    lastText: 'If you jumped off the...',
    fullText: 'If you jumped off the bridge in Paris, you"d be in Seine.',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Speculative women"s studies',
    lastText: 'A philosopher says to.',
    fullText: 'A philosopher says to a linguist “What if, instead of periods, women had apostrophes?” The linguist replied, “They be more possessive and have more frequent contractions".',    
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    len:function(){
      return chats.length;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
