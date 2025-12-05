import { createFileRoute } from '@tanstack/react-router'
import Services from "../components/Services.tsx";
import { loaderSchema } from "../schemas/serviceSchema.tsx";

export const Route = createFileRoute('/')({
    component: Services,
    loader: async () => {
        const response = await fetch('/api/services/retrieveAvailableSalonServices')
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const services = await response.json();
        return loaderSchema.parse(services);
    },
    errorComponent: () => <div>Error loading services.</div>,
})

