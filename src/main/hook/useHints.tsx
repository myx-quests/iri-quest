import {useLocalStorage} from "usehooks-ts";
import {allHintsData} from "../hints/allHintsData";
import {useCallback, useMemo} from "react";



export const useHints = () => {
    const [unlockedHintKeys, dispatch] = useLocalStorage<Array<string>>("unlockers", []);

    const hints = useMemo(() => {
        return allHintsData.filter(it => unlockedHintKeys.indexOf(it.unlocker) >= 0)
    }, [unlockedHintKeys])


    const canUnlockHint = useCallback((unlocker: string) => {
        const unlockIndex = allHintsData.findIndex(hint => hint.unlocker === unlocker);
        return checkHintByKeyExists(unlocker) && hints.length === unlockIndex
    }, [hints])

    const checkHintByKeyExists = useCallback((unlocker: string) => {
        return allHintsData.some(it => it.unlocker === unlocker)
    }, [])

    const unlockHint = useCallback((unlocker: string) => {
        if (!canUnlockHint(unlocker)) throw new Error("Trying to unlock not sequenced hint");
        dispatch([...unlockedHintKeys, unlocker])
    }, [canUnlockHint, unlockedHintKeys]);

    const isAlreadyUnlocked = (unlocker: string) => {
        return hints.some(it => it.unlocker === unlocker);
    }

    return {hints, canUnlockHint, unlockHint, checkHintByKeyExists, isAlreadyUnlocked}
}