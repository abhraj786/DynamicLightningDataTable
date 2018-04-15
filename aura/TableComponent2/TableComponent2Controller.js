({
    scriptsLoaded : function (cmp, event, helper) {
     helper.getDataHelper(cmp, event, helper);   
    },
    getSelectedName: function (cmp, event) {
        var selectedRows = event.getParam('selectedRows');
        for (var i = 0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].urlLabel);
        }
        /*if(selectedRows != null && selectedRows.length > 0){
        	var navEvt = $A.get("e.force:navigateToSObject");
            navEvt.setParams({
                "recordId": selectedRows[0].Id,
            });
            navEvt.fire();    
        }*/
        
    }
})