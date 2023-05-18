import { Tcard } from '../utils/utils';
import { rootAPI } from './rootApi';
  
export const collectionDataAPI = rootAPI.injectEndpoints({
  endpoints: (build) => ({
    getCollectionData: build.mutation<Tcard[], string>({
      query(path) {
        return {
          url: `${path}`
        };
      }
    }),
    putRepeatedCollectionItem: build.mutation<Tcard[], {path: string, putObj:Tcard}>({
      query(args) {
        return {
          url: `${args.path}`,
          method: 'PUT',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify({
              id: args.putObj['_id'],
              timesBeenRepeated: args.putObj.timesBeenRepeated + 1,
              repeatedTimeStamp: Date.now(),
          })
        };
      }
    })
  })
});