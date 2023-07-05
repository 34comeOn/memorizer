import { 
    // useAppDispatch, 
    useAppSelector } from "../../app/hooks";
import { CREATE_NEW_CARD_ENDPOINT, RADIO_BUTTON_NAME } from "../../constants/stringConstants";
import { collectionDataAPI } from "../../RTKApi/collectionDataApi";
import { 
    // getUserEmailSelector,
     getUserIdSelector } from "../../store/reducers/accountReduser";
import { getCurrentCollectionSelector, setUserBasicCollectionsInfo } from "../../store/reducers/userCollectionsReduser";
import { TcollectionItemData, TcollectionTag } from "../../utils/utils";

export interface InewCollectionItemForm {
    cardTitle: string, 
    cardAnswer: string, 
    collectionItemCategory: string,
    collectionItemColor: string, 

    cardSelectInput: string,
    cardTags: string | TcollectionTag[],
    categoryRadioButtons: string,
}


export const useCreateNewItem = () => {
    const currentCollectionCategories = useAppSelector(getCurrentCollectionSelector).collectionСategories;
    const currentCollectionId = useAppSelector(getCurrentCollectionSelector)._id || '';
    console.log(currentCollectionCategories)
    // const dispatch = useAppDispatch();
    const [getCurrentCollectionAfterCreatingNewCardTriger] = collectionDataAPI.usePostNewCardMutation();
    const currentUserId = useAppSelector(getUserIdSelector);
    // const currentUserEmail = useAppSelector(getUserEmailSelector);

    return (values: InewCollectionItemForm) => {
        console.log(values)

        let currentCategory = '';
        let currentCategoryColor = '';

        if (values.categoryRadioButtons === RADIO_BUTTON_NAME.SET_CATEGORY) {
            currentCategory = values.collectionItemCategory;
            currentCategoryColor = values.collectionItemColor;
        } 
        else if (values.categoryRadioButtons === RADIO_BUTTON_NAME.CHOOSE_CATEGORY) {
           const currentChoosenCategory = currentCollectionCategories?.find(item => item.value === values.cardSelectInput);

            currentCategory = values.cardSelectInput;
            currentCategoryColor = currentChoosenCategory?.collectionCategoryColor || '';
        }

        const newCard: TcollectionItemData = {
            collectionItemTitle: values.cardTitle,
            collectionItemAnswer: values.cardAnswer,
            collectionItemRepeatedTimeStamp: 1671420000000,
            collectionItemTimesBeenRepeated: 0,
            collectionItemCategory: currentCategory,
            collectionItemColor: currentCategoryColor,
            collectionItemTags: values.cardTags,
        };

        const newCardObj = {
            UserId: currentUserId,
            CollectionId: currentCollectionId,
            newCard: newCard,
        }

        getCurrentCollectionAfterCreatingNewCardTriger({path:CREATE_NEW_CARD_ENDPOINT, newCardObj: newCardObj})
        .unwrap()
        .then(
          (currentUpdatedCollection) => {
            console.log(currentUpdatedCollection)
            // dispatch(setUserBasicCollectionsInfo(cutBasicUserCollectionsInfo(userCollections)));
            // dispatch(hideModalWindow());
          },
          (error) => {
            alert('something went wrong NEW COLLECTION')
            // error.status === 403? alert('E-mail or password does not match!') : alert('Ops! something went wrong')
          }
        );
    }
}