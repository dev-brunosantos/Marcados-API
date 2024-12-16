/*
  Warnings:

  - The primary key for the `Escalas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Escalas` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Escalas" DROP CONSTRAINT "Escalas_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Escalas_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Escalas_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Escalas_id_key" ON "Escalas"("id");
