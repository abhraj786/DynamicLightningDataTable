/**
* @author Abhishek Raj(abhraj786@gmail.com)
* @date 
* @description : Wrapper class to hold Columns with headers
Modification Log:
------------------------------------------------------------------------------------
Developer Mod Number Date Description
------------------------------------------------------------------------------------
*/
public class DataTableColumns {
        public String label;
        public String fieldName; 
        public String type ;
        
        //Create and set three variables label, fieldname and type as required by the lightning:datatable
        public DataTableColumns(String label, String fieldName, String type){
            this.label = label;
            this.fieldName = fieldName;
            this.type = type;            
        }
}