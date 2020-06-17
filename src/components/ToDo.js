export class ToDo{
    constructor(body, category, completed = false){
      this.body = body; // string
      this.category = category; // string
      this.completed = completed; // boolean
    }
    // TODO add getters and setters for the class attributes
    getBody(){
      return this.body;
    }

    setBody(body){
      this.body = body;
    }

    getCategory(){
      return this.category;
    }

    setCategory(category){
      this.category = category;
    }

    getCompleted(){
      return this.completed;
    }

    setCompleted(completed){
      this.completed = completed;
    }

}
