export const STOCK_COLLECTION_ITEM = {
  '_id': '1',   
  repeatedTimeStamp: 1671420000000,
  timesBeenRepeated: 0,
  title: 'Test',
  answer: 'Answer',
}

export const STOCK_COLLECTION_DATA = [
  STOCK_COLLECTION_ITEM
]

export const STOCK_COLLECTION = {
  '_id': '22',
  title: 'Test collection',
  isResentCollection: true,
  data: STOCK_COLLECTION_DATA,
}

export const STOCK_USER = {
  email: 'testMemUser@gmail.com',
  password: '!testMemUserPass333',
  name: 'Stock User',
  currentCollection: '',
  userCollectionsData: [], 
}

type TnavigationItem = {
  title: string,
  path: string,
}

export const NAVIGATION_ITEMS: TnavigationItem[] = [
  {
      title: 'Sign in',
      path: 'sign_in'
  },
  {
      title: 'About',
      path: ''
  },
  {
    title: 'Help',
    path: ''
  },
  {
    title: 'Contacts',
    path: ''
  },
];