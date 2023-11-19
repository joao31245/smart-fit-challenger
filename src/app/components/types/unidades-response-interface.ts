import { Location } from "./location-interface";

export interface UnidadesResponse {
    current_country_id: number;
    locations : Location[];
}