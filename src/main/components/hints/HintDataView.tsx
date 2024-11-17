import {FC} from "react";
import {Hint, HintData} from "../../hint";
import {HintDataPartImage} from "./parts/HintDataPartImage";
import {HintDataPartDescription} from "./parts/HintDataPartDescription";
import {HintDataPartCode} from "./parts/code/HintDataPartCode";

interface HintDataViewProps {
    data: HintData;

    currentHintIndex: number;
}

export const HintDataView: FC<HintDataViewProps> = ({data, currentHintIndex}) => {

    return (
        <div>
            {data.image && <HintDataPartImage url={data.image}/>}
            {data.description && <HintDataPartDescription description={data.description}/>}
            {data.code && <HintDataPartCode codeData={data.code} currentHintIndex={currentHintIndex}/>}
        </div>
    )
}