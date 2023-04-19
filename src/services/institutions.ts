import axios from 'axios';
import Institution from '@/services/models/institutions';

const API_URL = process.env.VUE_APP_API_URL;

export function getInstitutions(): Promise<Institution[]> {
    return axios.get(API_URL + 'institutions')
                .then(res => res.data.data as Institution[]);
}
