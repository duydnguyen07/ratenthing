{"filter":false,"title":"controller.js","tooltip":"/public/js/controller.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":82,"column":25},"end":{"row":82,"column":26},"action":"insert","lines":["p"],"id":2840}],[{"start":{"row":82,"column":26},"end":{"row":82,"column":27},"action":"insert","lines":["a"],"id":2841}],[{"start":{"row":82,"column":27},"end":{"row":82,"column":28},"action":"insert","lines":["t"],"id":2842}],[{"start":{"row":82,"column":28},"end":{"row":82,"column":29},"action":"insert","lines":["h"],"id":2843}],[{"start":{"row":89,"column":9},"end":{"row":90,"column":0},"action":"insert","lines":["",""],"id":2844},{"start":{"row":90,"column":0},"end":{"row":90,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":90,"column":8},"end":{"row":91,"column":0},"action":"insert","lines":["",""],"id":2845},{"start":{"row":91,"column":0},"end":{"row":91,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":91,"column":8},"end":{"row":123,"column":11},"action":"insert","lines":["$http.get(path).success(function(data){ //get data","            $scope.loggedIn = $(\"#my-post\").attr('href') ? true : false; //check if user is logged in","            ","            var returnObj = [];","                // parsing data","                var d = data.status || data.info;    ","                for(var i in d) {","                    var val = d[i];","                    returnObj[i] = { ","                            id: val._id,","                            author: val.author.firstName,","                            authorId: val.author._id,","                            title: val.title,","                            imgLink: val.imgUrl,","                            description: val.content, ","                            likes: val.likes,","                            tagss: Array()","                        };","                    ","                    for(var j in val.tag) {","                        var tagObj = val.tag[j];","                        if(tagObj) {                    //there is a tag","                            returnObj[i].tagss.push({","                                name: tagObj.name,","                                id: tagObj._id","                            });","                        }","                    }","                }","                $scope.content = returnObj;","                console.log($scope.content);","                postDataService.setData(data); //cache data to the global service","        });"],"id":2846}],[{"start":{"row":120,"column":23},"end":{"row":120,"column":30},"action":"remove","lines":["content"],"id":2847},{"start":{"row":120,"column":23},"end":{"row":120,"column":24},"action":"insert","lines":["c"]}],[{"start":{"row":120,"column":24},"end":{"row":120,"column":25},"action":"insert","lines":["a"],"id":2848}],[{"start":{"row":120,"column":25},"end":{"row":120,"column":26},"action":"insert","lines":["r"],"id":2849}],[{"start":{"row":120,"column":26},"end":{"row":120,"column":27},"action":"insert","lines":["d"],"id":2850}],[{"start":{"row":121,"column":36},"end":{"row":121,"column":42},"action":"remove","lines":["ontent"],"id":2851},{"start":{"row":121,"column":36},"end":{"row":121,"column":37},"action":"insert","lines":["c"]}],[{"start":{"row":121,"column":36},"end":{"row":121,"column":37},"action":"remove","lines":["c"],"id":2852}],[{"start":{"row":121,"column":35},"end":{"row":121,"column":36},"action":"remove","lines":["c"],"id":2853}],[{"start":{"row":121,"column":35},"end":{"row":121,"column":36},"action":"insert","lines":["c"],"id":2854}],[{"start":{"row":121,"column":36},"end":{"row":121,"column":37},"action":"insert","lines":["a"],"id":2855}],[{"start":{"row":121,"column":37},"end":{"row":121,"column":38},"action":"insert","lines":["r"],"id":2856}],[{"start":{"row":121,"column":38},"end":{"row":121,"column":39},"action":"insert","lines":["d"],"id":2857}],[{"start":{"row":87,"column":29},"end":{"row":87,"column":30},"action":"remove","lines":["t"],"id":2858}],[{"start":{"row":87,"column":28},"end":{"row":87,"column":29},"action":"remove","lines":["n"],"id":2859}],[{"start":{"row":87,"column":27},"end":{"row":87,"column":28},"action":"remove","lines":["e"],"id":2860}],[{"start":{"row":87,"column":26},"end":{"row":87,"column":27},"action":"remove","lines":["t"],"id":2861}],[{"start":{"row":87,"column":25},"end":{"row":87,"column":26},"action":"remove","lines":["n"],"id":2862}],[{"start":{"row":87,"column":24},"end":{"row":87,"column":25},"action":"remove","lines":["o"],"id":2863}],[{"start":{"row":87,"column":23},"end":{"row":87,"column":24},"action":"remove","lines":["c"],"id":2864}],[{"start":{"row":87,"column":23},"end":{"row":87,"column":24},"action":"insert","lines":["c"],"id":2865}],[{"start":{"row":87,"column":24},"end":{"row":87,"column":25},"action":"insert","lines":["a"],"id":2866}],[{"start":{"row":87,"column":25},"end":{"row":87,"column":26},"action":"insert","lines":["r"],"id":2867}],[{"start":{"row":87,"column":26},"end":{"row":87,"column":27},"action":"insert","lines":["d"],"id":2868}],[{"start":{"row":83,"column":15},"end":{"row":83,"column":22},"action":"remove","lines":["content"],"id":2869},{"start":{"row":83,"column":15},"end":{"row":83,"column":16},"action":"insert","lines":["\\"]}],[{"start":{"row":83,"column":15},"end":{"row":83,"column":16},"action":"remove","lines":["\\"],"id":2870}],[{"start":{"row":83,"column":15},"end":{"row":83,"column":16},"action":"insert","lines":["c"],"id":2871}],[{"start":{"row":83,"column":16},"end":{"row":83,"column":17},"action":"insert","lines":["a"],"id":2872}],[{"start":{"row":83,"column":17},"end":{"row":83,"column":18},"action":"insert","lines":["r"],"id":2873}],[{"start":{"row":83,"column":18},"end":{"row":83,"column":19},"action":"insert","lines":["d"],"id":2874}],[{"start":{"row":85,"column":18},"end":{"row":85,"column":25},"action":"remove","lines":["content"],"id":2875},{"start":{"row":85,"column":18},"end":{"row":85,"column":19},"action":"insert","lines":["c"]}],[{"start":{"row":85,"column":19},"end":{"row":85,"column":20},"action":"insert","lines":["a"],"id":2876}],[{"start":{"row":85,"column":20},"end":{"row":85,"column":21},"action":"insert","lines":["r"],"id":2877}],[{"start":{"row":85,"column":21},"end":{"row":85,"column":22},"action":"insert","lines":["d"],"id":2878}],[{"start":{"row":82,"column":8},"end":{"row":82,"column":11},"action":"insert","lines":["// "],"id":2879},{"start":{"row":83,"column":8},"end":{"row":83,"column":11},"action":"insert","lines":["// "]},{"start":{"row":85,"column":8},"end":{"row":85,"column":11},"action":"insert","lines":["// "]},{"start":{"row":86,"column":8},"end":{"row":86,"column":11},"action":"insert","lines":["// "]},{"start":{"row":87,"column":8},"end":{"row":87,"column":11},"action":"insert","lines":["// "]},{"start":{"row":88,"column":8},"end":{"row":88,"column":11},"action":"insert","lines":["// "]},{"start":{"row":89,"column":8},"end":{"row":89,"column":11},"action":"insert","lines":["// "]}],[{"start":{"row":121,"column":41},"end":{"row":122,"column":81},"action":"remove","lines":["","                postDataService.setData(data); //cache data to the global service"],"id":2880}],[{"start":{"row":121,"column":38},"end":{"row":121,"column":39},"action":"remove","lines":["d"],"id":2881}],[{"start":{"row":121,"column":37},"end":{"row":121,"column":38},"action":"remove","lines":["r"],"id":2882}],[{"start":{"row":121,"column":36},"end":{"row":121,"column":37},"action":"remove","lines":["a"],"id":2883}],[{"start":{"row":121,"column":35},"end":{"row":121,"column":36},"action":"remove","lines":["c"],"id":2884}],[{"start":{"row":121,"column":34},"end":{"row":121,"column":35},"action":"remove","lines":["."],"id":2885}],[{"start":{"row":120,"column":39},"end":{"row":120,"column":41},"action":"insert","lines":["[]"],"id":2886}],[{"start":{"row":120,"column":40},"end":{"row":120,"column":41},"action":"insert","lines":["9"],"id":2887}],[{"start":{"row":120,"column":40},"end":{"row":120,"column":41},"action":"remove","lines":["9"],"id":2888}],[{"start":{"row":120,"column":40},"end":{"row":120,"column":41},"action":"insert","lines":["0"],"id":2889}],[{"start":{"row":120,"column":43},"end":{"row":121,"column":36},"action":"remove","lines":["","                console.log($scope);"],"id":2890}],[{"start":{"row":70,"column":43},"end":{"row":71,"column":44},"action":"remove","lines":["","                console.log($scope.content);"],"id":2891},{"start":{"row":70,"column":43},"end":{"row":70,"column":44},"action":"insert","lines":["\\"]}],[{"start":{"row":70,"column":43},"end":{"row":70,"column":44},"action":"remove","lines":["\\"],"id":2892}],[{"start":{"row":7,"column":73},"end":{"row":8,"column":43},"action":"remove","lines":["","            console.log(path,$routeParams);"],"id":2893}],[{"start":{"row":193,"column":39},"end":{"row":194,"column":35},"action":"remove","lines":["","            console.log(post.tags);"],"id":2894}],[{"start":{"row":193,"column":39},"end":{"row":194,"column":0},"action":"insert","lines":["",""],"id":2895},{"start":{"row":194,"column":0},"end":{"row":194,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":194,"column":12},"end":{"row":194,"column":13},"action":"insert","lines":["s"],"id":2896}],[{"start":{"row":194,"column":12},"end":{"row":194,"column":13},"action":"remove","lines":["s"],"id":2897}],[{"start":{"row":194,"column":12},"end":{"row":194,"column":13},"action":"insert","lines":["@"],"id":2898}],[{"start":{"row":194,"column":13},"end":{"row":194,"column":14},"action":"insert","lines":["s"],"id":2899}],[{"start":{"row":194,"column":14},"end":{"row":194,"column":15},"action":"insert","lines":["c"],"id":2900}],[{"start":{"row":194,"column":14},"end":{"row":194,"column":15},"action":"remove","lines":["c"],"id":2901}],[{"start":{"row":194,"column":13},"end":{"row":194,"column":14},"action":"remove","lines":["s"],"id":2902}],[{"start":{"row":194,"column":12},"end":{"row":194,"column":13},"action":"remove","lines":["@"],"id":2903}],[{"start":{"row":194,"column":12},"end":{"row":194,"column":13},"action":"insert","lines":["p"],"id":2904}],[{"start":{"row":194,"column":13},"end":{"row":194,"column":14},"action":"insert","lines":["o"],"id":2905}],[{"start":{"row":194,"column":14},"end":{"row":194,"column":15},"action":"insert","lines":["s"],"id":2906}],[{"start":{"row":194,"column":15},"end":{"row":194,"column":16},"action":"insert","lines":["t"],"id":2907}],[{"start":{"row":194,"column":16},"end":{"row":194,"column":17},"action":"insert","lines":["."],"id":2908}],[{"start":{"row":194,"column":16},"end":{"row":194,"column":17},"action":"remove","lines":["."],"id":2909}],[{"start":{"row":194,"column":16},"end":{"row":194,"column":17},"action":"insert","lines":[" "],"id":2910}],[{"start":{"row":194,"column":17},"end":{"row":194,"column":18},"action":"insert","lines":["="],"id":2911}],[{"start":{"row":194,"column":18},"end":{"row":194,"column":19},"action":"insert","lines":[" "],"id":2912}],[{"start":{"row":194,"column":19},"end":{"row":194,"column":21},"action":"insert","lines":["[]"],"id":2913}],[{"start":{"row":194,"column":20},"end":{"row":194,"column":21},"action":"remove","lines":["]"],"id":2914}],[{"start":{"row":194,"column":19},"end":{"row":194,"column":20},"action":"remove","lines":["["],"id":2915}],[{"start":{"row":194,"column":19},"end":{"row":194,"column":20},"action":"insert","lines":["{"],"id":2916}],[{"start":{"row":194,"column":20},"end":{"row":194,"column":21},"action":"insert","lines":["}"],"id":2917}],[{"start":{"row":194,"column":21},"end":{"row":194,"column":22},"action":"insert","lines":[";"],"id":2918}],[{"start":{"row":194,"column":21},"end":{"row":194,"column":22},"action":"remove","lines":[";"],"id":2919}],[{"start":{"row":194,"column":20},"end":{"row":194,"column":21},"action":"remove","lines":["}"],"id":2920}],[{"start":{"row":194,"column":19},"end":{"row":194,"column":20},"action":"remove","lines":["{"],"id":2921}],[{"start":{"row":194,"column":18},"end":{"row":194,"column":19},"action":"remove","lines":[" "],"id":2922}],[{"start":{"row":194,"column":17},"end":{"row":194,"column":18},"action":"remove","lines":["="],"id":2923}],[{"start":{"row":194,"column":16},"end":{"row":194,"column":17},"action":"remove","lines":[" "],"id":2924}],[{"start":{"row":194,"column":15},"end":{"row":194,"column":16},"action":"remove","lines":["t"],"id":2925}],[{"start":{"row":194,"column":14},"end":{"row":194,"column":15},"action":"remove","lines":["s"],"id":2926}],[{"start":{"row":194,"column":13},"end":{"row":194,"column":14},"action":"remove","lines":["o"],"id":2927}],[{"start":{"row":194,"column":12},"end":{"row":194,"column":13},"action":"remove","lines":["p"],"id":2928}],[{"start":{"row":208,"column":20},"end":{"row":208,"column":21},"action":"insert","lines":["p"],"id":2929}],[{"start":{"row":208,"column":21},"end":{"row":208,"column":22},"action":"insert","lines":["o"],"id":2930}],[{"start":{"row":208,"column":22},"end":{"row":208,"column":23},"action":"insert","lines":["s"],"id":2931}],[{"start":{"row":208,"column":23},"end":{"row":208,"column":24},"action":"insert","lines":["t"],"id":2932}],[{"start":{"row":208,"column":24},"end":{"row":208,"column":25},"action":"insert","lines":[" "],"id":2933}],[{"start":{"row":208,"column":25},"end":{"row":208,"column":26},"action":"insert","lines":["="],"id":2934}],[{"start":{"row":208,"column":26},"end":{"row":208,"column":27},"action":"insert","lines":[" "],"id":2935}],[{"start":{"row":208,"column":27},"end":{"row":208,"column":28},"action":"insert","lines":["{"],"id":2936}],[{"start":{"row":208,"column":28},"end":{"row":208,"column":29},"action":"insert","lines":["}"],"id":2937}],[{"start":{"row":208,"column":29},"end":{"row":208,"column":30},"action":"insert","lines":["."],"id":2938}],[{"start":{"row":208,"column":29},"end":{"row":208,"column":30},"action":"remove","lines":["."],"id":2939}],[{"start":{"row":208,"column":29},"end":{"row":208,"column":30},"action":"insert","lines":[";"],"id":2940}]]},"ace":{"folds":[],"scrolltop":3137.5,"scrollleft":0,"selection":{"start":{"row":208,"column":30},"end":{"row":208,"column":30},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":183,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1462426490660,"hash":"d723db7b8ac7fa660602ae475f8c927582bccfda"}