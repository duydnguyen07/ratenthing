{"changed":true,"filter":false,"title":"services.js","tooltip":"/public/js/services.js","value":"var appServices = angular.module('appServices',[]);\n\n//adding a service to store global data\nappServices.factory('postDataService', function(){\n\tvar data = [];\n\n\tvar setData = function(d) {\n\t\tdata = d;\n\t}\n\n\tvar getData = function() {\n\t\treturn data;\n\t}\n\n\treturn {\n\t\tsetData: setData,\n\t\tgetData: getData\n\t}\n});\n\nappServices.factory('postDataService', function(){\n\tvar data = [];\n\n\tvar setData = function(d) {\n\t\tdata = d;\n\t}\n\n\tvar getData = function() {\n\t\treturn data;\n\t}\n\n\treturn {\n\t\tsetData: setData,\n\t\tgetData: getData\n\t}\n});","undoManager":{"mark":-2,"position":2,"stack":[[{"start":{"row":18,"column":3},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":20,"column":0},"end":{"row":35,"column":3},"action":"insert","lines":["appServices.factory('postDataService', function(){","\tvar data = [];","","\tvar setData = function(d) {","\t\tdata = d;","\t}","","\tvar getData = function() {","\t\treturn data;","\t}","","\treturn {","\t\tsetData: setData,","\t\tgetData: getData","\t}","});"],"id":4}]]},"ace":{"folds":[],"scrolltop":226,"scrollleft":0,"selection":{"start":{"row":20,"column":21},"end":{"row":20,"column":36},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":7,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1462226251000}