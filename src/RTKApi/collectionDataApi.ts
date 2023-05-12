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
  })
});