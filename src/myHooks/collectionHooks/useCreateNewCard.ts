import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CREATE_NEW_CARD_ENDPOINT, RADIO_BUTTON_NAME } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReducer";
import { getCurrentCollectionSelector} from "../../store/reducers/userCollectionsReducer";
import { checkTitleExclusivity, setCategoryInCardObj, TcollectionItemData, TcollectionTag } from "../../utils/utils";
import { UseCurrentCollectionResponse } from "./useResponses/useCurrentCollectionResponse";

export interface InewCardForm {
    cardTitle: string, 
    cardAnswer: string, 
    collectionItemCategory: string,
    collectionItemColor: string, 
    cardSelectInput: string,
    cardTags: string | TcollectionTag[],
    categoryRadioButtons: string,
}

export const useCreateNewCard = (onChangeLoadingStatus: (value: boolean)=> void) => {
    const dispatch = useAppDispatch();
    const currentUserId = useAppSelector(getUserIdSelector);
    const currentCollectionCategories = useAppSelector(getCurrentCollectionSelector).collectionСategories;
    const currentCollectionId = useAppSelector(getCurrentCollectionSelector)._id || '';
    const [getCurrentCollectionAfterCreatingNewCardTriger] = collectionDataAPI.usePostNewCardMutation();

    return (values: InewCardForm) => {
        const newCard: TcollectionItemData = {
            collectionItemTitle: values.cardTitle,
            collectionItemAnswer: values.cardAnswer,
            collectionItemRepeatedTimeStamp: 1671420000000,
            collectionItemTimesBeenRepeated: 0,
            collectionItemCategory: '',
            collectionItemColor: '',
            collectionItemTags: values.cardTags,
        };

        setCategoryInCardObj(newCard, values, currentCollectionCategories);
        if (values.categoryRadioButtons === RADIO_BUTTON_NAME.SET_CATEGORY && !checkTitleExclusivity(values, currentCollectionCategories)) {
            return
        };

        const newCardObj = {
            userId: currentUserId,
            collectionId: currentCollectionId,
            creatingNewCategory: (values.categoryRadioButtons === RADIO_BUTTON_NAME.SET_CATEGORY),
            newCard: newCard,
        }

        onChangeLoadingStatus(true)

        getCurrentCollectionAfterCreatingNewCardTriger({path:CREATE_NEW_CARD_ENDPOINT, newCardObj: newCardObj})
        .unwrap()
        .then(
          (currentCollection) => {
            onChangeLoadingStatus(false)
            UseCurrentCollectionResponse(currentCollection, dispatch);
          },
          () => {
            alert('something went wrong NEW CARD')
          }
        );
    }
}