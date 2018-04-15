({
    getDataHelper : function(component, event, helper) {
              
        var theMap = component.get("v.mapToSend");
        //add some params
        theMap["key1"]="blah1";
        theMap["key2"]="blah2";
        this.callServerHelper(component,'c.getAccountDetials', theMap , false , 
                              function(returnValue)
                              {
                                  var responseObject = JSON.parse(returnValue.payload); 
                                  if(responseObject!= undefined && responseObject!=null && responseObject!=''){    
                                      if(responseObject.lstDataTableRecs!=null){
                                          component.set("v.mycolumns", responseObject.lstDataTableRecs.lstDataTableColumns);
                                          component.set("v.mydata", responseObject.lstDataTableRecs.lstDataTableData);   
                                          this.getUpdatedDataHelper(component, event, helper);
                                      }
                                  }
                              }); 
        
    },
    getUpdatedDataHelper : function(component, event, helper) {
        var temparr = [];    
        _.each(component.get("v.mydata"),function(eachItem){ if(temparr == undefined){ temparr = new Array(); temparr = [{id:eachItem.Id,teamRoster:eachItem.Name,urlLabel:eachItem.Name}]} 
                                                            else{temparr.push({Id:eachItem.Id,teamRoster:window.location.origin+window.location.pathname+'#/sObject/'+eachItem.Id,urlLabel:eachItem.Name, coachingDuration: '1.0',callObservationTotal:'10'})}})  
        component.set('v.myUpdatedData',temparr);    
        component.set('v.myUpdatedColumns', [{label: 'Team Roster', fieldName: 'teamRoster', type: 'url', typeAttributes: { label: { fieldName: 'urlLabel' }}},
                                             {label: 'Coaching Duration', fieldName: 'coachingDuration', type: 'number'},
                                             {label: 'Call Observation Total', fieldName: 'callObservationTotal',  type: 'number'}]);
        
    }         
})
