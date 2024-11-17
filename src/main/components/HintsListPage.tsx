import {FC, useCallback, useEffect} from "react";
import {useHints} from "../hook/useHints";
import {useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";
import {Balloon} from "./balloon/Balloon";
import {allHintsData} from "../hints/allHintsData";

export const HintsListPage: FC = () => {

    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();
    const {hints, unlockHint, canUnlockHint, isAlreadyUnlocked} = useHints();

    const onClickHint = useCallback((index: number) => {
        navigate(`/hint/${index}`)
    }, [hints]);

    useEffect(() => {
        if (!params.has("unlocker")) return;

        const unlocker = params.get("unlocker");
        if (isAlreadyUnlocked(unlocker)) return;

        if (!canUnlockHint(unlocker)) {
            alert("Cant unlock this hint");
        } else {
            unlockHint(unlocker);
        }
    }, [params, setParams, hints]);

    return (
        <>
            <div className="mt-2 pt-[10%] gap-[150px]">
                {hints.map((hint, index) => {
                    const onClick = () => onClickHint(index)

                    return (
                        <>
                            <Balloon key={hint.unlocker} label={`#${index+1}`} onClick={onClick}/>
                        </>
                    )
                })}
                {hints.length === 0 && (
                    <div className="border-[#3e3e3e] border-dashed border-8 aspect-square col-span-2 flex flex-col justify-around items-center">
                        <h1 className="text-2xl">Here will be your hints</h1>
                        <h1 className="text-2xl">Just start scan</h1>
                    </div>
                )}

                {/*<button onClick={() => {*/}
                {/*    localStorage.setItem("unlockers", JSON.stringify(allHintsData.map(it => it.unlocker)))*/}
                {/*}}>UNCLOCK ALL</button>*/}
            </div>
        </>
    )
}