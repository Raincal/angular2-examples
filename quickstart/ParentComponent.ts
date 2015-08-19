import {Component, View, bootstrap} from 'angular2/angular2';

/**
* @ChildComponent
*/
@Component({
    selector: 'child '
})
@View({
    template: `
        <p>{{ message }}</p>
    `
})

class ChildComponent {
    message: string;

    constructor(){
        this.message = "This is the child";
    }
}

/**
* @ParentComponent
*/
@Component({
    selector: 'parent'
})

@View({
    template: `
        <h1>{{ message }}</h1>
        <child></child>
    `,
directives: [ChildComponent]
})

class ParentComponent {
    message: string;
    constructor() {
        this.message = "This is the parent";
    }
}

bootstrap(ParentComponent);