
export interface ModelStorage{
  requestModel(modelName : string, modelId: string) : Promise<any>;
}

export class FileModelStorage implements ModelStorage
{
  requestModel(modelName: string, modelId: string): Promise<any> {
    return Promise.resolve(undefined);
  }

}
