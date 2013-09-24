jQuery.sap.require("model.Config");
sap.ui.controller("view.App", {

	onInit : function()  {
		var view = this.getView();

		// to avoid scrollbars on desktop the root view must be set to block display
		view.setDisplayBlock(true);

		// instantiate the OData model	
		var oModel = new sap.ui.model.odata.ODataModel(model.Config.getServiceUrl(), true, model.Config.getUser(), model.Config.getPwd());
		sap.ui.getCore().setModel(oModel);

		//App is the root element of a UI5 mobile application, it provides navigation capabilities.
		this.app = view.app;
		
		// EventBus Provides eventing facilities eg subscribe, unsubscribe and publish events.
		var bus = sap.ui.getCore().getEventBus();
		bus.subscribe("nav", "to", this.navToHandler, this);
		bus.subscribe("nav", "back", this.navBackHandler, this);
	},

	navToHandler : function(channelId, eventId, data) {
		this.app.to(data.id, data.data.context);
	},

	navBackHandler : function() {
		this.app.back();
	}

});	