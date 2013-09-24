jQuery.sap.require("util.Formatter");
sap.ui.jsview("view.ProductList", {

	/** Specifies the Controller belonging to this View. */ 
	getControllerName : function() {
		return "view.ProductList";
	},

	/**  The place where the UI is constructed. */
	createContent : function(oController) {

		//create template for list	
	 	var itemTemplate =  new sap.m.ObjectListItem({
			type : "Active",
			title : "{Name}",
			icon : { 
				path : 'ProductPicUrl', 
				formatter : util.Formatter.pictureUrl //example use of util formatter method
			},
			number : {
				path : "Price",
				formatter : util.Formatter.price
			},
			numberUnit : "{CurrencyCode}",
			attributes : [ 
			    new sap.m.ObjectAttribute({
			    	text : "{Category}"
				}),
				new sap.m.ObjectAttribute({
					text : "{Description}"
				})
			],
			firstStatus : new sap.m.ObjectStatus({
				text : "In Stock",
				state : "Success"
			}),
			tap : [ oController.listTap, oController ]
		});

	 	/** Define List and bind OData Collection and template */	
	    var productList = new sap.m.List("products", {
	 		items: {
	 			path: "/ProductCollection", 
	 		    parameters: {expand: "Supplier"},
				template: itemTemplate
	 		}
		});
		
		var page = new sap.m.Page("ProductListPage",{
					title : 'Product List',
					content : [productList]
		});
		
		return page;
	}

});