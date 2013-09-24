jQuery.sap.declare("model.Config");
/**	Store Model Configuration, 
 * change details to your Gateway system
 */
model.Config = {
	getUser : function () {
		return "developer";
	},

	getPwd : function () {
		return "ch4ngeme";
	},

	getHost  : function () {	
		return "http://wdflbmd6865.secondphase.com.au:50000";
	},

	getServiceUrl : function () {	
		return  this.getHost() + "/sap/opu/odata/sap/ZGWSAMPLE_SRV/";
	}

};


	