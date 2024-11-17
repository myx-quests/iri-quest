import {FC} from "react";
import {HintDataDescription} from "../../../hint";

interface HintDataPartDescriptionProps {
    description: Array<HintDataDescription>
}

export const HintDataPartDescription: FC<HintDataPartDescriptionProps> = ({description}) => {
    return (
        <div className="text-xl mb-8 mt-8">
            {description.map((it, i) => {
                if (typeof it === "string") return <p key={i}>{it}</p>
                else return (
                    <p>
                        <a href={it.url} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                            {it.text || it.url}
                        </a>
                    </p>
                )
            })}
        </div>
    )
}