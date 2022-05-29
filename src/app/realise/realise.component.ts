import { ModuleDialogComponent } from './../module-dialog/module-dialog.component';
import { ServService } from './../serv.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


export interface Realise {
  clientsInput: string;
  moduleInput:string;
  hours: number;
  minutes: number;
  dateInput: string;
}

function isExist(elem : any , tab:any []):boolean{
  console.log(elem);
console.log(tab);

  for(let i = 0 ; i < tab.length ; i++){
    
    if(tab.indexOf(tab[i]) != -1){
      return true;
    }

  }

  return false;
}

@Component({
  selector: 'app-realise',
  templateUrl: './realise.component.html',
  styleUrls: ['./realise.component.css']
})
export class RealiseComponent implements OnInit {
  


  openDialog(module:any): void {

    this.service.getModuleByIdForm(module).subscribe(data=>{

    let tabModules :any = []

      tabModules.push(data)

      let tabTest :any = []

      console.log(tabModules[0]);
      

      for(let i=0 ; i < tabModules[0].length ; i++){

        
        const idModule = tabModules[0][i]["module"]

        console.log(idModule);

        this.service.getModulesDes(idModule).subscribe((data: { [x: string]: any; })=>{

          console.log(data);
          
          var result = Object.keys(data).map((key) => [Number(key), data[key]]);
          
          console.log(result[0][1]["designation"]);
          
        console.log(data);
        
        tabTest.push(result[0][1]["designation"])

        console.log(tabTest);

            // for(let i=0 ; i< tabTest.length ; i++){
            //   const temp = tabTest[i][0]["designation"];
            //   console.log(tabTest[i]);
              
            //     this.tabDesModules.push(temp)
            //     console.log(temp);
            
            // }
          

            console.log(tabTest[i]);
            this.testArrayFinal.push(tabTest[i])
            console.log(this.testArrayFinal);

            
    

      })

        console.log(this.tabDesModules);
        
        

      }

      let dialogRef = this.dialog.open(ModuleDialogComponent, {
        width: '500px',
        data: {module : this.testArrayFinal},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.testArrayFinal = [];
        console.log(this.tabDesModules);
        
      });
      

//       let arr :any = []
// console.log(this.tabDesModules.length);

//       for(let i=0 ; i < this.tabDesModules.length ; i++){

//           if(isExist(this.tabDesModules[i] , this.tabDesModules)){
// console.log("if");

//             }else{
//               console.log("else");
              
//               arr.push(this.tabDesModules[i])
//             }
//       }
// console.log(arr);

//       console.log(this.tabDesModules);
    })

    


    
  }
  
  
  DATA:any = []
  modules = new Array()
  forms = new Array()
  modulesDes = new Array()
  finalModules = new Array()
  testArrayFinal = new Array();
  tabDesModules = new Array()


  constructor(private service : ServService , public dialog : MatDialog) { }

  ngOnInit(): void {

    this.service.getListOfForms().subscribe(data=>{

      console.log(data);
      this.DATA = data
      this.forms.push(data)

      for(let i=0 ; i < this.forms.length ; i++){
        //console.log(this.forms[i]["clientsInput"]);
        this.modules.push(this.forms[i])
        
      }

console.log(this.modules[0].length);

for(let i=0 ; i < this.modules[0].length ; i++){

  const actualmodule = this.modules[0][i]["moduleInput"];

   //console.log(this.modules[0][i]["moduleInput"]);
   
  this.service.getModuleByIdForm(actualmodule).subscribe(data=>{
    //console.log(data);

    this.modulesDes.push(data)

    for(let i=0 ; i < this.modulesDes.length ; i++){

      console.log(this.modulesDes[i][0]["module"]);
      
    
      this.service.getModulesDes(this.modulesDes[i][0]["module"]).subscribe((data: any)=>{
        console.log(data);

        this.finalModules.push(data)

        console.log(this.finalModules);
        

      })

    }
    
    
  })


}

    })

    this.service.getModules().subscribe(data=>{
      console.log(data);

    
    })

  }

  displayedColumns: string[] = ['client', 'module', 'duration', 'date'];
  
  dataSource = this.DATA;

}
