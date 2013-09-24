jQuery.sap.require("util.Formatter");
sap.ui.jsview("view.ProductDetail", {

	/** Specifies the Controller belonging to this View. */ 
	getControllerName : function() {
		return "view.ProductDetail";
	},

	/** called after prior to showing view, delegate event handling to controller */
	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},
	
	createContent : function(controller) {

		// create page
		this.page = new sap.m.Page("ProductDetailPage",{
			title : "{Name}",
			showNavButton : true,
			navButtonTap : [ controller.navButtonTap, controller ],      
			content: [
			          new sap.m.ObjectHeader({
			        	 title : "{Name}",
			        	 number:  {
								path : "Price",
								formatter : util.Formatter.price
			        	  },
			        	 numberUnit : "{CurrencyCode}",
			        	 attributes : [ 
			      		 			new sap.m.ObjectAttribute({
			      				    	text : "{SupplierName}",
			      				    	active : true,
			      				   		press : [controller.supplierTap,controller]
			      					}),
			      					new sap.m.ObjectAttribute({
			      						text : "{Description}" 
			      					}),
			      				    new sap.m.ObjectAttribute({
			      				    	text : "{WeightMeasure} {WeightUnit}"
			      					}),
			      			
			      		]
			          }),
			        	
			        	  
			          
//			          
//			          
//		  		new sap.m.List({
//					items : [
//						new sap.m.DisplayListItem({
//							label : "Name",
//							value : "{Name}"
//						}),
//						new sap.m.DisplayListItem({
//							label : "Description",
//							value : "{Description}"
//						}),
//						new sap.m.DisplayListItem({
//							label : "Price",
//							value : {
//								path : "Price",
//								type : new sap.ui.model.type.Float({
//									maxFractionDigits : 2
//								})
//							}
//						}),
						
//						new sap.m.StandardListItem({
//							title : "Supplier",
//							description : "{SupplierName}",
//							type : sap.m.ListType.Navigation,
//							tap : [ controller.supplierTap, controller ]
//						})
//					],
//				})
		  		,
				new sap.m.VBox({
					alignItems : sap.m.FlexAlignItems.Center,
					items : [ 
					    new sap.m.Image({
							src : { path :  "ProductPicUrl",
									formatter : util.Formatter.pictureUrl
							},
							decorative : true,
							densityAware : false
						})
					]
				})
			] 
		});
		
		return this.page;
	}

});