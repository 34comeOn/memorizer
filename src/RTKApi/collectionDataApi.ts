import { maximiseTimesBeenRepeated, Tcard, Tuser, TuserCollectionsData } from '../utils/utils';
import { rootAPI } from './rootApi';

export type TsignInObject = {
  email: string, 
  password: string, 
}

export type TnewCollectionPostObject = {
  id: string, 
  newUserCollectionsData: TuserCollectionsData[], 
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
    postNewCollection: build.mutation<TuserCollectionsData[], {path: string, newCollectionObj:TnewCollectionPostObject}>({
      query(args) {
        return {
          url: `${args.path}`,
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(args.newCollectionObj)
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