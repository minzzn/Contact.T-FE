import { useEffect, useState } from "react"

/**
 * 
 * @param { Array } props 
 * @returns Object
 */
export default function useInput({ constraintsArray }) {
    [value, setValue] = useState("");
    [constraints, setConstraints] = useState([...constraintsArray]);
    [errorMessages, setErrorMessages] = useState([]);

    useEffect(() => {
        const updatedConstraints = constraints.filter((constraint) => constraint.rule.test(value) !== true);
        setErrorMessages(updatedConstraints.reduce((accumlated, constraint)=> accumlated.push(constraint.message), []))
    }, [value]);

    return [
        value,
        setValue,
        errorMessages
    ]
}