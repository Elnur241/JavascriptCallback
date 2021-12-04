class customArray{
    constructor(){
        this.elements=arguments;
    }
     Some(callback){
        let result =false;
          for (const item of this.elements) {
            if(callback(item))
            {
               result=true;
            break;
              }

         }
        return result;}



     Map(callback){
         let newarr=[this.elements.length];
     for (const item of this.elements) {

           newarr.push( callback(item));
     }
     return newarr;
     }

     filter(callback){

         let newarr=[];

   for (const item of this.elements) {
              if(callback(item)){
              newarr.push(item)
              }

      }
        return newarr;
    }
    Includes(element,num){
        let sum=0;
        if(num===undefined){
           for (const item of this.elements) {
            if(item===element){
                return true;
            }else{
                return false;
            }
           }
        }else{
              for (const item of this.elements) {
                  sum++
                  if(sum>num&&item===element){return true;}
              else{
                return false;
            }
           }
        }

    }



    join(element){
        let arr=[];
        let str="";
        let i=0;
        for (const item of this.elements) {
           
            if(element===null){
                arr.push(item);
            }else{
            
                
         arr.push(item +" "+element);
 
            }
        }
    return arr;}

tostring(){
    let string ="";
    let i=0;
  for (const iterator of this.elements) {
    string+=iterator+" ";
    i++;
  }
  return string;
}

indexof(element,num){
        if(num===undefined){
            
            for (let index = 0; index <=this.elements.length; index++) {
                if(this.elements[index]===element){
                    return index;
                }
            }
        }else if (num!==undefined){
            for (let index = num; index < this.elements.length; index++) {
               if(this.elements[index]===element){
                   return index;
               }    
            }
        }
        
    
}
lastindexof(element){
  for (let i=this.elements.length;i>0;i--){
      if(this.elements[i]===this.elements[i-1]){
          return i;
      }
      else if(this.elements[i]===element){
          return i;
      }
     
  }  
}
    }

 var arr=[1,2,3,4,5];
let arr1=new customArray("Apple","Appleq","Applew","Applew","Applew");

console.log(arr1.lastindexof("Applew"));