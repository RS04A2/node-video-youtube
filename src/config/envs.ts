import 'dotenv/config'; 

import { get } from 'env-var';
//export envs
export const envs = {
    PORT: get('PORT').default('3000').asPortNumber(),
    DB_HOST: get('DB_HOST').default('localhost').asString(),
    DB_USER: get('DB_USER').default('root').asString(),
    DB_PASSWORD: get('DB_PASSWORD').default('').asString(),
    DB_NAME: get('DB_NAME').default('db').asString(),
    CORS_ORIGIN: get('CORS_ORIGIN').default('http://localhost:5173').asString(),
    JWT_SECRET: get('JWT_SECRET').default('Ze4#1mD.8').asString(),
    DB_PORT: get('DB_PORT').default('3306').asPortNumber(),
};