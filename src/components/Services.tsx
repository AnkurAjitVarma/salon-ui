import type { JSX } from "react";
import type { Service as ServiceType, Services as ServicesType } from "../schemas/serviceSchema.tsx";
import { getRouteApi } from "@tanstack/react-router";
import styles from "../styles/Services.module.css"

type ServiceProps = {
    name: string;
    price: number;
    description: string;
    timeInMinutes: number;
}

const Service = (props: ServiceProps): JSX.Element => {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(props.price);
    return <article className={styles.Service}>
        <h5 className={styles.Name}>{props.name}</h5>
        <div className={styles.Details}>
            <div className={styles.Price}>{formattedPrice}</div>
            <div>
                <p className={styles.Description}>{props.description}</p>
                <div className={styles.Time}>{props.timeInMinutes} Minutes</div>
            </div>
            <button className={styles.Booking}>Book Now</button>
        </div>
    </article>
}

const Services = (): JSX.Element => {
    const services: ServicesType = getRouteApi('/').useLoaderData()

    return <ul className={styles.Services}>
        {
            services.map(
                (service: ServiceType) =>
                (<li key={service.id}>
                    <Service name={service.name}
                    price={service.price}
                    description={service.description}
                    timeInMinutes={service.timeInMinutes} />
                </li>)
            )
        }
    </ul>
}

export default Services;