/**
 * Copyright (C) 2005-2016 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * <p><b>This widget is in the "aikau" package and does not adhere to the backwards compatibility standards
 * of the "alfresco" package. The code in this package is intended to form the basis of the next major release
 * of Aikau and will remain in an unstable state until ready for release. Please evaluate and feedback on this
 * module but do not rely on it in production!</b></p>
 *
 * @module aikau/menus/Menu
 * @extends module:aikau/mdl/BaseMdlWidget
 * @author Dave Draper
 * @since 1.0.96
 */
define(["dojo/_base/declare",
        "aikau/buttons/Button", 
        "dojo/dom-construct"], 
        function(declare, Button, domConstruct) {
   
   return declare([Button], {

      /**
       * Override the default to prevent the menu items being rendered until they are required.
       * 
       * @instance
       * @type {boolean}
       * @default
       */
      createChildrenImmediately: false,

      /**
       * Create the menu items once the widget has been added to the document.
       *
       * @instance
       */
      onAddedToDocument: function aikau_menus_Menu__onAddedToDocument() {
         // No action by default
         var menuNode = domConstruct.create("ul", {
            className: "mdl-menu mdl-js-menu mdl-js-ripple-effect",
            "for": this.id
         }, this.domNode, "after");

         this.createChildren({
            widgets: this.widgets,
            targetNode: menuNode
         });

         /* global componentHandler */
         componentHandler.upgradeElement(menuNode);
      }
   });
});