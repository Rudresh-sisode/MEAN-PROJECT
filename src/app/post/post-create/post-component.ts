import { Component } from '@angular/core';

@Component({
  selector:'app-post-create',
  templateUrl:'./post-create.component.html'
})
export class PostCreateComponent{

  newPost="";


  onAddPost(postInput:HTMLTextAreaElement){
    console.dir(postInput);
    this.newPost="NO CONTENT";
  }

}
/*
timestamps:
1:11:19/2:35:40
*/
