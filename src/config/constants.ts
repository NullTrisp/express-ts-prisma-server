import { PrismaClient } from "@prisma/client";
export const PORT = process.env.PORT || 4000;
export const PRISMA = new PrismaClient();
export const ORIGINS: string[] = ['http://localhost:8080'];
export const CORSMSG = 'The CORS policy for this site does not allow access from the specified Origin.';
export const TOKEN_SECRET: string = process.env.TOKEN_SECRET || "09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611";