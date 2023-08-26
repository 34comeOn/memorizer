export const MIN_LENGTH_NAME = 2;
export const MIN_LENGTH_PASSWORD = 6;

export const MAX_LENGTH_PASSWORD = 20;
export const MAX_LENGTH_TITLE = 50;
export const MAX_ANSWER_LENGTH = 1500;


export const NAME_REGEX = /^[A-Za-zA-Яа-яЁё,\s.'-]+$/;
export const TITLE_REGEX = /^[0-9A-Za-zA-Яа-яЁё,.\s'@#$!?%^&*-]+$/;
export const TEXT_AREA_REGEX = /^[0-9A-Za-zA-Яа-яЁё,.\s!"'<>/=@#;:)($%^&*-]+$/;
export const PASSWORD_REGEX = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!-@#$%^&*]{6,}/g;
export const PASSWORD_PROHIBITED_REGEX = /^[0-9A-Za-zA,!-@#$%^&*]+$/;


export const MAX_LENGTH_TITLE_WARNING = 'Название должно быть не длиннее 50 символов';

export const FIELD_REQUIRED_WARNING = 'Обязательное поле';

export const EMAIL_INVALID_WARNING = 'Введите валидный e-mail';

export const MAX_LENGTH_ANSWER_WARNING = 'Текст должен быть не длиннее 1500 символов';
export const MAX_LENGTH_WARNING = 'Превышено максимальное количество символов';
export const MIN_LENGTH_NAME_WARNING = 'Недостаточно символов';

export const TITLE_REGEX_WARNING = "Можно использовать только буквы, цифры и знаки ,.@#!$%^&*'-";
export const TEXT_AREA_REGEX_WARNING = "Можно использовать только буквы, цифры и знаки ,.@<>=/#!$;:)(%^&*'-";
export const NAME_REGEX_WARNING = 'Имя может состоять только из букв';

export const PASSWORD_MIN_LENGTH_WARNING = 'Пароль должен быть не короче 6 символов';
export const PASSWORD_MAX_LENGTH_WARNING = 'Пароль должен быть не длиннее 20 символов';
export const PASSWORD_MATCH_WARNING = 'Пароли не совпадают';
export const PASSWORD_PROHIBITED_SYMBOLS_WARNING = 'Содержит недопустимые символы';
export const PASSWORD_WRONG_SYMBOLS_WARNING =
  'Пароль должен содержать минимум одну латинскую строчную букву, одну латинскую заглавную букву, одну цифру и один специальный символ (@#$%^&*).';
export const LOGIN_OR_PASSWORD_WRONG_WARNING =
'Неверный логин или пароль. Повторите попытку или нажмите на ссылку "Забыли пароль?"';