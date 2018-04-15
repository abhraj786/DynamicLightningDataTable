/**
* @author Abhishek Raj(abhraj786@gmail.com)
* @date 
* @description : Landing Page Controller. Would be dynamic for both director/Manager.
Modification Log:
------------------------------------------------------------------------------------
Developer Mod Number Date Description
------------------------------------------------------------------------------------
*/
public class LandingPageObject { 
    
    private static LandingPageObject instance;
    
    public static LandingPageObject getInstance(){
        if(instance==null) instance = new LandingPageObject();
        return instance;
    }
    
    public LandingPageResponseWrapper getAccountDetialsObj(){
        LandingPageResponseWrapper responseWrapper = new LandingPageResponseWrapper();
        responseWrapper.lstDataTableRecs = FieldSetObject.getInstance().getRecords('Account','abhiraj__AccountObjFieldSet');
        return responseWrapper;
    }
}