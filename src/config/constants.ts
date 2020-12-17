import { PrismaClient } from "@prisma/client";
export const PORT = process.env.PORT || 4000;
export const PRISMA = new PrismaClient();