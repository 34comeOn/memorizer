import { TeditCollectionData } from '../myHooks/collectionHooks/useEditCollection';
import { TcollectionItemData, TeditCollectionItemData, Tuser, TuserCollectionData } from '../utils/utils';
import { rootAPI } from './rootApi';

export type TsignInObject = {
  email: string, 
  password: string, 
}

export type TnewCollectionPostObject = {
  id: string, 
  newUserCollection: TuserCollectionData, 
}

export type TnewCardPostObject = {
  userId: string, 
  collectionId: string, 
  creatingNewCategory: boolean,
  newCard: TcollectionItemData, 
}

export type TeditCardPutObject = {
  userId: string, 
  collectionId: string, 
  cardId: string, 
  creatingNewCategory: boolean,
  editedCard: TeditCollectionItemData, 
}

export type TrepeatObject = {
  userId: string,
  cardId: string,
  collectionId: string,
  collectionItemTimesBeenRepeated: number,
  collectionItemRepeatedTimeStamp: number,
} 

export const collectionDataAPI = rootAPI.injectEndpoints({
  endpoints: (build) => ({
    refresh: build.mutation<string, string>({
      query(path) {
        return {
          url: `${path}`,
          credentials: 'include'
        };
      }
    }),
    logOut: build.mutation<void, string>({
      query(path) {
        return {
          url: `${path}`,
          credentials: 'include'
        };
      }
    }),
    getStockCollectionData: build.mutation<TuserCollectionData[], string>({
      query(path) {
        return {
          url: `${path}`,
        };
      }
    }),
    signInUser: build.mutation<Tuser, {path: string, signInObject: TsignInObject}>({
      query(args) {
        return {
          url: `${args.path}`,
          credentials: 'include',
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(args.signInObject)
        };
      }
    }),
    postNewCollection: build.mutation<TuserCollectionData[], {path: string, newCollectionObj:TnewCollectionPostObject}>({
      query(args) {
        return {
          url: `${args.path}`,
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(args.newCollectionObj)
        };
      }
    }),
    deleteCollection: build.mutation<TuserCollectionData[], string>({
      query(path) {
        return {
          url: `${path}`,
          method: 'DELETE',
        };
      }
    }),
    getCurrentCollectionToTrain: build.mutation<TuserCollectionData, {path:string, accessToken: string}>({
      query(args) {
        return {
          url: `${args.path}`,
          method: 'GET',
          credentials: 'include',
          headers: {'Authorization': `Bearer ${args.accessToken}`},
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
    postNewCard: build.mutation<TuserCollectionData, {path: string, newCardObj: TnewCardPostObject}>({
      query(args) {
        return {
          url: `${args.path}`,
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(args.newCardObj)
        };
      }
    }),
    deleteCard: build.mutation<TuserCollectionData, string>({
      query(path) {
        return {
          url: `${path}`,
          method: 'DELETE',
        };
      }
    }),
    putRepeatedCollectionItem: build.mutation<TuserCollectionData, {path: string, repeatObj: TrepeatObject}>({
      query(args) {
        return {
          url: `${args.path}`,
          method: 'PUT',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(args.repeatObj)
        };
      }
    }),
    putEditedCollection: build.mutation<TuserCollectionData[], {path: string, editCollectionObj: TeditCollectionData}>({
      query(args) {
        return {
          url: `${args.path}`,
          method: 'PUT',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(args.editCollectionObj)
        };
      }
    }),
    putEditedCard: build.mutation<TuserCollectionData, {path: string, editedCardObj: TeditCardPutObject}>({
      query(args) {
        return {
          url: `${args.path}`,
          method: 'PUT',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify(args.editedCardObj)
        };
      }
    }),
  })
});