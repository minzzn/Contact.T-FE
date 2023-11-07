export const CantWhiteSpace = {
    // \s : 공백
    rule: /\s/,
    message: '공백 포함 불가',
}

export const CantNumber = {
    // \d : 숫자(digit)
    rule: /\d/,
    message: '숫자 포함 불가',
}

export const MinimumLengthLimit = (limit) => ({
    rule: new RegExp(`(.)(${limit})`),
    message: `최소 ${limit}글자 이상`
})

export const EmailFormat = {
    rule: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    message: '제대로 된 이메일 형식 필요'
}