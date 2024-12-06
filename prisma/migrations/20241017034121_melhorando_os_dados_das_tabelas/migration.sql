/*
  Warnings:

  - You are about to drop the column `id_cargo` on the `Usuarios` table. All the data in the column will be lost.
  - Added the required column `cargo` to the `Usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `naipe` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Usuarios" DROP CONSTRAINT "Usuarios_id_cargo_fkey";

-- AlterTable
ALTER TABLE "Usuarios" DROP COLUMN "id_cargo",
ADD COLUMN     "cargo" TEXT NOT NULL,
ADD COLUMN     "naipe" TEXT NOT NULL;
