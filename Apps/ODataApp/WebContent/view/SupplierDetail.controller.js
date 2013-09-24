sap.ui.controller("view.SupplierDetail", {

	onBeforeShow : function(evt) {
		if (evt.data) {
			this.getView().setBindingContext(evt.data);
		} 
	},
	
	navButtonTap : function(evt) { 
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "back", {});
	}

});