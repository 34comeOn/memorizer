exports.UNPUNISHABLE_REPEAT_TIMES = 3;
exports.MAX_PUNISHMENT_FOR_LATE_PRACTICE = 2;

exports.NAME_REGEX = /^[A-Za-zA-Яа-яЁё,\s.'-]+$/;
exports.TITLE_REGEX = /^[0-9A-Za-zA-Яа-яЁё,.\s'@#?$!%^&*-]+$/;
exports.TEXT_AREA_REGEX = /^[0-9A-Za-zA-Яа-яЁё,.\s!"'<>/=@#;:)($%^&*-]+$/;
exports.SERVER_PASSWORD_REGEX = /^[0-9A-Za-zA,!-@#$%^&*]+$/;

exports.STOCK_DATA_USER_ID = '64e0dee9748fbea4c268073f';

const PERIODS_OF_PRACRICE = {
    NO_PRACTICE: 0,
    FIRST_PRACRICE: 1, 
    SECOND_PRACRICE: 4, 
    THIRD_PRACRICE: 8, 
    FOURTH_PRACRICE: 12, 
    FIFTH_PRACRICE: 24, 
    SIXTH_PRACRICE: 72, 
  }
  
exports.REPEAT_TIMES_CONVERT_TO_POINTS = {
    0: PERIODS_OF_PRACRICE.NO_PRACTICE,
    1: PERIODS_OF_PRACRICE.FIRST_PRACRICE,
    2: PERIODS_OF_PRACRICE.SECOND_PRACRICE,
    3: PERIODS_OF_PRACRICE.THIRD_PRACRICE,
    4: PERIODS_OF_PRACRICE.FOURTH_PRACRICE,
    5: PERIODS_OF_PRACRICE.FIFTH_PRACRICE,
    6: PERIODS_OF_PRACRICE.SIXTH_PRACRICE,
}
  
exports.PUNISHMENT_POINTS_CONVERTED_FROM_REPEAT_TIMES = {
    0: PERIODS_OF_PRACRICE.NO_PRACTICE,
    1: PERIODS_OF_PRACRICE.FIRST_PRACRICE,
    2: PERIODS_OF_PRACRICE.FIRST_PRACRICE + PERIODS_OF_PRACRICE.SECOND_PRACRICE,
    3: PERIODS_OF_PRACRICE.FIRST_PRACRICE + PERIODS_OF_PRACRICE.SECOND_PRACRICE + PERIODS_OF_PRACRICE.THIRD_PRACRICE,
    4: PERIODS_OF_PRACRICE.FIRST_PRACRICE + PERIODS_OF_PRACRICE.SECOND_PRACRICE + PERIODS_OF_PRACRICE.THIRD_PRACRICE + PERIODS_OF_PRACRICE.FOURTH_PRACRICE,
    5: PERIODS_OF_PRACRICE.FIRST_PRACRICE + PERIODS_OF_PRACRICE.SECOND_PRACRICE + PERIODS_OF_PRACRICE.THIRD_PRACRICE + PERIODS_OF_PRACRICE.FOURTH_PRACRICE + PERIODS_OF_PRACRICE.FIFTH_PRACRICE,
    6: PERIODS_OF_PRACRICE.FIRST_PRACRICE + PERIODS_OF_PRACRICE.SECOND_PRACRICE + PERIODS_OF_PRACRICE.THIRD_PRACRICE + PERIODS_OF_PRACRICE.FOURTH_PRACRICE + PERIODS_OF_PRACRICE.FIFTH_PRACRICE + PERIODS_OF_PRACRICE.SIXTH_PRACRICE,
}