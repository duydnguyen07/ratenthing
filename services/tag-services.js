var Tag = require("../models/tag").Tag;

exports.addTag = function(ori_tags, new_tags, next) {
    console.log('addTag');
    var counter = 0;
    new_tags.forEach(function(x) {
        console.log('addTagCounter');
        var new_tag = new Tag({
            name: ori_tags[x]
        });

        new_tag.save(function(err) {
            if (err) {
                console.log('fail');
                return next(err);
            }
            counter++;
            if (counter === new_tags.length) {
                console.log('how you do that HUH')
                next(null);
            }
        });
    });
};

exports.findNewTag = function(tag, next) {
    var arr = [];
    var tag_size = tag.length;
    tag.forEach(function(x, index) {

        Tag.findOne({
            name: x
        }, function(err, x) {
            arr.push(x ? x : index);
            if (arr.length === tag_size) {
                next(err, arr);
            }
        });

    });
};

exports.findTagId = function(tags, next) {
    var arr = [];
    var tags_size = tags.length;
    console.log("accessed");
    tags.forEach(function(x) {
        Tag.findOne({
            name: x
        }, function(err, tag) {
            if (err) {
                console.log('{ status : fail }')
                console.log(err);
            }
            arr.push(tag._id);
            if (arr.length === tags_size) {
                console.log("look here");
                next(err, arr);
            }
        });
    });
};

exports.findTag = function(tags, next) {
    Tag
    .findOne({ _id : tags._id}, function(err, tag) {
        if(err) {
            console.log('{ status : err }');
            return console.log(err);
        }
        console.log('{ method : findTag, status : success }');
        next(err, tag);
    });
};