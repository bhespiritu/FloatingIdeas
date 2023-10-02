
export interface ModelStorage{
  getModel(modelName : string, modelId: string) : Promise<any>;

  requestRandomModel(modelType: string): Promise<any>;
}

export class FileModelStorage implements ModelStorage
{
  getModel(modelName: string, modelId: string): Promise<any> {
    return Promise.resolve(undefined);
  }

  requestRandomModel(modelType: string): Promise<string> {
    return Promise.resolve("RANDOM PLACEHOLDER");
  }

}
