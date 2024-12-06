/*
  Warnings:

  - A unique constraint covering the columns `[naipe]` on the table `Naipes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Naipes_naipe_key" ON "Naipes"("naipe");
