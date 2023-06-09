import { maximiseTimesBeenRepeated, TcollectionItemData, Tuser, TuserCollectionsData } from '../utils/utils';
import { rootAPI } from './rootApi';

export type TsignInObject = {
  email: string, 
  password: string, 
}

export type TnewCollectionPostObject = {
  id: string, 
  newUserCollection: TuserCollectionsData, 
}
  
export const collectionDataAPI = rootAPI.injectEndpoints({
  endpoints: (build) => ({
    getCollectionData: build.mutation<TcollectionItemData[], string>({
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
    deleteCollection: build.mutation<TuserCollectionsData[], string>({
      query(path) {
        return {
          url: `${path}`,
          method: 'DELETE',
        };
      }
    }),
    getCurrentCollectionToTrain: build.mutation<TuserCollectionsData, string>({
      query(path) {
        return {
          url: `${path}`,
          method: 'GET',
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
    putRepeatedCollectionItem: build.mutation<TcollectionItemData[], {path: string, putObj:TcollectionItemData}>({
      query(args) {
        return {
          url: `${args.path}`,
          method: 'PUT',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify({
              id: args.putObj._id,
              timesBeenRepeated: maximiseTimesBeenRepeated(args.putObj.collectionItemTimesBeenRepeated),
              repeatedTimeStamp: Date.now(),
          })
        };
      }
    }),
  })
});