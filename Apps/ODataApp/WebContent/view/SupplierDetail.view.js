sap.ui.jsview("view.SupplierDetail", {

	getControllerName : function() {
		return "view.SupplierDetail";
	},

	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},
	
	createContent : function(controller) {

		// create page
		this.page = new sap.m.Page("SupplierDetailPage",{
			title : "{Supplier/CompanyName}",
			showNavButton : true, 
			navButtonTap : [ controller.navButtonTap, controller ],       
			content: [
		  		new sap.m.List({
					items : [
						new sap.m.DisplayListItem({
							label : "Company Name",
							value : "{Supplier/CompanyName}"
						}),
						new sap.m.DisplayListItem({
							label : "Web Address",
							value : "{Supplier/WebAddress}"
						}),
						new sap.m.DisplayListItem({
							label : "Phone Number",
							value : "{Supplier/PhoneNumber}",
							type : "Active",
							  tap : function(evt) {
        						sap.m.URLHelper.triggerTel(evt.getSource().data('phone'));
   							 }
						}).addCustomData(new sap.ui.core.CustomData({
            				key: 'phone',
            				value: '{Supplier/PhoneNumber}',
            				writeToDom: true
        				})), //using custom data to store values
						new sap.m.DisplayListItem({
							label : "Email",
							value : "{Supplier/EmailAddress}",
							type : "Active",
							tap : function(evt) {
								sap.m.URLHelper.triggerEmail(evt.getSource().data('email'), ""); 
   						 	}
						}).addCustomData(new sap.ui.core.CustomData({
            				key: 'email',
            				value: '{Supplier/EmailAddress}',
            				writeToDom: true
        				}))
					],
				})
			] 
		});
		
		return this.page;
	}

});