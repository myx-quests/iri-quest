

export interface HintCodeData {
    inputType?: "text" | "pin";
    answer: string
}

export type HintDataDescription = string | {
    url: string
    text?: string;
}

export interface HintData {
    image?: string;
    customView?: string;
    description?: Array<HintDataDescription>;
    code?: HintCodeData
}

export interface Hint {
    unlocker: string;

    dataList: [HintData] & Array<HintData>
}
