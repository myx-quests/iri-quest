import {FC} from "react";

interface HintDataPartImageProps {
    url: string;
}

export const HintDataPartImage: FC<HintDataPartImageProps> = ({url}) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <img className="object-contain" src={url}/>
        </a>
    )
}