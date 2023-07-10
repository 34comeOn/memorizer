import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { STOCK_COLLECTION } from "../../constants/stockConstants";
import { EDIT_CARD_ENDPOINT, RADIO_BUTTON_NAME } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReduser";
import { setFiltersList } from "../../store/reducers/collectionFiltersReduser";
import { setRepeatGroupsReduser } from "../../store/reducers/collectionGroupsReduser";
import { hideModalWindow } from "../../store/reducers/modalWindowReduser";
import { getCurrentCollectionSelector, setCurrentCollection } from "../../store/reducers/userCollectionsReduser";
import { checkTitleExclusivity, setCategoryInCardObj, spreadCollectionData, TcollectionItemData, TcollectionTag } from "../../utils/utils";

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
            dispatch(hideModalWindow());

            dispatch(setCurrentCollection(currentCollection));
            const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(currentCollection?.collectionData || STOCK_COLLECTION.collectionData);
            dispatch(setRepeatGroupsReduser(orgonizedGroupsOfCollection)); 
            dispatch(setFiltersList(filtersOfCollection)); 
          },
          () => {
            alert('something went wrong NEW COLLECTION')
          }
        );
    }
}