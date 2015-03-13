!function(){"use strict";function t(t){return{restrict:"CA",scope:{data:"=",labels:"=",options:"=",series:"=",colours:"=?",getColour:"=?",chartType:"=",legend:"@",click:"="},link:function(o,n){function a(r){if(!p(r)){var a=t||o.chartType;a&&(i&&i.destroy(),i=e(a,o,n))}}var i,l=document.createElement("div");l.className="chart-container",n.replaceWith(l),l.appendChild(n[0]),"object"==typeof window.G_vmlCanvasManager&&null!==window.G_vmlCanvasManager&&"function"==typeof window.G_vmlCanvasManager.initElement&&window.G_vmlCanvasManager.initElement(n[0]),o.$watch("data",function(a,l){if(a&&a.length&&(!Array.isArray(a[0])||a[0].length)){var f=t||o.chartType;if(f){if(i){if(r(a,l))return s(i,a,o);i.destroy()}i=e(f,o,n)}}},!0),o.$watch("series",a,!0),o.$watch("labels",a,!0),o.$watch("options",a,!0),o.$watch("colours",a,!0),o.$watch("chartType",function(t){t&&(i&&i.destroy(),i=e(t,o,n))}),o.$on("$destroy",function(){i&&i.destroy()})}}}function r(t,r){return t&&r&&t.length&&r.length?Array.isArray(t[0])?t.length===r.length&&t[0].length===r[0].length:r.reduce(o,0)>0?t.length===r.length:!1:!1}function o(t,r){return t+r}function e(t,r,o){if(r.data&&r.data.length){r.getColour="function"==typeof r.getColour?r.getColour:i,r.colours=n(r);var e=o[0],a=e.getContext("2d"),l=Array.isArray(r.data[0])?c(r.labels,r.data,r.series||[],r.colours):u(r.labels,r.data,r.colours),f=new Chart(a)[t](l,r.options||{});return r.$emit("create",f),r.click&&(e.onclick=function(t){var o=f.getPointsAtEvent||f.getBarsAtEvent||f.getSegmentsAtEvent;if(o){var e=o.call(f,t);r.click(e,t),r.$apply()}}),r.legend&&"false"!==r.legend&&h(o,f),f}}function n(t){for(var r=t.colours||angular.copy(Chart.defaults.global.colours);r.length<t.data.length;)r.push(t.getColour());return r.map(a)}function a(t){return"object"==typeof t&&null!==t?t:"string"==typeof t&&"#"===t[0]?l(d(t.substr(1))):i()}function i(){var t=[f(0,255),f(0,255),f(0,255)];return l(t)}function l(t){return{fillColor:g(t,.2),strokeColor:g(t,1),pointColor:g(t,1),pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:g(t,.8)}}function f(t,r){return Math.floor(Math.random()*(r-t+1))+t}function g(t,r){return"rgba("+t.concat(r).join(",")+")"}function c(t,r,o,e){return{labels:t,datasets:r.map(function(t,r){var n=angular.copy(e[r]);return n.label=o[r],n.data=t,n})}}function u(t,r,o){return t.map(function(t,e){return{label:t,value:r[e],color:o[e].strokeColor,highlight:o[e].pointHighlightStroke}})}function h(t,r){var o=t.parent(),e=o.find("chart-legend"),n="<chart-legend>"+r.generateLegend()+"</chart-legend>";e.length?e.replaceWith(n):o.append(n)}function s(t,r,o){Array.isArray(o.data[0])?t.datasets.forEach(function(t,o){(t.points||t.bars).forEach(function(t,e){t.value=r[o][e]})}):t.segments.forEach(function(t,o){t.value=r[o]}),t.update(),o.$emit("update",t)}function p(t){return!t||Array.isArray(t)&&!t.length||"object"==typeof t&&!Object.keys(t).length}function d(t){var r=parseInt(t,16),o=r>>16&255,e=r>>8&255,n=255&r;return[o,e,n]}Chart.defaults.global.responsive=!0,Chart.defaults.global.multiTooltipTemplate="<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>",Chart.defaults.global.colours=[{fillColor:"rgba(151,187,205,0.2)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,0.8)"},{fillColor:"rgba(220,220,220,0.2)",strokeColor:"rgba(220,220,220,1)",pointColor:"rgba(220,220,220,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,0.8)"},{fillColor:"rgba(247,70,74,0.2)",strokeColor:"rgba(247,70,74,1)",pointColor:"rgba(247,70,74,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(247,70,74,0.8)"},{fillColor:"rgba(70,191,189,0.2)",strokeColor:"rgba(70,191,189,1)",pointColor:"rgba(70,191,189,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(70,191,189,0.8)"},{fillColor:"rgba(253,180,92,0.2)",strokeColor:"rgba(253,180,92,1)",pointColor:"rgba(253,180,92,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(253,180,92,0.8)"},{fillColor:"rgba(148,159,177,0.2)",strokeColor:"rgba(148,159,177,1)",pointColor:"rgba(148,159,177,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(148,159,177,0.8)"},{fillColor:"rgba(77,83,96,0.2)",strokeColor:"rgba(77,83,96,1)",pointColor:"rgba(77,83,96,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(77,83,96,1)"}],angular.module("chart.js",[]).directive("chartBase",function(){return t()}).directive("chartLine",function(){return t("Line")}).directive("chartBar",function(){return t("Bar")}).directive("chartRadar",function(){return t("Radar")}).directive("chartDoughnut",function(){return t("Doughnut")}).directive("chartPie",function(){return t("Pie")}).directive("chartPolarArea",function(){return t("PolarArea")})}();