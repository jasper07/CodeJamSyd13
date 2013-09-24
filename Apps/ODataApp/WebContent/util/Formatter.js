jQuery.sap.declare("util.Formatter");
jQuery.sap.require("model.Config");
jQuery.sap.require("sap.ui.core.format.NumberFormat");

util.Formatter = {
	/** format value as a price
	 * 
	 * @param value
	 * @returns 
	 */
	price : function(value) {
		var numberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
			maxFractionDigits : 2,
			groupingEnabled : true,
			groupingSeparator : ",",
			decimalSeparator : "."
		});
		return numberFormat.format(value);
	},
	
	/** return qualified Picture Url
	 * 
	 * @param pictureUrl
	 * @returns
	 */
	pictureUrl : function(pictureUrl) {
		return model.Config.getHost() + pictureUrl;
	}

};