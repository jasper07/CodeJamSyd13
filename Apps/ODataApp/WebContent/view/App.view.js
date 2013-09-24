sap.ui.jsview("view.App", {

	/** Specifies the Controller belonging to this View.*/ 
	getControllerName : function() {
		return "view.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place 
	where the UI is constructed. */ 
	createContent : function(oController) {
		this.app = new sap.m.App("App");
		
		//no need to lazy load only 3 views
		var view1 = sap.ui.jsview("ProductList", "view.ProductList");
		this.app.addPage(view1);
		
		var view2 = sap.ui.jsview("ProductDetail", "view.ProductDetail");
		this.app.addPage(view2);
		
		var view3 = sap.ui.jsview("SupplierDetail", "view.SupplierDetail");
		this.app.addPage(view3);
		
		return this.app;
	}
})