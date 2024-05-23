import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'filterproductpipe'
})
export class FilterproductpipePipe implements PipeTransform {

  transform(value:any, filterpro:string){
    
    if(value.length==0||filterpro==""){
      return value;
    }
    const searchresult=[];
    for(const item of value){
      
      if(item['name'].toLowerCase().indexOf(filterpro.toLowerCase())>=0){
        searchresult.push(item);
      }
      if(item['color'].toLowerCase().indexOf(filterpro.toLowerCase())>=0){
        searchresult.push(item);
      }
      if(item['price'].toLowerCase().indexOf(filterpro.toLowerCase())>=0){
        searchresult.push(item);
      }
      if(item['category'].toLowerCase().indexOf(filterpro.toLowerCase())>=0){
        searchresult.push(item);
      }
      if(item['description'].toLowerCase().indexOf(filterpro.toLowerCase())>=0){
        searchresult.push(item);
      }
    }
    return searchresult;

  }

}
