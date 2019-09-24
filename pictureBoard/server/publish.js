Meteor.publish("postList",function(){
    return Posts.find();
})