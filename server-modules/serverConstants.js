exports.UNPUNISHABLE_REPEAT_TIMES = 3;
exports.MAX_PUNISHMENT_FOR_LATE_PRACTICE = 2;

exports.NAME_REGEX = /^[A-Za-zA-Яа-яЁё,\s.'-]+$/;
exports.TITLE_REGEX = /^[0-9A-Za-zA-Яа-яЁё,.\s'@#$!%^&*-]+$/;
exports.TEXT_AREA_REGEX = /^[0-9A-Za-zA-Яа-яЁё,.\s!"'<>/=@#;:)($%^&*-]+$/;
exports.SERVER_PASSWORD_REGEX = /^[0-9A-Za-zA,!@#$%^&*]+$/;

exports.REPEAT_TIMES_CONVERT_TO_POINTS = {
    0: 0,
    1: 1,
    2: 4,
    3: 8,
    4: 12,
    5: 24,
    6: 72,
}

// exports.PUNISHMENT_REPEAT_TIMES_CONVERT_TO_POINTS = {
//     0: 1,
//     1: 2,
//     2: 8,
//     3: 16,
//     4: 30,
//     5: 60,
//     6: 140,
// }
exports.PUNISHMENT_REPEAT_TIMES_CONVERT_TO_POINTS = {
    0: 0,
    1: 0,
    2: 2,
    3: 3,
    4: 3,
    5: 11,
    6: 46,
}
