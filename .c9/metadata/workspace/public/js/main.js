{"filter":false,"title":"main.js","tooltip":"/public/js/main.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":62,"column":26},"end":{"row":62,"column":27},"action":"remove","lines":["v"],"id":1922}],[{"start":{"row":62,"column":26},"end":{"row":62,"column":27},"action":"insert","lines":["c"],"id":1923}],[{"start":{"row":62,"column":27},"end":{"row":62,"column":28},"action":"insert","lines":["a"],"id":1924}],[{"start":{"row":62,"column":28},"end":{"row":62,"column":29},"action":"insert","lines":[" "],"id":1925}],[{"start":{"row":62,"column":28},"end":{"row":62,"column":29},"action":"remove","lines":[" "],"id":1926}],[{"start":{"row":62,"column":28},"end":{"row":62,"column":29},"action":"insert","lines":["t"],"id":1927}],[{"start":{"row":62,"column":29},"end":{"row":62,"column":30},"action":"insert","lines":[" "],"id":1928}],[{"start":{"row":62,"column":30},"end":{"row":62,"column":31},"action":"insert","lines":["."],"id":1929}],[{"start":{"row":62,"column":30},"end":{"row":62,"column":31},"action":"remove","lines":["."],"id":1930}],[{"start":{"row":62,"column":29},"end":{"row":62,"column":30},"action":"remove","lines":[" "],"id":1931}],[{"start":{"row":62,"column":29},"end":{"row":62,"column":30},"action":"insert","lines":["."],"id":1932}],[{"start":{"row":62,"column":30},"end":{"row":62,"column":31},"action":"insert","lines":["n"],"id":1933}],[{"start":{"row":62,"column":31},"end":{"row":62,"column":32},"action":"insert","lines":["a"],"id":1934}],[{"start":{"row":62,"column":32},"end":{"row":62,"column":33},"action":"insert","lines":["m"],"id":1935}],[{"start":{"row":62,"column":33},"end":{"row":62,"column":34},"action":"insert","lines":["e"],"id":1936}],[{"start":{"row":63,"column":43},"end":{"row":63,"column":44},"action":"remove","lines":["t"],"id":1937}],[{"start":{"row":63,"column":42},"end":{"row":63,"column":43},"action":"remove","lines":["a"],"id":1938}],[{"start":{"row":63,"column":41},"end":{"row":63,"column":42},"action":"remove","lines":["c"],"id":1939}],[{"start":{"row":63,"column":41},"end":{"row":63,"column":51},"action":"insert","lines":["parsedTags"],"id":1940}],[{"start":{"row":63,"column":51},"end":{"row":63,"column":52},"action":"insert","lines":["."],"id":1941}],[{"start":{"row":63,"column":52},"end":{"row":63,"column":53},"action":"insert","lines":["n"],"id":1942}],[{"start":{"row":63,"column":53},"end":{"row":63,"column":54},"action":"insert","lines":["a"],"id":1943}],[{"start":{"row":63,"column":54},"end":{"row":63,"column":55},"action":"insert","lines":["m"],"id":1944}],[{"start":{"row":63,"column":55},"end":{"row":63,"column":56},"action":"insert","lines":["e"],"id":1945}],[{"start":{"row":60,"column":43},"end":{"row":62,"column":35},"action":"remove","lines":["","                ","                var cat = cat.name;"],"id":1946}],[{"start":{"row":59,"column":38},"end":{"row":60,"column":43},"action":"remove","lines":["","                console.log(parsedTags[i]);"],"id":1947}],[{"start":{"row":62,"column":9},"end":{"row":63,"column":0},"action":"insert","lines":["",""],"id":1948},{"start":{"row":63,"column":0},"end":{"row":63,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":60,"column":51},"end":{"row":60,"column":53},"action":"insert","lines":["[]"],"id":1949}],[{"start":{"row":60,"column":52},"end":{"row":60,"column":53},"action":"insert","lines":["i"],"id":1950}],[{"start":{"row":92,"column":12},"end":{"row":92,"column":46},"action":"remove","lines":["// TODO: update the post to server"],"id":1951},{"start":{"row":92,"column":12},"end":{"row":106,"column":19},"action":"insert","lines":["$http({","                method: 'POST',","                url: url,","                headers: {'Content-Type': 'application/json; charset=utf-8'},","                data: post","                }).success(function (res) {","                    if(res.error) {","                        console.log(\"response:\",res);","                        $scope.errorMessage = \"Failed to create user \" + res.error;","                        $scope.error = true;","                    } else {","                      $window.location.href = res.success;","                    }","                    ","                });"]}],[{"start":{"row":90,"column":13},"end":{"row":91,"column":33},"action":"remove","lines":["","            console.log(postIds);"],"id":1952},{"start":{"row":90,"column":13},"end":{"row":91,"column":0},"action":"insert","lines":["",""]},{"start":{"row":91,"column":0},"end":{"row":91,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":91,"column":12},"end":{"row":92,"column":0},"action":"insert","lines":["",""],"id":1953},{"start":{"row":92,"column":0},"end":{"row":92,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":95,"column":23},"end":{"row":95,"column":24},"action":"remove","lines":["l"],"id":1954}],[{"start":{"row":95,"column":22},"end":{"row":95,"column":23},"action":"remove","lines":["r"],"id":1955}],[{"start":{"row":95,"column":21},"end":{"row":95,"column":22},"action":"remove","lines":["u"],"id":1956}],[{"start":{"row":95,"column":21},"end":{"row":95,"column":22},"action":"insert","lines":["/"],"id":1957}],[{"start":{"row":95,"column":22},"end":{"row":95,"column":23},"action":"insert","lines":["/"],"id":1958}],[{"start":{"row":95,"column":22},"end":{"row":95,"column":23},"action":"remove","lines":["/"],"id":1959}],[{"start":{"row":95,"column":22},"end":{"row":95,"column":23},"action":"insert","lines":["p"],"id":1960}],[{"start":{"row":95,"column":23},"end":{"row":95,"column":24},"action":"insert","lines":["o"],"id":1961}],[{"start":{"row":95,"column":24},"end":{"row":95,"column":25},"action":"insert","lines":["s"],"id":1962}],[{"start":{"row":95,"column":25},"end":{"row":95,"column":26},"action":"insert","lines":["t"],"id":1963}],[{"start":{"row":95,"column":26},"end":{"row":95,"column":27},"action":"insert","lines":["s"],"id":1964}],[{"start":{"row":95,"column":27},"end":{"row":95,"column":28},"action":"insert","lines":["/"],"id":1965}],[{"start":{"row":95,"column":28},"end":{"row":95,"column":29},"action":"insert","lines":["l"],"id":1966}],[{"start":{"row":95,"column":29},"end":{"row":95,"column":30},"action":"insert","lines":["i"],"id":1967}],[{"start":{"row":95,"column":30},"end":{"row":95,"column":31},"action":"insert","lines":["k"],"id":1968}],[{"start":{"row":95,"column":31},"end":{"row":95,"column":32},"action":"insert","lines":["e"],"id":1969}],[{"start":{"row":95,"column":31},"end":{"row":95,"column":32},"action":"remove","lines":["e"],"id":1970}],[{"start":{"row":95,"column":30},"end":{"row":95,"column":31},"action":"remove","lines":["k"],"id":1971}],[{"start":{"row":95,"column":29},"end":{"row":95,"column":30},"action":"remove","lines":["i"],"id":1972}],[{"start":{"row":95,"column":28},"end":{"row":95,"column":29},"action":"remove","lines":["l"],"id":1973}],[{"start":{"row":95,"column":28},"end":{"row":95,"column":29},"action":"insert","lines":["l"],"id":1974}],[{"start":{"row":95,"column":29},"end":{"row":95,"column":30},"action":"insert","lines":["i"],"id":1975}],[{"start":{"row":95,"column":30},"end":{"row":95,"column":31},"action":"insert","lines":["k"],"id":1976}],[{"start":{"row":95,"column":31},"end":{"row":95,"column":32},"action":"insert","lines":["e"],"id":1977}],[{"start":{"row":95,"column":32},"end":{"row":95,"column":33},"action":"insert","lines":[";"],"id":1978}],[{"start":{"row":95,"column":32},"end":{"row":95,"column":33},"action":"remove","lines":[";"],"id":1979}],[{"start":{"row":95,"column":32},"end":{"row":95,"column":33},"action":"insert","lines":["'"],"id":1980}],[{"start":{"row":95,"column":21},"end":{"row":95,"column":22},"action":"insert","lines":["'"],"id":1981}],[{"start":{"row":97,"column":25},"end":{"row":97,"column":26},"action":"remove","lines":["t"],"id":1982}],[{"start":{"row":97,"column":24},"end":{"row":97,"column":25},"action":"remove","lines":["s"],"id":1983}],[{"start":{"row":97,"column":23},"end":{"row":97,"column":24},"action":"remove","lines":["o"],"id":1984}],[{"start":{"row":97,"column":22},"end":{"row":97,"column":23},"action":"remove","lines":["p"],"id":1985}],[{"start":{"row":97,"column":22},"end":{"row":97,"column":23},"action":"insert","lines":["{"],"id":1986}],[{"start":{"row":97,"column":23},"end":{"row":97,"column":24},"action":"insert","lines":["}"],"id":1987}],[{"start":{"row":97,"column":23},"end":{"row":99,"column":16},"action":"insert","lines":["","                    ","                "],"id":1988}],[{"start":{"row":98,"column":20},"end":{"row":98,"column":21},"action":"insert","lines":["_"],"id":1989}],[{"start":{"row":98,"column":21},"end":{"row":98,"column":22},"action":"insert","lines":["i"],"id":1990}],[{"start":{"row":98,"column":22},"end":{"row":98,"column":23},"action":"insert","lines":["d"],"id":1991}],[{"start":{"row":98,"column":23},"end":{"row":98,"column":24},"action":"insert","lines":[":"],"id":1992}],[{"start":{"row":98,"column":24},"end":{"row":98,"column":25},"action":"insert","lines":[" "],"id":1993}],[{"start":{"row":98,"column":25},"end":{"row":98,"column":31},"action":"insert","lines":["postId"],"id":1994}],[{"start":{"row":98,"column":31},"end":{"row":98,"column":32},"action":"insert","lines":[","],"id":1995}],[{"start":{"row":89,"column":100},"end":{"row":90,"column":0},"action":"insert","lines":["",""],"id":1996},{"start":{"row":90,"column":0},"end":{"row":90,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":90,"column":16},"end":{"row":91,"column":0},"action":"insert","lines":["",""],"id":1997},{"start":{"row":91,"column":0},"end":{"row":91,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":95,"column":12},"end":{"row":112,"column":12},"action":"remove","lines":["$http({","                method: 'POST',","                url: '/posts/like',","                headers: {'Content-Type': 'application/json; charset=utf-8'},","                data: {","                    _id: postId,","                }","                }).success(function (res) {","                    if(res.error) {","                        console.log(\"response:\",res);","                        $scope.errorMessage = \"Failed to create user \" + res.error;","                        $scope.error = true;","                    } else {","                      $window.location.href = res.success;","                    }","                    ","                });","            "],"id":1998}],[{"start":{"row":90,"column":16},"end":{"row":107,"column":12},"action":"insert","lines":["$http({","                method: 'POST',","                url: '/posts/like',","                headers: {'Content-Type': 'application/json; charset=utf-8'},","                data: {","                    _id: postId,","                }","                }).success(function (res) {","                    if(res.error) {","                        console.log(\"response:\",res);","                        $scope.errorMessage = \"Failed to create user \" + res.error;","                        $scope.error = true;","                    } else {","                      $window.location.href = res.success;","                    }","                    ","                });","            "],"id":1999}],[{"start":{"row":89,"column":100},"end":{"row":90,"column":0},"action":"insert","lines":["",""],"id":2000},{"start":{"row":90,"column":0},"end":{"row":90,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":103,"column":22},"end":{"row":105,"column":21},"action":"remove","lines":["else {","                      $window.location.href = res.success;","                    }"],"id":2001}],[{"start":{"row":103,"column":22},"end":{"row":104,"column":20},"action":"remove","lines":["","                    "],"id":2002}],[{"start":{"row":101,"column":24},"end":{"row":102,"column":44},"action":"remove","lines":["$scope.errorMessage = \"Failed to create user \" + res.error;","                        $scope.error = true;"],"id":2003}],[{"start":{"row":100,"column":37},"end":{"row":100,"column":51},"action":"remove","lines":["response:\",res"],"id":2004}],[{"start":{"row":100,"column":37},"end":{"row":100,"column":38},"action":"insert","lines":["\""],"id":2005}],[{"start":{"row":100,"column":37},"end":{"row":100,"column":38},"action":"insert","lines":["s"],"id":2006}],[{"start":{"row":100,"column":38},"end":{"row":100,"column":39},"action":"insert","lines":["u"],"id":2007}],[{"start":{"row":100,"column":39},"end":{"row":100,"column":40},"action":"insert","lines":["c"],"id":2008}],[{"start":{"row":100,"column":40},"end":{"row":100,"column":41},"action":"insert","lines":["c"],"id":2009}],[{"start":{"row":100,"column":41},"end":{"row":100,"column":42},"action":"insert","lines":["e"],"id":2010}],[{"start":{"row":100,"column":42},"end":{"row":100,"column":43},"action":"insert","lines":["s"],"id":2011}],[{"start":{"row":100,"column":43},"end":{"row":100,"column":44},"action":"insert","lines":["s"],"id":2012}],[{"start":{"row":100,"column":44},"end":{"row":100,"column":45},"action":"insert","lines":["!"],"id":2013}],[{"start":{"row":96,"column":32},"end":{"row":97,"column":0},"action":"insert","lines":["",""],"id":2014},{"start":{"row":97,"column":0},"end":{"row":97,"column":20},"action":"insert","lines":["                    "]}],[{"start":{"row":97,"column":20},"end":{"row":97,"column":21},"action":"insert","lines":["l"],"id":2015}],[{"start":{"row":97,"column":21},"end":{"row":97,"column":22},"action":"insert","lines":["i"],"id":2016}],[{"start":{"row":97,"column":22},"end":{"row":97,"column":23},"action":"insert","lines":["k"],"id":2017}],[{"start":{"row":97,"column":23},"end":{"row":97,"column":24},"action":"insert","lines":["e"],"id":2018}],[{"start":{"row":97,"column":24},"end":{"row":97,"column":25},"action":"insert","lines":["s"],"id":2019}],[{"start":{"row":97,"column":25},"end":{"row":97,"column":26},"action":"insert","lines":[":"],"id":2020}],[{"start":{"row":97,"column":26},"end":{"row":97,"column":27},"action":"insert","lines":[" "],"id":2021}],[{"start":{"row":97,"column":27},"end":{"row":97,"column":43},"action":"insert","lines":["currentLikeVal+1"],"id":2022}]]},"ace":{"folds":[],"scrolltop":1343,"scrollleft":0,"selection":{"start":{"row":79,"column":42},"end":{"row":79,"column":42},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1462343434549,"hash":"291a8d970fca823930c4b2f1cbbaab27b321c6b2"}