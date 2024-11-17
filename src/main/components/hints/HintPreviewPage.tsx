import {FC} from "react";
import {useParams} from "react-router";
import {useHints} from "../../hook/useHints";
import {HintDataView} from "./HintDataView";
import {HintData} from "../../hint";
import {Card} from "primereact/card";

interface HintPreviewProps {
}

export const HintPreviewPage: FC = () => {
    const { id, dataIndex = 0 } = useParams();
    const {hints} = useHints()

    if (id == null || !hints[id]) throw new Error("No hint found with id: "+id);
    const hint = hints[Number(id)];

    const data = hint.dataList[dataIndex] as HintData|undefined;
    console.log(data, hint);
    if (!data) throw new Error("Bad data index: "+dataIndex);


    return (
        <div>
            <Card>
                <HintDataView data={data} currentHintIndex={Number(id)}/>
            </Card>
            {/*  Here may be more-hints buttons  */}
        </div>
    )
}