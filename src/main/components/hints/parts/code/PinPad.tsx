import {FC} from "react";
import "./PinPad.css"
import {Button} from "primereact/button";


interface PinPadProps {
    value: string;
    onChange: (value: string) => void;
    onEnter: () => void;
    placeholder: string;
}

const pinpadButtons = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "*", "0", "#"
]

export const PinPad: FC<PinPadProps> = ({value, onChange, onEnter, placeholder}) => {

    const onPressPinKey = (key: string) => {
        onChange(value + key);
    }

    const onPressDelete = () => {
        onChange(value.substring(0, value.length-1));
    }

    return (
        <div className={"pinpad"}>
            <div className={`pinpad-row${!value && placeholder ? " placeholder" : ""}`}>
                {value || placeholder}
            </div>
            <div className="pinpad-buttons">
                {pinpadButtons.map(it => (
                    <Button
                        className="pinpad-button pinpad-button-key"
                        onClick={() => onPressPinKey(it)}
                    >
                        {it}
                    </Button>
                ))}
            </div>
            <div className="pinpad-additional-buttons">
                <Button
                    className="pinpad-button"
                    onClick={onPressDelete}
                >
                    Delete
                </Button>
                <Button
                    className="pinpad-button"
                    onClick={onEnter}
                >
                    Enter
                </Button>
            </div>
        </div>
    )
}