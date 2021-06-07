export class Task {

  public finish : boolean;
  public id : number | undefined;
  public title : string | undefined;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.finish = false;
  }

}
