import { Card } from "flowbite-react";

export default function ServiceCard() {
    return (
        <Card
            theme={{
                root: {
                    base: "w-full !bg-white rounded-lg shadow-sm border-0",
                    children: "px-16 py-14 min-h-[230px] !bg-white"
                }
            }}
        >
        </Card>
    );
}