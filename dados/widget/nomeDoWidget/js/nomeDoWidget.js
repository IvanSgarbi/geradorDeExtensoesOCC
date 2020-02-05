/**
 * @fileoverview productAddToSpaceWidget
 *
 */
/*global window: false, Image: false, document: false */
define(

//-------------------------------------------------------------------
// DEPENDENCIES
//-------------------------------------------------------------------
['jquery', 'knockout', 'pubsub', 'notifier', 'ccLogger', 'swmRestClient', 'swmKoValidateRules', 'placeholderPatch', 'ccConstants', 'CCi18n'],

//-------------------------------------------------------------------
// MODULE DEFINITION
//-------------------------------------------------------------------
function($, ko, PubSub, notifier, logger, swmRestClient, swmKoValidateRules, placeholder, CCConstants, CCi18n) {

  "use strict";

  return {
    //declaração de observables e propriedades do widget
    WIDGET_ID: 'productAddToSpace',
    useLogs: true,


    /**
     * Runs the first time the module is loaded on a page.
     * It is passed the widgetViewModel which contains the configuration from the server.
     */
    onLoad : function(widget) {
      var widget = this;
    },

    beforeAppear : function(page) {
      var widget = this;
      
    }
  };
});
