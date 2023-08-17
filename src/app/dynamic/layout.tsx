import {PropsWithChildren} from "react";

export default function DynamicLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <h1>
                Dynamic layout
            </h1>
            {children}
        </div>
    )
}
