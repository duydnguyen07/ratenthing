var Tag = require("../models/tag").Tag;

exports.addTag = function(tag, next) {
    var new_tag = new Tag({
        name: tag
    });
    
    new_tag.save( function(err) {
        if (err) {
            return next(err);
        }
        next(null);
    });
};

exports.findTag = function(name, next) {
    Tag.findOne({name: name}, function(err, tag) {
        next(err, tag);
    });
};