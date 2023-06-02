import { maximiseTimesBeenRepeated, Tcard, Tuser } from '../utils/utils';
import { rootAPI } from './rootApi';

export type TsignInObject = {
  email: string, 
  password: string, 
}
  
export const collectionDataAPI = rootAPI.injectEndpoints({
  endpoints: (build) => ({
    getCollectionData: build.mutation<Tcard[], string>({
      query(path) {
        return {
          url: `${path}`
        };
      }
    }),
    signInUser: build.mutation<Tuser, {path: string, signInObject: TsignInObject}>({
      query(args) {
        return {
          url: `${args.path}`,
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(args.signInObject)
        };
      }
    }),
    postNewUser: build.mutation<Tuser, {path: string, putObj:Tuser}>({
      query(args) {
        return {
          url: `${args.path}`,
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(args.putObj)
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
              timesBeenRepeated: maximiseTimesBeenRepeated(args.putObj.timesBeenRepeated),
              repeatedTimeStamp: Date.now(),
          })
        };
      }
    }),
  })
});