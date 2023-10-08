import {IdeaData} from "../models/idea-data";

export interface ModelStorage {
  getModel(modelName: string, modelId: string): Promise<any>;

  requestRandomModel(modelType: string): Promise<any>;
}

export class FileModelStorage implements ModelStorage {
  getModel(modelName: string, modelId: string): Promise<any> {
    let idea = new IdeaData(modelId);
    idea.header = "FOO BAR"
    return Promise.resolve(idea);
  }

  requestRandomModel(modelType: string): Promise<string> {
    return Promise.resolve('RANDOM PLACEHOLDER');
  }
}
