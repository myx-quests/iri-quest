import {FC, useMemo} from "react";
import {SpeedDial} from "primereact/speeddial";
import {MenuItem, MenuItemCommandEvent} from "primereact/menuitem";
import {useNavigate} from "react-router";


export const QuestSpeedDial: FC = () => {
    const navigate = useNavigate();

    const items = useMemo(() => {
        const items: MenuItem[] = [
            {
                id: "camera",
                icon: "pi pi-camera",
                command(event: MenuItemCommandEvent) {
                    navigate("/dial/scan")
                }
            },

            {
                id: "code",
                icon: "pi pi-code",
                command(event: MenuItemCommandEvent) {
                    navigate("/dial/code")
                }
            },


            {
                id: "additionalHint",
                visible: false,
                icon: "pi pi-question-circle",
                command(event: MenuItemCommandEvent) {
                    navigate("/dial/hint-more")
                }
            }
        ]
        return items;
    }, [])

    return (
        <SpeedDial
            model={items}
            direction="left"
            type="linear"
            radius={150}
            style={{ right: '1.5rem', bottom: "1.5rem" }}
        />
    )
}