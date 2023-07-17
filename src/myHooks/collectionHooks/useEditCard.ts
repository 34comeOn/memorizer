import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { EDIT_CARD_ENDPOINT, RADIO_BUTTON_NAME } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReducer";
import { getCurrentCollectionSelector } from "../../store/reducers/userCollectionsReducer";
import { checkTitleExclusivity, setCategoryInCardObj, TcollectionItemData, TcollectionTag } from "../../utils/utils";
import { UseCurrentCollectionResponse } from "./useResponses/useCurrentCollectionResponse";

export interface IeditCardForm {
    cardTitle: string, 
    cardAnswer: string, 
    collectionItemCategory: string,
    collectionItemColor: string, 
    cardSelectInput: string,
    cardTags: string | TcollectionTag[],
    categoryRadioButtons: string,
}

export const useEditCard = (_id: string) => {
    const dispatch = useAppDispatch();
    const [getUpdatedCollectionAfterEditingCardTriger] = collectionDataAPI.usePutEditedCardMutation();
    const currentUserId = useAppSelector(getUserIdSelector);
    const currentCollectionId = (useAppSelector(getCurrentCollectionSelector)._id || '');
    const currentCollectionCategories = useAppSelector(getCurrentCollectionSelector).collectionСategories;
    
    return (values: IeditCardForm) => {
        const editedCard: TcollectionItemData = {
            collectionItemTitle: values.cardTitle,
            collectionItemAnswer: values.cardAnswer,
            collectionItemRepeatedTimeStamp: 1671420000000,
            collectionItemTimesBeenRepeated: 0,
            collectionItemCategory: '',
            collectionItemColor: '',
            collectionItemTags: values.cardTags,
        };

        setCategoryInCardObj(editedCard, values, currentCollectionCategories);
        if (values.categoryRadioButtons === RADIO_BUTTON_NAME.SET_CATEGORY && !checkTitleExclusivity(values, currentCollectionCategories)) {
            return
        };

        const editedCardObj = {
            userId: currentUserId,
            collectionId: currentCollectionId,
            cardId: _id,
            creatingNewCategory: (values.categoryRadioButtons === RADIO_BUTTON_NAME.SET_CATEGORY),
            editedCard: editedCard,
        }

        getUpdatedCollectionAfterEditingCardTriger({path: EDIT_CARD_ENDPOINT, editedCardObj: editedCardObj})
        .unwrap()
        .then(
          (currentCollection) => {
            UseCurrentCollectionResponse(currentCollection, dispatch);
          },
          () => {
            alert('something went wrong NEW COLLECTION')
          }
        );
    }
}