export const MinimumLength = (limit) => ({
    rule: new RegExp(`(.)(${limit})`),
    message: `최소 ${limit}글자 이상입니다`
});

// . : 모든 문자열(숫자, 한글, 영어, 특수기호, 공백 모두)
// + : 최소 한개 or 여러개
export const isRequired = {
    rule: /\.+/,
    message: '필수 입력 항목입니다',
};
// \s : space 공백
export const CantStartWithSpace = {
    rule: /\s/,
    message: '공백으로 시작할 수 없습니다',
};
// ^문자열 : 특정 문자열로 시작 (시작점)
// \d : 숫자
export const CantStartWithNumber = {
    rule: /^\d/,
    message: '숫자로 시작할 수 없습니다',
};

export const EmailFormat = {
    rule: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
    message: '이메일 형식이 아닙니다',
}

export const SpecialText = {
    rule: /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,
    message: '특수문자를 포함해주셔야 합니다',
}