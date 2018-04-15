/**
* @author Abhishek Raj(abhraj786@gmail.com)
* @date 
* @description : To hold response
Modification Log:
------------------------------------------------------------------------------------
Developer Mod Number Date Description
------------------------------------------------------------------------------------
*/
    public class DataTableResponse {
        
        public List<DataTableColumns> lstDataTableColumns;
        
        public List<sObject> lstDataTableData;               
        
        public DataTableResponse(){
            lstDataTableColumns = new List<DataTableColumns>();
            lstDataTableData = new List<sObject>();
        }
    }