sap.ui.controller("view.ProductList", {

	listTap : function(evt) {
		/**  get the selected context of the tapped ListItem */
		var bindingContext = evt.getSource().getBindingContext(); // evt.getSource() is the ListItem
		
		/** The EventBus is used to let the Root App Controller know that a navigation should take place.
		 The nav to event is published and the id of the view to navigate to plus the bindingContext to use 
		 are attached */
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", { 
			id : "ProductDetail",
			data : {
				context : bindingContext
			}
		});
	}

});