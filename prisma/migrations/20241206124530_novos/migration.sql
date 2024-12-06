/*
  Warnings:

  - You are about to drop the column `naipe` on the `Usuarios` table. All the data in the column will be lost.
  - Added the required column `naipeId` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuarios" DROP COLUMN "naipe",
ADD COLUMN     "naipeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_naipeId_fkey" FOREIGN KEY ("naipeId") REFERENCES "Naipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
