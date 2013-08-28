/* global requirejs, require */
requirejs.config({
    
  baseUrl: "/scripts/",
  
  paths: {
    "d3": "../lib/d3/d3"
  },

  shim: {
    d3: {
      exports: 'd3'
    }
  }  
});

require(['radar', 'radarData'], function(radar, radarData){
  radar.init(radarData);
});