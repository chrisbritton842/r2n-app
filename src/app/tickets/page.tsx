import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
    OPEN: "O",
    IN_PROGRESS: ">",
    DONE: "X",
};

const TicketsPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <div>
                <h2 className="text-3x1 font-bold tracking-tight">Tickets</h2>
                <p className="text-sm text-muted-foreground">
                    All your tickets at one place
                </p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-y-4">
                {initialTickets.map((ticket) => (
                    <div key={ticket.id} className="w-full max-w-[420px]">
                        <div>{TICKET_ICONS[ticket.status]}</div>
                        <h3 className="text-lg">{ticket.title}</h3>
                        <p className="text-sm">{ticket.content}</p>

                        <Link href={ticketPath(ticket.id)} className="text-sm underline">
                            View
                        </Link>
                    </div>
                ))}
            </div>  
        </div>
    );
};

export default TicketsPage;