export const PORT = process.env.PORT || 4000;
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();