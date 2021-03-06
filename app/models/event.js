import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  address: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', {async: true}),

  bookmarks: Ember.inject.service(),
  inBookmarks: Ember.computed('bookmarks.bookmarkList.[]', function(){
    return this.get('bookmarks').includes(this);
  })
});
