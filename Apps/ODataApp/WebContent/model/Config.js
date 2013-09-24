jQuery.sap.declare("model.Config");
/**	Store Model Configuration
 * 
 */
model.Config = {
	getUser : function () {
		return "P1940088349";
	},

	getPwd : function () {
		return "Initial123";
	},

	getHost  : function () {	
		return "https://sapes1.sapdevcenter.com";
	},

	getServiceUrl : function () {	
		return  this.getHost() + "/sap/opu/odata/sap/ZGWSAMPLE_SRV/";
	}

};


	