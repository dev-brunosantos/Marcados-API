/*
  Warnings:

  - Added the required column `titulo` to the `Escalas` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Escalas_id_key";

-- AlterTable
ALTER TABLE "Escalas" ADD COLUMN     "titulo" TEXT NOT NULL;
