import { LucideTrash } from "lucide-react";
import { Dropdown } from "react-day-picker";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ticket } from "@/generated/prisma";

type TicketMoreMenuProps = {
    ticket: Ticket;
    trigger: React.ReactElement;
};

const TicketMoreMenu = ({ ticket, trigger }: TicketMoreMenuProps) => {
    const deleteButton = (
        <DropdownMenuItem>
            <LucideTrash className="h-4 w-4" />
            <span>Delete</span>
        </DropdownMenuItem>
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" side="right">
                {deleteButton}
            </DropdownMenuContent>"
        </DropdownMenu>
    );
};

export { TicketMoreMenu };