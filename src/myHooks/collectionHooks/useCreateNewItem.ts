import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { STOCK_COLLECTION } from "../../constants/stockConstants";
import { CREATE_NEW_CARD_ENDPOINT, RADIO_BUTTON_NAME } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { getUserIdSelector } from "../../store/reducers/accountReduser";
import { setFiltersList } from "../../store/reducers/collectionFiltersReduser";
import { setRepeatGroupsReduser } from "../../store/reducers/collectionGroupsReduser";
import { hideModalWindow } from "../../store/reducers/modalWindowReduser";
import { getCurrentCollectionSelector, setCurrentCollection } from "../../store/reducers/userCollectionsReduser";
import { checkTitleExclusivity, setCategoryInCollectionDataObj, spreadCollectionData, TcollectionItemData, TcollectionTag } from "../../utils/utils";

export interface InewCardForm {
    cardTitle: string, 
    cardAnswer: string, 
    collectionItemCategory: string,
    collectionItemColor: string, 
    cardSelectInput: string,
    cardTags: string | TcollectionTag[],
    categoryRadioButtons: string,
}

export const useCreateNewItem = () => {
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

        setCategoryInCollectionDataObj(newCard, values, currentCollectionCategories);
        if (!checkTitleExclusivity(values, currentCollectionCategories)) {
            return
        };

        const newCardObj = {
            userId: currentUserId,
            collectionId: currentCollectionId,
            creatingNewCategory: (values.categoryRadioButtons === RADIO_BUTTON_NAME.SET_CATEGORY),
            newCard: newCard,
        }

        getCurrentCollectionAfterCreatingNewCardTriger({path:CREATE_NEW_CARD_ENDPOINT, newCardObj: newCardObj})
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