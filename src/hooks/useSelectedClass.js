import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useSelectedClass = (key, initialValue) => {
    const [selectedClass, setSelectedClass] = useLocalStorage(key, initialValue);

    const toggleSelectedClass = e => {
        e.preventDefault()
        return selectedClass ? setSelectedClass(false) : setSelectedClass(true);
    }

    useEffect(() => {
        if (selectedClass === true) {
            document.body.classList.add("list-item-selected");
        } else {
            document.body.classList.remove("list-item-selected");
        }
    }, [selectedClass]);

    return [selectedClass, setSelectedClass, toggleSelectedClass];
}