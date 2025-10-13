import { cloneElement, ReactElement, useActionState, useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Form } from "./form/form";
import { SubmitButton } from "./form/submit-button";
import { ActionState, EMPTY_ACTION_STATE } from "./form/utils/to-action-state";
import { Button } from "./ui/button";

type UseConfirmDialogArgs = {
    title?: string;
    description?: string;
    action: () => Promise<ActionState>;
    trigger: React.ReactElement;
};

const useConfirmDialog = ({
    title = "Are you absolutely sure?",
    description = "This action cannot be undone. Make sure you understand the consequences.",
    action,
    trigger,
}: UseConfirmDialogArgs) => {
    const [isOpen, setIsOpen] = useState(false);

    const dialogTrigger = cloneElement(
        trigger as ReactElement<{ onClick?: () => void }>,
        {
            onClick: () => setIsOpen((state) => !state),
        }
    );

    const [actionState, formAction] = useActionState(action, EMPTY_ACTION_STATE);

    const handleSuccess = () => {
        setIsOpen(false);
    };

    const dialog = (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Form
                            action={formAction}
                            actionState={actionState}
                            onSuccess={handleSuccess}
                        >
                            <SubmitButton label="Confirm" />
                        </Form>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );

    return [dialogTrigger, dialog] as const;
};

export { useConfirmDialog };