import {CSSProperties, FC, useMemo} from "react";
import tc from "tinycolor2";
import "./balloon.css"

interface BalloonProps {
    size?: number; // 15,
    label?: string;
    color?: string; // #e4167c
    animationId?: number;
    animationDelay?: number
    onClick?: () => void;
}

function hashCode(str: string) {
    let hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

export const randomPropsBasedOnLabel = (label: string) => {
    const hash = hashCode(label+label+label);
    const h = (hash*hash*hash)%360
    const s = (90)+((hash*hash)%10)
    const l = (50)+hash*hash%20
    const color = `hsl (${h}, ${s}%, ${l}%)`
    const size = 12 + (hash*hash/65%3);
    const animationId = (hash*hash)%7+1;

    const animationDelay = -(hash*hash*hash%2071);
    const marginLeft = `${(hash*hash+hash)%57}%`;

    return {color, size, animationId, animationDelay, marginLeft };
}

export const Balloon: FC<BalloonProps> = (props) => {
    const generatedProps = randomPropsBasedOnLabel(props.label);
    const {
        size = 15,
        label = "X",
        color = "#e4167c",
        animationId = 1,
        animationDelay = 0,
        marginLeft,
        onClick,
    } = {...generatedProps, ...props};

    // const cssStyles = useMemo(() => {
    //     const alphaColor
    // }, [])
    const cssStyles = {
        "--balloon-color": tc(color).setAlpha(0.95).toString(),
        "--balloon-color-darken": tc(color).darken(20).setAlpha(0.95).toString(),
        "--balloon-color-pimp": tc(color).darken(10).toString(),
        "--balloon-size": size,
        "--balloon-animation-i": `balloon-${animationId}`,
        "--balloon-animation-delay": `${animationDelay}ms`,
        "marginLeft": marginLeft,
    } as CSSProperties;

    return (
        <div style={cssStyles} className="balloon-container" onClick={onClick}>
            <div className="balloon">
                <span>{label}</span>
            </div>
        </div>
    )
}