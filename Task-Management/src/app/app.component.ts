import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task-Management';
  public showDialog: boolean = false;
  public userName: string = '';
  public task: string = '';
  public userBoardArray: any = [];
  public showTaskDialog: boolean = false;
  private currentUserName: string = '';
  public showEdit = true;


// To Show User Dialog , to add Board Users
  openDialog() {
    this.showDialog = true;
  }

// To Show Task Dialog , to add Task lists of Users
  openTaskModal (val: any) {
      this.showTaskDialog = true;
      this.currentUserName = val;

   
  }


//To delete Board User
  deleteUser(name: any) {
    this.userBoardArray.forEach((obj: any , index: any)=>{
      if(obj.name === name)
      this.userBoardArray.splice(index , 1);

    });
  }


// Close the Dialog and Add taskList and BoardUsers into Array
  close(str: string, value: any , delElemName?: any ) {
    if(!value){
      this.showDialog = false;
      this.showTaskDialog = false;
      return;
    }
    switch(str) {
      // Push UserDetails into Array

      case 'username' : 
        this.showDialog = false;
        this.userName = '';
        this.userBoardArray.push({name : value , [value] : {taskList : []}});
      break;

      // Push TaskDetails into Specific Usesr
      case 'tasklist' :
        this.showTaskDialog = false;
        this.task = '';
        for(let obj of this.userBoardArray) {
          if (obj.name === this.currentUserName) {
            obj[obj.name].taskList.push(value);
          };

        }

      break;

      // Delete Task ELement of a specified user
      case 'delete' :
        if (confirm("Are you sure to delete "+value)) {
          this.userBoardArray.forEach((obj: any)=>{
            if(obj.name === delElemName) 
            obj[obj.name].taskList.forEach((element: any , index: any) => {
              if(element === value)
              obj[obj.name].taskList.splice(index,1);
              
            });
         });
        }
        
      break;
      }

  }

  // Update User Name 
  updateUserName(name: string) {
    this.userBoardArray.forEach((obj: any)=>{ 
      if(obj.name !==  obj[obj.name] ){
        let val = Object.keys(obj)[1];
        obj[name] = obj[val]; 
      }
    });
    console.log('updated' , this.userBoardArray);

  }

}
