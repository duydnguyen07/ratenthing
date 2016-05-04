{"filter":false,"title":"controller.js","tooltip":"/public/js/controller.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":116,"column":4},"end":{"row":116,"column":5},"action":"insert","lines":["c"],"id":370}],[{"start":{"row":116,"column":5},"end":{"row":116,"column":6},"action":"insert","lines":["o"],"id":371}],[{"start":{"row":116,"column":5},"end":{"row":116,"column":6},"action":"remove","lines":["o"],"id":372}],[{"start":{"row":116,"column":4},"end":{"row":116,"column":5},"action":"remove","lines":["c"],"id":373}],[{"start":{"row":116,"column":4},"end":{"row":138,"column":7},"action":"insert","lines":["controller('CreatePostController', ['$scope','$http','$window', function($scope,$http,$window) {","        $scope.error = false;","        $scope.createPost = function(post) {","            post.tag = $(\"#post-tags\").materialtags(\"items\");","            var url = '/posts/create'; ","            console.log(post.tags);","            $http({","                method: 'POST',","                url: url,","                headers: {'Content-Type': 'application/json; charset=utf-8'},","                data: post","                }).success(function (res) {","                    if(res.error) {","                        console.log(\"response:\",res);","                        $scope.errorMessage = \"Failed to create user \" + res.error;","                        $scope.error = true;","                    } else {","                      $window.location.href = res.success;","                    }","                    ","                });","        }","    }])"],"id":374}],[{"start":{"row":116,"column":17},"end":{"row":116,"column":26},"action":"remove","lines":["reatePost"],"id":375}],[{"start":{"row":116,"column":16},"end":{"row":116,"column":17},"action":"remove","lines":["C"],"id":376}],[{"start":{"row":116,"column":16},"end":{"row":116,"column":17},"action":"insert","lines":["C"],"id":377}],[{"start":{"row":116,"column":17},"end":{"row":116,"column":18},"action":"insert","lines":["a"],"id":378}],[{"start":{"row":116,"column":18},"end":{"row":116,"column":19},"action":"insert","lines":["r"],"id":379}],[{"start":{"row":116,"column":19},"end":{"row":116,"column":20},"action":"insert","lines":["d"],"id":380}],[{"start":{"row":117,"column":8},"end":{"row":137,"column":9},"action":"remove","lines":["$scope.error = false;","        $scope.createPost = function(post) {","            post.tag = $(\"#post-tags\").materialtags(\"items\");","            var url = '/posts/create'; ","            console.log(post.tags);","            $http({","                method: 'POST',","                url: url,","                headers: {'Content-Type': 'application/json; charset=utf-8'},","                data: post","                }).success(function (res) {","                    if(res.error) {","                        console.log(\"response:\",res);","                        $scope.errorMessage = \"Failed to create user \" + res.error;","                        $scope.error = true;","                    } else {","                      $window.location.href = res.success;","                    }","                    ","                });","        }"],"id":381}],[{"start":{"row":117,"column":8},"end":{"row":117,"column":9},"action":"insert","lines":["$"],"id":382}],[{"start":{"row":117,"column":9},"end":{"row":117,"column":10},"action":"insert","lines":["s"],"id":383}],[{"start":{"row":117,"column":10},"end":{"row":117,"column":11},"action":"insert","lines":["c"],"id":384}],[{"start":{"row":117,"column":11},"end":{"row":117,"column":12},"action":"insert","lines":["o"],"id":385}],[{"start":{"row":117,"column":12},"end":{"row":117,"column":13},"action":"insert","lines":["p"],"id":386}],[{"start":{"row":117,"column":13},"end":{"row":117,"column":14},"action":"insert","lines":["e"],"id":387}],[{"start":{"row":117,"column":14},"end":{"row":117,"column":15},"action":"insert","lines":["."],"id":388}],[{"start":{"row":117,"column":15},"end":{"row":117,"column":16},"action":"insert","lines":["i"],"id":389}],[{"start":{"row":117,"column":16},"end":{"row":117,"column":17},"action":"insert","lines":["n"],"id":390}],[{"start":{"row":117,"column":17},"end":{"row":117,"column":18},"action":"insert","lines":["c"],"id":391}],[{"start":{"row":117,"column":18},"end":{"row":117,"column":19},"action":"insert","lines":["r"],"id":392}],[{"start":{"row":117,"column":18},"end":{"row":117,"column":19},"action":"remove","lines":["r"],"id":393}],[{"start":{"row":117,"column":17},"end":{"row":117,"column":18},"action":"remove","lines":["c"],"id":394}],[{"start":{"row":117,"column":16},"end":{"row":117,"column":17},"action":"remove","lines":["n"],"id":395}],[{"start":{"row":117,"column":15},"end":{"row":117,"column":16},"action":"remove","lines":["i"],"id":396}],[{"start":{"row":117,"column":15},"end":{"row":117,"column":16},"action":"insert","lines":["l"],"id":397}],[{"start":{"row":117,"column":16},"end":{"row":117,"column":17},"action":"insert","lines":["i"],"id":398}],[{"start":{"row":117,"column":17},"end":{"row":117,"column":18},"action":"insert","lines":["k"],"id":399}],[{"start":{"row":117,"column":18},"end":{"row":117,"column":19},"action":"insert","lines":["e"],"id":400}],[{"start":{"row":117,"column":19},"end":{"row":117,"column":20},"action":"insert","lines":[" "],"id":401}],[{"start":{"row":117,"column":20},"end":{"row":117,"column":21},"action":"insert","lines":["="],"id":402}],[{"start":{"row":117,"column":21},"end":{"row":117,"column":22},"action":"insert","lines":[" "],"id":403}],[{"start":{"row":117,"column":22},"end":{"row":117,"column":23},"action":"insert","lines":["f"],"id":404}],[{"start":{"row":117,"column":23},"end":{"row":117,"column":24},"action":"insert","lines":["u"],"id":405}],[{"start":{"row":117,"column":24},"end":{"row":117,"column":25},"action":"insert","lines":["n"],"id":406}],[{"start":{"row":117,"column":25},"end":{"row":117,"column":26},"action":"insert","lines":["c"],"id":407}],[{"start":{"row":117,"column":26},"end":{"row":117,"column":27},"action":"insert","lines":["t"],"id":408}],[{"start":{"row":117,"column":27},"end":{"row":117,"column":28},"action":"insert","lines":["i"],"id":409}],[{"start":{"row":117,"column":28},"end":{"row":117,"column":29},"action":"insert","lines":["o"],"id":410}],[{"start":{"row":117,"column":29},"end":{"row":117,"column":30},"action":"insert","lines":["n"],"id":411}],[{"start":{"row":117,"column":30},"end":{"row":117,"column":31},"action":"insert","lines":[" "],"id":412}],[{"start":{"row":117,"column":31},"end":{"row":117,"column":32},"action":"insert","lines":[")"],"id":413}],[{"start":{"row":117,"column":31},"end":{"row":117,"column":32},"action":"remove","lines":[")"],"id":414}],[{"start":{"row":117,"column":30},"end":{"row":117,"column":31},"action":"remove","lines":[" "],"id":415}],[{"start":{"row":117,"column":30},"end":{"row":117,"column":32},"action":"insert","lines":["()"],"id":416}],[{"start":{"row":117,"column":32},"end":{"row":117,"column":33},"action":"insert","lines":["{"],"id":417}],[{"start":{"row":117,"column":33},"end":{"row":117,"column":34},"action":"insert","lines":["}"],"id":418}],[{"start":{"row":117,"column":33},"end":{"row":119,"column":8},"action":"insert","lines":["","            ","        "],"id":419}],[{"start":{"row":118,"column":12},"end":{"row":118,"column":13},"action":"insert","lines":["l"],"id":420}],[{"start":{"row":118,"column":13},"end":{"row":118,"column":14},"action":"insert","lines":["i"],"id":421}],[{"start":{"row":118,"column":14},"end":{"row":118,"column":15},"action":"insert","lines":["k"],"id":422}],[{"start":{"row":118,"column":15},"end":{"row":118,"column":16},"action":"insert","lines":["e"],"id":423}],[{"start":{"row":118,"column":15},"end":{"row":118,"column":16},"action":"remove","lines":["e"],"id":424}],[{"start":{"row":118,"column":14},"end":{"row":118,"column":15},"action":"remove","lines":["k"],"id":425}],[{"start":{"row":118,"column":13},"end":{"row":118,"column":14},"action":"remove","lines":["i"],"id":426}],[{"start":{"row":118,"column":12},"end":{"row":118,"column":13},"action":"remove","lines":["l"],"id":427}],[{"start":{"row":118,"column":12},"end":{"row":118,"column":13},"action":"insert","lines":["c"],"id":428}],[{"start":{"row":118,"column":13},"end":{"row":118,"column":14},"action":"insert","lines":["o"],"id":429}],[{"start":{"row":118,"column":14},"end":{"row":118,"column":15},"action":"insert","lines":["n"],"id":430}],[{"start":{"row":118,"column":15},"end":{"row":118,"column":16},"action":"insert","lines":["s"],"id":431}],[{"start":{"row":118,"column":16},"end":{"row":118,"column":17},"action":"insert","lines":["o"],"id":432}],[{"start":{"row":118,"column":17},"end":{"row":118,"column":18},"action":"insert","lines":["l"],"id":433}],[{"start":{"row":118,"column":18},"end":{"row":118,"column":19},"action":"insert","lines":["e"],"id":434}],[{"start":{"row":118,"column":19},"end":{"row":118,"column":20},"action":"insert","lines":["."],"id":435}],[{"start":{"row":118,"column":20},"end":{"row":118,"column":21},"action":"insert","lines":["l"],"id":436}],[{"start":{"row":118,"column":21},"end":{"row":118,"column":22},"action":"insert","lines":["g"],"id":437}],[{"start":{"row":118,"column":21},"end":{"row":118,"column":22},"action":"remove","lines":["g"],"id":438}],[{"start":{"row":118,"column":21},"end":{"row":118,"column":22},"action":"insert","lines":["o"],"id":439}],[{"start":{"row":118,"column":22},"end":{"row":118,"column":23},"action":"insert","lines":["g"],"id":440}],[{"start":{"row":118,"column":23},"end":{"row":118,"column":25},"action":"insert","lines":["()"],"id":441}],[{"start":{"row":118,"column":25},"end":{"row":118,"column":26},"action":"insert","lines":[";"],"id":442}],[{"start":{"row":118,"column":24},"end":{"row":118,"column":26},"action":"insert","lines":["\"\""],"id":443}],[{"start":{"row":118,"column":25},"end":{"row":118,"column":26},"action":"insert","lines":["l"],"id":444}],[{"start":{"row":118,"column":26},"end":{"row":118,"column":27},"action":"insert","lines":["i"],"id":445}],[{"start":{"row":118,"column":27},"end":{"row":118,"column":28},"action":"insert","lines":["k"],"id":446}],[{"start":{"row":118,"column":28},"end":{"row":118,"column":29},"action":"insert","lines":["e"],"id":447}],[{"start":{"row":118,"column":29},"end":{"row":118,"column":30},"action":"insert","lines":["!"],"id":448}],[{"start":{"row":117,"column":18},"end":{"row":117,"column":19},"action":"remove","lines":["e"],"id":449}],[{"start":{"row":117,"column":17},"end":{"row":117,"column":18},"action":"remove","lines":["k"],"id":450}],[{"start":{"row":117,"column":16},"end":{"row":117,"column":17},"action":"remove","lines":["i"],"id":451}],[{"start":{"row":117,"column":15},"end":{"row":117,"column":16},"action":"remove","lines":["l"],"id":452}],[{"start":{"row":117,"column":15},"end":{"row":117,"column":16},"action":"insert","lines":["T"],"id":453}],[{"start":{"row":117,"column":16},"end":{"row":117,"column":17},"action":"insert","lines":["h"],"id":454}],[{"start":{"row":117,"column":17},"end":{"row":117,"column":18},"action":"insert","lines":["u"],"id":455}],[{"start":{"row":117,"column":18},"end":{"row":117,"column":19},"action":"insert","lines":["m"],"id":456}],[{"start":{"row":117,"column":18},"end":{"row":117,"column":19},"action":"remove","lines":["m"],"id":457}],[{"start":{"row":117,"column":17},"end":{"row":117,"column":18},"action":"remove","lines":["u"],"id":458}],[{"start":{"row":117,"column":16},"end":{"row":117,"column":17},"action":"remove","lines":["h"],"id":459}],[{"start":{"row":117,"column":15},"end":{"row":117,"column":16},"action":"remove","lines":["T"],"id":460}],[{"start":{"row":117,"column":15},"end":{"row":117,"column":16},"action":"insert","lines":["t"],"id":461}],[{"start":{"row":117,"column":16},"end":{"row":117,"column":17},"action":"insert","lines":["h"],"id":462}],[{"start":{"row":117,"column":17},"end":{"row":117,"column":18},"action":"insert","lines":["u"],"id":463}],[{"start":{"row":117,"column":18},"end":{"row":117,"column":19},"action":"insert","lines":["m"],"id":464}],[{"start":{"row":117,"column":19},"end":{"row":117,"column":20},"action":"insert","lines":["b"],"id":465}],[{"start":{"row":117,"column":19},"end":{"row":117,"column":20},"action":"remove","lines":["b"],"id":466}],[{"start":{"row":117,"column":19},"end":{"row":117,"column":20},"action":"insert","lines":["b"],"id":467}],[{"start":{"row":117,"column":20},"end":{"row":117,"column":21},"action":"insert","lines":["U"],"id":468}],[{"start":{"row":117,"column":21},"end":{"row":117,"column":22},"action":"insert","lines":["p"],"id":469}],[{"start":{"row":115,"column":7},"end":{"row":120,"column":7},"action":"remove","lines":[".","    controller('CardController', ['$scope','$http','$window', function($scope,$http,$window) {","        $scope.thumbUp = function(){","            console.log(\"like!\");","        }","    }])"],"id":470}]]},"ace":{"folds":[],"scrolltop":1462,"scrollleft":0,"selection":{"start":{"row":86,"column":59},"end":{"row":86,"column":59},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":65,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1462334292019,"hash":"00fdda33f0442d2ea80f559cfe0fffd5b6ea9a7d"}