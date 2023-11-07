import { CantNumber, CantWhiteSpace, EmailFormat, MinimumLengthLimit } from "./contraint";

export const textValidation = (value) => {
    const messages = [];

    if(!MinimumLengthLimit(2).rule.test(value)) {
        messages.push(MinimumLengthLimit(2).message);
    }
    if(!CantNumber.rule.test(value)) {
        messages.push(CantNumber.message);
    }
    if(!CantWhiteSpace.rule.test(value)) {
        messages.push(CantWhiteSpace.message);
    }

    return messages.length > 0 ? messages[0] : null
}

export const emailValidation = (value) => {
    const message = '';

    if(!EmailFormat.rule.test(value)) {
        message = EmailFormat.message;
    }

    return message !== '' ? message : null
}

export const passwordValidation = (value) => {
    const messages = [];

    if(!MinimumLengthLimit(8).rule.test(value)) {
        messages.push(MinimumLengthLimit(8).message);
    }
    if(!CantWhiteSpace.rule.test(value)) {
        messages.push(CantWhiteSpace.message);
    }
    
    return messages.length > 0 ? messages[0] : null
}