export const MIN_LENGTH_NAME = 2;
export const MIN_LENGTH_PASSWORD = 6;
export const MAX_LENGTH_PASSWORD = 20;
export const MAX_COLLECTION_TITLE_LENGTH = 50;
export const NAME_REGEX = /^[A-Za-zA-Яа-яЁё,.'-]+$/;
export const TITLE_REGEX = /^[0-9A-Za-zA-Яа-яЁё,.'@#$%^&*-]+$/;
// export const ANSWER_REGEX = /^[A-Z0-9a-zA-Яа-яЁё,.'-]+$/;
export const PASSWORD_REGEX = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

export const FIELD_REQUIRED_WARNING = 'Обязательное поле';
export const EMAIL_INVALID_WARNING = 'Введите валидный e-mail';

export const NAME_MIN_LENGTH_WARNING = 'Недостаточно символов';
export const TITLE_REGEX_WARNING = "Можно использовать только буквы, цифры и знаки ,.@#$%^&*'-";
export const NAME_REGEX_WARNING = 'Имя может состоять только из букв';
export const LASTNAME_REGEX_WARNING = 'Фамилия может состоять только из букв';
export const MIDDLENAME_REGEX_WARNING = 'Отчество может состоять только из букв';

export const PASSWORD_MIN_LENGTH_WARNING = 'Пароль должен быть не короче 6 символов';
export const PASSWORD_MAX_LENGTH_WARNING = 'Пароль должен быть не длиннее 20 символов';
export const PASSWORD_MATCH_WARNING = 'Пароли не совпадают';
export const PASSWORD_WRONG_SYMBOLS_WARNING =
  'Пароль должен содержать минимум одну латинскую строчную букву, одну латинскую заглавную букву, одну цифру и один специальный символ (@#$%^&*).';
export const LOGIN_OR_PASSWORD_WRONG_WARNING =
'Неверный логин или пароль. Повторите попытку или нажмите на ссылку "Забыли пароль?"';