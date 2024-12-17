/*
  Warnings:

  - Made the column `dt_culto` on table `Escalas` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Escalas" ALTER COLUMN "dt_culto" SET NOT NULL,
ALTER COLUMN "dt_culto" SET DEFAULT CURRENT_TIMESTAMP;
