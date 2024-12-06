/*
  Warnings:

  - You are about to drop the column `cargo` on the `Usuarios` table. All the data in the column will be lost.
  - Added the required column `cargoId` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuarios" DROP COLUMN "cargo",
ADD COLUMN     "cargoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
