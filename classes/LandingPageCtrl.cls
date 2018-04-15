/**
* @author Abhishek Raj(abhraj786@gmail.com)
* @date 
* @description : Landing Page Controller.
Modification Log:
------------------------------------------------------------------------------------
Developer Mod Number Date Description
------------------------------------------------------------------------------------
*/
public class LandingPageCtrl { 
    

    @AuraEnabled
    public static RemoteResponse getAccountDetials(){
        return new RemoteResponse(true, 'Success', System.JSON.serialize(LandingPageObject.getInstance().getAccountDetialsObj()));
    }
}