import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

/**
* @TodoList
*/
@Component({
    selector: 'todo-list'
})

@View({
    template: `
        <ul>
            <li *ng-for="#todo of todos">
                {{ todo }}
            </li>
        </ul>

        <input #todotext (keyup)="doneTyping($event)">
        <button (click)="addTodo(todotext.value)">Add Todo</button>
    `,
    directives: [NgFor, NgIf]
})

class TodoList{
    todos: Array<string>;
    
    constructor(){
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
    }
    
    addTodo(todo: string){
        if(todo != ''){
            this.todos.push(todo);
        }
    }
    
    doneTyping($event){
        if($event.which === 13){
            if($event.target.value != ''){
                this.addTodo($event.target.value);
                $event.target.value = null;
            }
        }
    }
}

bootstrap(TodoList);