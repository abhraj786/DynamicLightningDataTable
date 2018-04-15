({ 
    /*	
	@author: Abhishek Raj (abhraj786gmail.com)
	@description: This method is used to make server call.
	*/
    callServerHelper : function(component , serverMethod , params ,   cacheable , callback ) 
    {
        console.log('params-->: '+params);
        var action = component.get(serverMethod);
        if (params) 
        {
            action.setParams(params);
        }
        
        if (cacheable) 
        {
            action.setStorable();
        }
        
        action.setCallback(this,function(response) 
                           {   
                               console.log('response in generic component-->'+response);
                               var state = response.getState();
                               if (state === "SUCCESS") 
                               { 
                                   var auraRes = response.getReturnValue();
                                   console.log('auraRes  ---> '+JSON.stringify(auraRes));
                                   if(auraRes != null && auraRes.message == "Success"){
                                   	callback.call(this,auraRes);    
                                   }
                                   else{
                                       //Generic error handling uniform across application;
                                       console.log('Error occured !!!');
                                   }
                               } else if (state === "ERROR") 
                               {	
                                   // generic error handler
                                   var errors = response.getError();
                                   if (errors) 
                                   {
                                       if (errors[0] && errors[0].message) 
                                       {
                                           var errorMsg = errors[0].message;
                                           console.error(errorMsg);
                                       }
                                   } else 
                                   {
                                       console.error('Unknown Error !!') ;
                                   }                
                               }else
                               {
                                   console.error('Server call never returned !!! ') ;
                               }
                           });  
        $A.enqueueAction(action);
    }
})