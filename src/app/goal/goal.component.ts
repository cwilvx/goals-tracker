import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
   new Goal (1,'Watch Finding Nemo','Because its 2020 and ive never watched it',new Date(2020,8,18)),
   new Goal (2,'Eat and drink like a pro','Yeah,cause i deserve it',new Date(2020,7,18)),
   new Goal (3,'Sleep upto 12 pm','Because i didnt sleep right tonight',new Date(2020,1,18)),
   new Goal (4,'Deploy my app to heroku','Or my resume will be dry',new Date(2020,2,18)),
   new Goal (5,'Add views counter to baseline','To make myself look cool',new Date(2020,5,18)),
   new Goal (6,'Add sidebar to baseline','It would be a plus',new Date(2020,3,18)),
   new Goal (7,'Plot my world domination plan','Holy shit! did I write this',new Date(2020,10,18)),
  ];
  toggleDetails(index){
    this.goals[index].show = !this.goals[index].show;
  }

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.cdate = new Date(goal.cdate)
    this.goals.push(goal)
  }

  DeleteGoal(isComplete,index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if (toDelete){
        this.goals.splice(index,1)
      }
      
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
