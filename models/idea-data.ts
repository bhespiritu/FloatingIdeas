
export class IdeaData {
  static nextId = 0;
  private _id: string;
  public header = "Task";

  constructor(taskId?: string) {
    this._id = taskId || "generated-" + (IdeaData.nextId++).toString();
  }


  public get id() {
    return this._id;
  }

}

