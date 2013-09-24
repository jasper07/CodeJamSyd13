sap.ui.controller("view.ProductDetail", {

	/** Bind the context of the tapped ListItem to ProductDetail View */
	onBeforeShow : function(evt) {
		if (evt.data) {
			this.getView().setBindingContext(evt.data);
		} 
	},

	/** Publish the nav back event, handled by root App controller */
	navButtonTap : function(evt) { 		
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "back", {});
	},
	
	/** Publish the nav to event, pass the to view Id plus context **/
	supplierTap : function(evt) {
		var context =  this.getView().getBindingContext();
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", { 
			id : "SupplierDetail",
			data : {
				context : context
			}
		});


	}
});