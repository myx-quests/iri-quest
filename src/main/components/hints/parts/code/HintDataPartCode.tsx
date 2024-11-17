import {FC, KeyboardEvent, useState} from "react";
import {HintCodeData, HintDataDescription} from "../../../../hint";
import {InputText} from "primereact/inputtext";
import {useNavigate} from "react-router";
import {allHintsData} from "../../../../hints/allHintsData";
import {PinPad} from "./PinPad";

interface HintDataPartCodeProps {
    currentHintIndex: number;
    codeData: HintCodeData
}

export const HintDataPartCode: FC<HintDataPartCodeProps> = ({codeData, currentHintIndex}) => {
    const [text, setText] = useState("");
    const [error, setError] = useState<string|null>(null);
    const navigate = useNavigate();

    const onChangeInput = (text: string) => {
        setError(null);
        setText(text);
    }

    const onEnterCode = () => {
        if (codeData.answer.toLowerCase() !== text.toLowerCase()) {
            setError("Bad code");
            return;
        }
        const nextUnlocker = allHintsData[currentHintIndex+1].unlocker;
        if (!nextUnlocker) {
            setError("You can't unlock this hint right now")
            return;
        }
        setError(null);
        navigate(`/?unlocker=${nextUnlocker}`);
    }


    const onKeyDownEnter = (event: KeyboardEvent<any>) => {
        if (event.key !== "Enter") return;
        onEnterCode();
    }

    return (
        <div className="text-xl mt-8">
            <div className="block text-xl" style={{color: "var(--red-500)"}}>
                <span>{error}</span>
            </div>
            {!codeData.inputType || codeData.inputType === "text" && (
                <InputText
                    className="w-full"
                    placeholder="Enter code"
                    value={text}
                    onChange={(e) => onChangeInput(e.target.value)}
                    onKeyDown={onKeyDownEnter}
                />
            )}
            {codeData.inputType === "pin" && (
                <PinPad value={text} onChange={onChangeInput} onEnter={onEnterCode} placeholder={"ENTER_CODE"}/>
            )}
            {/*Toto pinpad*/}
        </div>
    )
}
